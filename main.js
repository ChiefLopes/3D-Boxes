// const box = document.querySelector(".boxes").classList.add("big")

const boxContainer = document.getElementById("box");
const btn = document.getElementById("btn");

function createBoxes() {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++){
            const box = document.createElement("div")
            console.log(box)
        }
    }
}

createBoxes()