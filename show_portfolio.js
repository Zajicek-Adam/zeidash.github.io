var container = document.getElementById("second");
var portfolio = document.getElementById("content-container");
var btn_1 = document.getElementById("b_one");
var btn_2 = document.getElementById("b_two");
var btn_3 = document.getElementById("b_three");

var oneSelected = false;
var twoSelected = false;
var threeSelected = false;

btn_1.onclick = handleOne;
btn_2.onclick = handleTwo;
btn_3.onclick = handleThree;

function handleOne() {
    oneSelected = true;
    portfolio.style.transition = "transform 200ms ease-out";
    container.style.transition = "all 200ms ease";
    container.style.display = "flex";
    container.style.opacity = "1";
    container.style.position = "absolute";
    container.style.left = "0";
    container.style.top = "0";

    // Zobrazení komponent první části portfolia
}
function handleTwo() {}
function handleThree() {}
