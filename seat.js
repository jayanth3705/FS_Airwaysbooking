const seatMap = document.getElementById("seatMap");
const selectedSeatText = document.getElementById("selectedSeat");
const priceText = document.getElementById("totalPrice");

let selectedSeat = null;

// Get selected flight index
const selectedFlightIndex = localStorage.getItem("selectedFlightIndex");
const flights = JSON.parse(localStorage.getItem("flightResults"));

if (selectedFlightIndex === null || !flights) {
  alert("Please select a flight first");
  window.location.href = "flights.html";
}

// Get selected flight object
const flight = flights[selectedFlightIndex];

if (!flight) {
  alert("Invalid flight selection");
  window.location.href = "flights.html";
}

// Seat list
const seats = [
  "1A",
  "1B",
  "1C",
  "1D",
  "2A",
  "2B",
  "2C",
  "2D",
  "3A",
  "3B",
  "3C",
  "3D",
  "4A",
  "4B",
  "4C",
  "4D",
];

// Render seats
seats.forEach((seat) => {
  const btn = document.createElement("button");
  btn.innerText = seat;
  btn.className = "seat";

  btn.onclick = () => {
    document
      .querySelectorAll(".seat")
      .forEach((s) => s.classList.remove("selected"));
    btn.classList.add("selected");

    selectedSeat = seat;
    selectedSeatText.innerText = seat;
    priceText.innerText = flight.price;
  };

  seatMap.appendChild(btn);
});

// Confirm seat
function confirmSeat() {
  if (!selectedSeat) {
    alert("Please select a seat");
    return;
  }

  localStorage.setItem("selectedSeat", selectedSeat);
  window.location.href = "summary.html";
}
