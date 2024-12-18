
function updateDateTimer() {
  const p = document.getElementById('timer');

  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the display string
  const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  p.textContent = formattedTime;
}

// Update the timer every 1 second (1000 milliseconds)
setInterval(updateDateTimer, 1000);

// Initial call to set the timer immediately on page load
updateDateTimer();
