// DOM Manipulation
document.addEventListener("DOMContentLoaded", getText);

function getText() {
    console.log(document.getElementById("introText"));
    console.log(document instanceof HTMLDocument); // deprecated
}
