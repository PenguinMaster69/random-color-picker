const colorBox = document.getElementById("color-box")
const colorBtn = document.getElementById("color-btn")
const clearBtn = document.getElementById("clear-btn")

function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

colorBtn.addEventListener("click", function() {
    const randomColor = getRandomColor()
    colorBox.style.backgroundColor = randomColor
    colorBox.textContent = randomColor
})

clearBtn.addEventListener("click", function() {
    colorBox.style.backgroundColor = "white"
    colorBox.textContent = ""
})
