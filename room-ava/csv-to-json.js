const parseCSV = (csv) => {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(","); // Get headers (first row)
  const roomColumns = headers.slice(3); // Get room columns (AM.0.2, AM.1.1, etc.)
  const result = {};

  lines.slice(1).forEach((line) => {
    const columns = line.split(",");
    const day = columns[0];
    const start = columns[1];
    const end = columns[2];

    // Ensure the day exists in the result object
    if (!result[day]) result[day] = {};

    // Create a time range key
    const timeRange = `${start}-${end}`;

    // Add data to the day and time range
    result[day][timeRange] = {};

    roomColumns.forEach((room, index) => {
      let roomValue = columns[3 + index] || ""; // Extract the value for each room

      // Clean the room name to remove \r and any other unwanted characters
      room = room.replace(/\r/g, "").trim(); // Clean room name (AM.1.1\r -> AM.1.1)

      // Remove any \r from room values
      roomValue = roomValue.replace(/\r/g, "").trim();

      result[day][timeRange][room] = roomValue; // Assign it to the time slot
    });
  });

  return result;
};

const fetchCSVFromUrl = async (url) => {
  try {
    // Fetch CSV from URL
    const response = await fetch(url);

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV. Status: ${response.status}`);
    }

    const csvData = await response.text();

    // Parse the CSV data
    const parsedData = parseCSV(csvData);
    return parsedData; // Return the parsed data
  } catch (error) {
    console.error("Error fetching or parsing CSV:", error);
    throw error; // Throw the error to propagate it
  }
};

// Expose a public function to take a CSV URL as input
const getParsedDataFromUrl = async (csvUrl) => {
  try {
    const parsedData = await fetchCSVFromUrl(csvUrl); // Await the promise to get the parsed data
    return parsedData; // Return the parsed data
  } catch (error) {
    // Handle the error appropriately (for example, return null or custom message)
    console.error("Error in getting parsed data:", error.message);
    return null; // Return null or handle error as needed
  }
};

// Example usage: this will not run automatically when the script is loaded.
// Instead, you can use the getParsedDataFromUrl function when needed.
