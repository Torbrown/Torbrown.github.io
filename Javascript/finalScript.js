// This was built using the guidance of a tutorial to begin with. The author and link is here : https://www.youtube.com/watch?v=WZNG8UomjSI
let index= 0;
let storedData= {};
let weather = {
  apiKey: "63bbedb8af2bfba44c2d347968939b1a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q="
      + city
      +"&units=imperial&appid="
      + this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {this.displayWeather(data); storedData=data });
  },
  displayWeather: function (data, index=0) {
    const { name } = data.city;
    console.log(name)
    const { icon, description } = data.list[index].weather[0];
    const { temp, temp_min, temp_max } = data.list[index].main;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".temp_min").innerText =
      "Low: " + temp_min + "°F";
    document.querySelector(".temp_max").innerText =
      "High: " + temp_max + " °F";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Boulder");


const buttons= document.querySelectorAll(".day-btn button");
buttons.forEach((button)=> {
  button.addEventListener("click", (e)=> {
     weather.displayWeather(storedData, button.id)
  })
})
