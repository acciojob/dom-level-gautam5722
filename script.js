//your JS code here. If required.

let targetElement = document.getElementById("level");


let level = 0;


while (targetElement) {
    level++;
    targetElement = targetElement.parentElement;
}


alert("The level of the element is: " + level);
