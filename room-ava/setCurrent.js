// Function to set default date and time
function setDefaultDateTime() {
    const currentDate = new Date();
    
    // Set the current day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getDay()];
    document.getElementById('day').value = currentDay;
  
    // Set the current time (use the current hour to select the nearest time range)
    const currentHour = currentDate.getHours();
    let currentTimeRange = '';
  
    // Use switch to map current hour to corresponding time range
    switch (true) {
      case (currentHour >= 8 && currentHour < 9):
        currentTimeRange = '08:00-08:55';
        break;
      case (currentHour >= 9 && currentHour < 10):
        currentTimeRange = '09:00-09:55';
        break;
      case (currentHour >= 10 && currentHour < 11):
        currentTimeRange = '10:00-10:55';
        break;
      case (currentHour >= 11 && currentHour < 12):
        currentTimeRange = '11:00-11:55';
        break;
      case (currentHour >= 12 && currentHour < 13):
        currentTimeRange = '12:00-12:55';
        break;
      case (currentHour >= 13 && currentHour < 14):
        currentTimeRange = '13:00-13:55';
        break;
      case (currentHour >= 14 && currentHour < 15):
        currentTimeRange = '14:00-14:55';
        break;
      case (currentHour >= 15 && currentHour < 16):
        currentTimeRange = '15:00-15:55';
        break;
      case (currentHour >= 16 && currentHour < 17):
        currentTimeRange = '16:00-16:55';
        break;
      case (currentHour >= 17 && currentHour < 18):
        currentTimeRange = '17:00-17:55';
        break;
      case (currentHour >= 18):
        currentTimeRange = '18:00-18:55';
        break;
    }
  
    // Set the selected time range
    document.getElementById('timeRange').value = currentTimeRange;
  }
  
  // Set default date and time when the page loads
  window.onload = function() {
    setDefaultDateTime();
  };
  