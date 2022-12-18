// let position = getCurrentPosition();



// function Location(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;
//   }

//   Location(position);
//   console.log(latitude);
//   console.log(longitude);

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude)
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    const apikey = '39394ad25b655298315210fb07b79dba'
    getData(lat,long,apikey)
    
  });


  function getData(lat,long,apikey) {
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`
    fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(err=>{
            document.getElementById('noResult').innerHTML=`${"no result found"}`;
            document.getElementById('weather_details').innerHTML="";
        })
        .then(data => {
            const result = `
            <table id="weather_details">
      <tr>
      <td>Location : ${data.name}</td>
  </tr>
  <tr>
      <td>Lat : ${data.coord.lat}</td>
      <td>Long : ${data.coord.lon}</td>
  </tr>
  <tr>
      <td>Time Zone : ${data.timezone}</td>
  </tr>
  <tr>
      <td>Wind Speed : ${data.wind.speed}</td>
  </tr>
  <tr>
      <td>Pressure : ${data.main.pressure}</td>
  </tr>
  <tr>
      <td>Humidity : ${data.main.humidity}</td>
  </tr>
  <tr>
      <td>Temperature : ${data.main.temp}</td>
  </tr>
  <tr>
      <td>visibility : ${data.visibility}</td>
  </tr>
  <tr>
      <td>Feels Like : ${data.main.feels_like}</td>
  </tr>
     </table>`
      document.getElementById('weather_details').remove();
      result_data.insertAdjacentHTML('afterbegin',result);
      

     })
    }