const displayButton = document.getElementById("btn");
const displayBulb = document.getElementById("bulp");

displayButton.addEventListener("click", () => {
    if (displayBulb.style.backgroundColor === "yellow") {
        displayBulb.style.backgroundColor = "white";
        displayButton.textContent = "ON";
    } else {
        displayBulb.style.backgroundColor = "yellow";
        displayButton.textContent = "OFF";
    }
});
