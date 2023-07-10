const boxesContainer = document.querySelector('#boxes');
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
boxesContainer.classList.toggle("big")})

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let x = 0; x < 4; x++) {
            const box = document.createElement("div")
            box.className = "box"
            box.style.backgroundPosition = `${-x * 110}px ${-i * 110}px`;
            boxesContainer.appendChild(box)
            // console.log(box);
        }
    }
}

createBoxes()