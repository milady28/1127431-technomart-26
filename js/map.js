var linkMap = document.querySelector(".index-map");

var popapMap = document.querySelector(".popap-map");

var closeMap = popapMap.querySelector(".button-close");

linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapMap.classList.add("popap-map-show");
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapMap.classList.remove("popap-map-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popapMap.classList.contains("popap-map-show")) {
            popapMap.classList.remove("popap-map-show");
        }
    }
});