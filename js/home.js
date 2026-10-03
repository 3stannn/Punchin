const date = new Date();

const formattedDate = date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

document.getElementById("display-date").textContent = `${formattedDate} | Real-time attendance.`