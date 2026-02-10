document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("travelDate");

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
});

function searchFlights(event) {
  event.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("travelDate").value;

  if (from === to) {
    alert("Departure and destination cannot be same");
    return;
  }

  // Check for past date
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    alert("Past dates are not allowed");
    return;
  }

  const cityMap = {
    Hyderabad: "HYD",
    "Bengaluru (Bangalore)": "BLR",
    Delhi: "DEL",
  };

  const sourceCode = cityMap[from];
  const destCode = cityMap[to];

  console.log("Searching flights:", sourceCode, destCode);

  fetch(`../api/searchflights.php?source=${sourceCode}&dest=${destCode}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Flights from DB:", data);
      localStorage.setItem("flightResults", JSON.stringify(data));
      window.location.href = "flights.html";
    })
    .catch((err) => console.error("API ERROR:", err));
}
