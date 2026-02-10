window.onload = function () {
  const flights = JSON.parse(localStorage.getItem("flightResults"));
  const container = document.getElementById("flightsContainer");

  if (!flights || flights.length === 0) {
    container.innerHTML = "<p>No flights found</p>";
    return;
  }

  flights.forEach((f, index) => {
    container.innerHTML += `
      <div class="flight-card">
        <h3>${f.flight_number}</h3>
        <p>${f.source} → ${f.destination}</p>
        <p>Price: ₹${f.price}</p>
        <button onclick="selectFlight(${index})">Book</button>
      </div>
    `;
  });
};

function selectFlight(index) {
  localStorage.setItem("selectedFlightIndex", index);
  window.location.href = "seats.html";
}
