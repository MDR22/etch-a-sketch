//Add starting grid size on window load

window.onload = function () {
    gridSize(4);
    sketchCellSize(4);
};

//Create function that adds specific number of divs to sketch container with specific class

const sketchContainer = document.querySelector("#sketch-container");

function addElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketchCell");
    sketchContainer.appendChild(newDiv)
};

function gridSize(number) {
    const numberSquared = number * number;
    for (let i = 0; i < numberSquared; i++) {
        addElement();
    };
    return number;
};

//Create a function that calculates and updates the height and width of sketch cells based on number of divs

function sketchCellSize(number) {
    const sketchCells = document.querySelectorAll(".sketchCell");
    const sketchCellWidth = (500 / number);
    const sketchCellHeight = (500 / number);
    sketchCells.forEach(cell => {
        resetButtonResult();
        cell.style.width = `${sketchCellWidth}px`;
        cell.style.height = `${sketchCellHeight}px`;
        cell.style.margin = "-1px"
        cell.style.border = "1px solid black";
    });
    // newDivGrid.style.width = sketchCellWidth + "px";
    // newDivGrid.style.height = sketchCellHeight + "px";
};

//Create event listener for Black button and sketch cells that changes color of cells (divs) to black upon mouseover

const blackButton = document.querySelector("#black-button");

function blackButtonResult() {
    const sketchCells = document.querySelectorAll(".sketchCell");
    sketchCells.forEach(cell => {
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "black";
        });
    });
};

blackButton.addEventListener("click", blackButtonResult);

//Create event listener for Select-a-color button and  sketch cells that changes color of cells (divs) to color specified by user upon mouseover

//Create event listener for Random color button and sketch cells that changes color of cells (divs) to a random color upon mouseover

const randomColorButton = document.querySelector("#random-color-button");

function randomButtonResult() {
    const sketchCells = document.querySelectorAll(".sketchCell");
    sketchCells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
        });
    });
};

function getRandomColor() {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    return `rgb(${color1}, ${color2}, ${color3})`;
};


randomColorButton.addEventListener("click", randomButtonResult);

//Create event listener for reset button to erase the sketch container

const resetButton = document.querySelector("#reset-button");

function resetButtonResult() {
    const sketchCells = document.querySelectorAll(".sketchCell");
    sketchCells.forEach(cell => {
            cell.style.backgroundColor = "white";
        });
    };

resetButton.addEventListener("click", resetButtonResult);



//Create event listener for Change grid size button that changes grid size based on user selection - slider?