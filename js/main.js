var main = document.querySelector("#main");
var mainDescription = document.querySelector("main-description");
var toggle = false;

main.addEventListener("click", () => {
    if (toggle) {
        mainDescription.innerHTML = "Welcome to my site";
        toggle = false;
    } else {
        mainDescription.innerHTML = "";
        toggle = true;
    }
});
