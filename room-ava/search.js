// Function to search classrooms
const searchClassrooms = (parsedData, day, timeRange) => {
  const result = {
    enteredTime: timeRange,
    enteredDay: day,
    availableClasses: [],
    occupiedClasses: {},
  };

  if (parsedData[day]) {
    const dayData = parsedData[day];

    if (dayData[timeRange]) {
      const timeSlot = dayData[timeRange];

      for (const room in timeSlot) {
        const roomStatus = timeSlot[room];

        if (roomStatus === "") {
          result.availableClasses.push(room);
        } else {
          result.occupiedClasses[room] = roomStatus;
        }
      }
    } else {
      result.error = "No data available for the selected time range.";
    }
  } else {
    result.error = "No data available for the selected day.";
  }

  return result;
};

// Function to handle the search based on user input
const handleSearch = (parsedData) => {
  const day = document.getElementById("day").value;
  const timeRange = document.getElementById("timeRange").value;

  if (day && timeRange) {
    const result = searchClassrooms(parsedData, day, timeRange);
    console.log(result);
    createCards(result);
  } else console.log("Please select both day and time.");
};

// Function to create cards dynamically based on the search result
const createCards = (result) => {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = ""; // Clear existing cards

// Create card for available classrooms
if (result.availableClasses.length > 0) {
  const availableCard = document.createElement("div");
  availableCard.classList.add("card", "available");
  availableCard.innerHTML = `
          <h3>Available Classrooms</h3>
          <ul>
            ${result.availableClasses
              .map(
                (room) => `
                  <li onclick="softBlinkRect(${room.replaceAll(".", "_")}, 0xffff00, 1000, 5)">
                    ${room}
                  </li>`
              )
              .join("")}
          </ul>`;
  cardsContainer.appendChild(availableCard);
}

// Create card for occupied classrooms
if (Object.keys(result.occupiedClasses).length > 0) {
  const occupiedCard = document.createElement("div");
  occupiedCard.classList.add("card", "occupied");
  occupiedCard.innerHTML = `
    <h3>Occupied Classrooms</h3>
    <ul>
      ${Object.entries(result.occupiedClasses)
        .map(
          ([room, status]) => `
            <li onclick="softBlinkRect(${room.replaceAll(".", "_")}, 0xffff00, 1000, 5)">
              ${room} → ${status}
            </li>`
        )
        .join("")}
    </ul>`;
  cardsContainer.appendChild(occupiedCard);
}

  
};
