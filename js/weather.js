const API_KEY ="a531a7041efb971eede53d853bee08d6";



function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
   .then(Response => Response.json())
   .then((data) => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");
       city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
   });
}


function onGeoError() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);