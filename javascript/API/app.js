const singleDogButton = document.getElementById("single-dog-button");
const multipleDogButton = document.getElementById("multiple-dog-button");
const singleDogContainer = document.getElementById("single-dog-image-container");
const multipleDogContainer = document.getElementById("multiple-dog-image-container");

singleDogButton.addEventListener("click", fetchSingleDogImage);
multipleDogButton.addEventListener("click", fetchMultipleDogImages);

async function fetchSingleDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);
    singleDogContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.message;
    singleDogContainer.appendChild(img);
}

async function fetchMultipleDogImages() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await response.json();
    console.log(data);
    multipleDogContainer.innerHTML = "";
    const images = data.message;
    images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        multipleDogContainer.appendChild(img);
    });
}
