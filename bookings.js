const bookingCard = document.getElementById("bookingCard");

// Get booking history
const history = JSON.parse(localStorage.getItem("bookingHistory")) || [];

if (history.length === 0) {
  bookingCard.innerHTML = "<h2>No Bookings Yet</h2>";
} else {
  history.forEach((b) => {
    bookingCard.innerHTML += `
      <div class="history-card">
        <p><strong>Route:</strong> ${b.from} → ${b.to}</p>
        <p><strong>Flight:</strong> ${b.flight_number}</p>
        <p><strong>Seat:</strong> ${b.seat}</p>
        <p><strong>Price:</strong> ₹${b.price}</p>
        <p><strong>Date:</strong> ${new Date(b.bookedAt).toLocaleString()}</p>
      </div>
    `;
  });
}
