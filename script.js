//Create function that adds specific number of divs to sketch container with specific class

const sketchContainer = document.querySelector("#sketch-container");

function addElement() {
    const newDiv = document.createElement("div");
    sketchContainer.appendChild(newDiv)
};

function gridSize(number) {
    const numberSquared = number * number;
    for (let i = 0; i < numberSquared; i++) {
        addElement();
    };
};

//Create a function that calculates and updates the height and width of sketch cells based on number of divs

//Create event listener for Black button and sketch cells that changes color of cells (divs) to black upon mouseover

//Create event listener for Select-a-color button and  sketch cells that changes color of cells (divs) to color specified by user upon mouseover

//Create event listener for Random color button and sketch cells that changes color of cells (divs) to a random color upon mouseover

//Create event listener for reset button to erase the sketch container

//Create event listener for Change grid size button that changes grid size based on user selection - slider?