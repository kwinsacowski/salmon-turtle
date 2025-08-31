const createBoxButton = document.getElementById("createBox");
const removeSingleBoxButton = document.getElementById("removeSingleBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

function getRandomColor(){
    const colors = ["#509378", "#859d66", "#74ff99", "#81ab9b", "#92c59a"];
    return colors[Math.floor(Math.random()* colors.length)];
}

function createBox(){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomColor();
    box.innerText = document.querySelectorAll(".box").length + 1;

    boxContainer.appendChild(box);
}

function removeSingleBox(){
    if  (boxContainer.lastChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    }
}

function removeAllBoxes() {
    boxContainer.innerHTML = ""; // Clears the container's inner content
}

createBoxButton.addEventListener("click", createBox);
removeSingleBoxButton.addEventListener("click", removeSingleBox);
removeBoxesButton.addEventListener("click", removeAllBoxes);