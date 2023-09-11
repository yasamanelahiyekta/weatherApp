let input = document.querySelector("input");
let d2 = document.querySelector(".d2");
let temp = document.querySelector(".temp");
let des = document.querySelector(".des p");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let fl = document.querySelector(".fl");
let pres = document.querySelector(".pres");
let hum = document.querySelector(".hum");
let ws = document.querySelector(".ws");
let sr = document.querySelector(".sr");
let ss = document.querySelector(".ss");
let icon = document.querySelector(".icon");
let div = document.querySelector(".div");
async function getData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=bd20d14798c81ad1ecb0c2d5be70b497&units=metric`
    );

    const json = await response.json();
    let f = json.sys.sunrise * 1000;
    let d = new Date(f);
    console.log(d);
    let h = json.sys.sunset * 1000;
    let l = new Date(h);
    console.log(l);
    // console.log(json);
    des.textContent = json.weather[0].description;
    temp.textContent = "Temperature : " + json.main.temp + " °C";
    min.textContent = " Minimum Temperature : " + json.main.temp_min + " °C";
    max.textContent = "Maximum Temperature : " + json.main.temp_max + " °C";
    fl.textContent = "Feels Like: " + json.main.feels_like + " °C";
    pres.textContent = "Pressure : " + json.main.pressure + " P";
    hum.textContent = "Humidity: " + json.main.humidity + " %";
    ws.textContent = "Wind Speed : " + json.wind.speed + " km/h";
    sr.textContent = "Sunrise : " + d.toLocaleTimeString();
    ss.textContent = "Sunset : " + l.toLocaleTimeString() ;
    icon.style = `background-image: url( http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png)`;
  } catch (error) {
    console.log(error);
    temp.textContent = "not found";
  }
}

