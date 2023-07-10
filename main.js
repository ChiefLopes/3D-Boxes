const boxesContainer = document.querySelector('#boxes');
const btn = document.querySelector("#btn");

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let x = 0; x < 4; x++) {
            const box = document.createElement("div")
            box.className = "box"
            console.log(box);
        }
    }
}

createBoxes()