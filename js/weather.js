const API_KEY = "3ec3b59f14f08e45d16702c5f6e927b1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json()
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;}
        ));
}

function onGeoError() {
    alert("날씨와 위치를 확인할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);