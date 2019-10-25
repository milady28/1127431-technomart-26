var btnBuy = document.querySelector(".button-buy");

var popapBasket = document.querySelector(".popap-basket");
var closeBasket = popapBasket.querySelector(".button-close");

btnBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapBasket.classList.add("popap-show");
});

closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapBasket.classList.remove("popap-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popapBasket.classList.contains("popap-show")) {
            popapBasket.classList.remove("popap-show");
        }
    }
});