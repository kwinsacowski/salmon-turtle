//Get Dog Image and add to dog-oputput div
const dogDiv = document.getElementById('dog-output');

async function getDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    data = await response.json();
    console.log(data);
    dogDiv.innerHTML = "";
    const img = document.createElement('img');
    img.src = data.message;
    dogDiv.appendChild(img);
    //CSS stlying for image
    img.style.Width = '300px';
    img.style.height = 'auto';
    img.style.borderRadius = '5px';
    img.style.marginTop = '0.5rem';
     // Always center-align dogDiv content
    dogDiv.style.display = 'flex';
    dogDiv.style.flexDirection = 'column';
    dogDiv.style.justifyContent = 'center';
    //add timeout to remove image after 30 seconds
    setTimeout(() => {
        dogDiv.innerHTML = "";
    }, 30000);
}


//get Cat Image and add to cat-output div
const catDiv = document.getElementById('cat-output');

async function getCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    data = await response.json();
    console.log(data);
    catDiv.innerHTML = "";
    const img = document.createElement('img');
    img.src = data[0].url;
    catDiv.appendChild(img);
    //CSS styling for image
    img.style.Width = '300px';
    img.style.height = 'auto';
    img.style.borderRadius = '5px';
    img.style.marginTop = '0.5rem';
    // Always center-align catDiv content
    catDiv.style.display = 'flex';
    catDiv.style.flexDirection = 'column';
    catDiv.style.justifyContent = 'center';
    //add timeout to remove image after 30 seconds
    setTimeout(() => {
        catDiv.innerHTML = "";
    }, 30000);
}

//Get Weather Data and add to weather-output div
const weatherDiv = document.getElementById('weather-output');

async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.999&longitude=-86.1694&daily=weather_code,sunrise,sunset&current=temperature_2m&timezone=America%2FNew_York&forecast_days=3&temperature_unit=fahrenheit');
        data = await response.json();
        console.log(data);
        weatherDiv.innerHTML = "";
        const weatherInfo = document.createElement('div');
        weatherInfo.innerHTML = `
            <h3>Current Temperature: ${data.current.temperature_2m}°F</h3>
            <p>Sunrise: ${data.daily.sunrise[0]}</p>
            <p>Sunset: ${data.daily.sunset[0]}</p>
        `;
        weatherDiv.appendChild(weatherInfo);
    }   


//Search GitHub Users, get data from API and add to github-output div
const githubDiv = document.getElementById('github-output');
const githubForm = document.getElementById('github-form');
const githubInput = document.getElementById('github-username');


async function getGitHubUser() {
    const username = githubInput.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    githubDiv.innerHTML = "";
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <h3>${data.login}</h3>
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" style="width:100px; height:auto; border-radius:5px;"/>
        <p>Public Repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
    `;
    githubDiv.appendChild(userInfo);
}