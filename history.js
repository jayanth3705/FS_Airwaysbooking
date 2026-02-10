const historyList = document.getElementById("historyList");

// Dummy completed trips
const travelHistory = [
  {
    from: "Delhi",
    to: "Mumbai",
    airline: "AirWay Express",
    seat: "2B",
    date: "2024-11-12",
    price: 5200,
  },
  {
    from: "Hyderabad",
    to: "Bengaluru",
    airline: "AirWay Express",
    seat: "3C",
    date: "2024-09-05",
    price: 4300,
  },
];

if (travelHistory.length === 0) {
  historyList.innerHTML = "<p>No travel history found.</p>";
} else {
  travelHistory.forEach((trip) => {
    const card = document.createElement("div");
    card.className = "history-card";

    card.innerHTML = `
      <p><strong>Route:</strong> ${trip.from} → ${trip.to}</p>
      <p><strong>Flight:</strong> ${trip.airline}</p>
      <p><strong>Seat:</strong> ${trip.seat}</p>
      <p><strong>Date:</strong> ${trip.date}</p>
      <p><strong>Price:</strong> ₹${trip.price}</p>
      <p class="status">Status: Completed</p>
    `;

    historyList.appendChild(card);
  });
}

function goBack() {
  window.location.href = "dashboard.html";
}
