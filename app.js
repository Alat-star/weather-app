const inputTag = document.querySelector('.city-text');
const loc = document.querySelector('.location');
const mobileLocatn = document.querySelector('.location-two');
const degree = document.querySelector('.degree');
const desc = document.querySelector('.description');
const humid = document.querySelector('.hum');
const vision = document.querySelector('.eye');
const atmPressure = document.querySelector('.atm');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('.inputForm');




function getResolution () {
    if (screen.width <= 1000) {
       
       return  inputTag.placeholder = 'Enter city';
        
    }
    else {
       return inputTag.placeholder = '';
    }
};


getResolution();

function convertTemp (number) {
    let ans = number - 273.15;
    return `${Math.round(ans)}°C` 
}

function convertVisibility (value) {
    return (value/1000);
}




window.onload = async function staticWeather (url) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9b6a665cf23078ccc2e6c533358cc341`;
    let response = await fetch(url);
    let result = await response.json();
    const tempK = result.main.temp; 
    degree.textContent = convertTemp(tempK);
    loc.textContent = `${result.name}, ${result.sys.country}`;
    desc.textContent = result.weather[0].description;
    vision.textContent = convertVisibility(result.visibility);
    humid.textContent = result.main.humidity;
    atmPressure.textContent = `${result.main.pressure}`;
}







async function getWeather (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b6a665cf23078ccc2e6c533358cc341`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result;
    processData(data);
    
    

}

// getWeather('california');

function processData (input) {
  const tempK = input.main.temp; 
  degree.textContent = convertTemp(tempK);
  loc.textContent = `${input.name}, ${input.sys.country}`;
  desc.textContent = input.weather[0].description;
  vision.textContent = convertVisibility(input.visibility);
  humid.textContent = input.main.humidity;
  atmPressure.textContent = `${input.main.pressure}`;
}



form.addEventListener('submit', () => getWeather(inputTag.value));




