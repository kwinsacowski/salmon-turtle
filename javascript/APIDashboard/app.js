//Get Dog Image and add to dog-oputput div
const dogDiv = document.getElementById('dog-output');

async function getDogImage() {
    dogDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json();
    console.log(data);
    const img = document.createElement('img');
    img.src = data.message;
    dogDiv.innerHTML = "";
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
    catDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(data);
    const img = document.createElement('img');
    img.src = data[0].url;
    catDiv.innerHTML = "";
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
    weatherDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.999&longitude=-86.1694&daily=weather_code,sunrise,sunset&current=temperature_2m&timezone=America%2FNew_York&forecast_days=3&temperature_unit=fahrenheit');
        const data = await response.json();
        console.log(data);
        const weatherInfo = document.createElement('div');
        weatherInfo.innerHTML = `
            <h3>Current Temperature: ${data.current.temperature_2m}°F</h3>
            <p>Sunrise: ${data.daily.sunrise[0]}</p>
            <p>Sunset: ${data.daily.sunset[0]}</p>
        `;
    weatherDiv.innerHTML = "";
    weatherDiv.appendChild(weatherInfo);
    }   

//Get USD to EUR exchnage rate and add to exchange-output div
const exchangeDiv = document.getElementById('currency-output');

async function getExchangeRates() {
    exchangeDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://api.currencybeacon.com/v1/latest?api_key=Oet7MpGGEYO8D68i28RDt7RALz5kNXs8');
    const data = await response.json();
    console.log(data);
    const exchangeInfo = document.createElement('div');
    exchangeInfo.innerHTML = `
        <h3>USD to EUR Exchange Rate: ${data.rates.EUR}</h3>
        `;
    exchangeDiv.innerHTML = "";
    exchangeDiv.appendChild(exchangeInfo);
}

//Get two random movies from Movie API and add to movie-output div
const movieDiv = document.getElementById('movie-output');

async function getMovies() {
    movieDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4d9ffa66ab11463338643e313ce17d33&language=en-US');
    const data = await response.json();
    console.log(data);
    const movies = data.results;
    // Select two unique random movies
    const randomMovies = [];
    while (randomMovies.length < 2 && movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const movie = movies[randomIndex];
        if (!randomMovies.includes(movie)) {
            randomMovies.push(movie);
        }
    }
    movieDiv.innerHTML = "";
    randomMovies.forEach(movie => {
        const movieInfo = document.createElement('div');
        movieInfo.innerHTML = `
            <h3>${movie.title} (${movie.release_date.split('-')[0]})</h3>
            <p>Rating: ${movie.vote_average}</p>
            <p>${movie.overview}</p>
        `;
        movieDiv.appendChild(movieInfo);
    });
}

//Search GitHub Users, get data from API and add to github-output div
const githubDiv = document.getElementById('github-output');
const githubForm = document.getElementById('github-form');
const githubInput = document.getElementById('github-username');


async function getGitHubUser() {
    githubDiv.innerHTML = "<p>Loading...</p>";
    const username = githubInput.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <h3>${data.login}</h3>
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" style="width:100px; height:auto; border-radius:5px;"/>
        <p>Public Repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
    `;
    githubDiv.innerHTML = "";
    githubDiv.appendChild(userInfo);
}

// Get data from Joke API and add to joke-output div
const jokeDiv = document.getElementById('joke-output');

async function getJoke() {
    jokeDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any');
    const data = await response.json();
    console.log(data);
    const jokeInfo = document.createElement('div');
    if (data.type === 'single') {
        jokeInfo.innerHTML = `<p>${data.joke}</p>`;
    } else if (data.type === 'twopart') {
        jokeInfo.innerHTML = `<p>${data.setup}</p><p><em>${data.delivery}</em></p>`;
    }
    jokeDiv.innerHTML = "";
    jokeDiv.appendChild(jokeInfo);
}

//Get random book name from Opeb Library API and add to book-output div
const bookDiv = document.getElementById('book-output');


async function getBook() { //pool of books console logged
    bookDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=100");
    const data = await response.json();
    console.log(data);

    // Select a random book from the list
    const works = data.works;
    const randomIndex = Math.floor(Math.random() * works.length);
    const randomBook = works[randomIndex];
    console.log(randomBook);

    const coverUrl =  await fetch (`https://covers.openlibrary.org/b/id/${randomBook.cover_id}-L.jpg`);

    const bookInfo = document.createElement('div');
    bookInfo.innerHTML = `
        <h3>${randomBook.title}</h3>
        <p>Author: ${randomBook.authors.map(author => author.name).join(', ')}</p>
        <img src="https://covers.openlibrary.org/b/id/${randomBook.cover_id}-L.jpg" alt="${randomBook.title} cover" style="width:200px; height:auto; border-radius:5px; margin-top:0.5rem;"/>
    `;
    bookDiv.innerHTML = "";
    bookDiv.appendChild(bookInfo);
}