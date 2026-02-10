const selectedFlightIndex = localStorage.getItem("selectedFlightIndex");
const selectedSeat = localStorage.getItem("selectedSeat");
const flights = JSON.parse(localStorage.getItem("flightResults"));

if (!selectedFlightIndex || !selectedSeat || !flights) {
  alert("Booking data missing. Please book again.");
  window.location.href = "home.html";
}

const flight = flights[selectedFlightIndex];

// Show details
document.getElementById("route").innerText =
  `${flight.source} → ${flight.destination}`;
document.getElementById("flightName").innerText = flight.flight_number;
document.getElementById("seat").innerText = selectedSeat;
document.getElementById("price").innerText = flight.price;

// Confirm booking
function confirmBooking() {
  const booking = {
    flight_number: flight.flight_number,
    from: flight.source,
    to: flight.destination,
    seat: selectedSeat,
    price: flight.price,
    bookedAt: new Date().toISOString(),
  };

  let history = JSON.parse(localStorage.getItem("bookingHistory")) || [];
  history.push(booking);
  localStorage.setItem("bookingHistory", JSON.stringify(history));

  alert("Booking Confirmed!");
  window.location.href = "dashboard.html";
}
