console.log("Client side JS");

const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
document.querySelector(".loading").style.display = "none";

weatherForm.addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector(".data-value").style.display = "none";

  document.querySelector(".loading").style.display = "block";

  document.querySelector(".loading").textContent =
    "Loading Weather data .......";

  fetch(`http://127.0.0.1:8000/fetchWeather?location=${input.value}`).then(
    response => {
      response.json().then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".location").textContent = data.location;
          document.querySelector(".temp").textContent = data.temperature;
          document.querySelector(".rain").textContent = data.chanceOfRain;
          document.querySelector(".data-value").style.display = "block";
        }
      });
    }
  );
});
