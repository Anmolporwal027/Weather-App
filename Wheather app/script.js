const inputcity = document.querySelector("#input");
const searchbtn = document.querySelector("#btn");
const temp = document.querySelector(".temp");
const cityname = document.querySelector(".cityname");
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

const Key = "91da12baa74fde46adc04c6a24c570be"
const URl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(inputcity) {
    const response = await fetch(URl + `&q=${inputcity}`+`&appid=${Key}`);
    var data = await response.json();
    console.log(data);
    // console.log(data.main.temp);

    temp.innerHTML = `${Math.round(data.main.temp)}°c `
    cityname.innerHTML = data.name;
    wind.innerHTML = `${Math.round(data.wind.speed)}km/h`
    humidity.innerHTML = `${Math.round(data.main.humidity)}%`
}

searchbtn.addEventListener('click',()=>{
    checkWeather(inputcity.value);
})