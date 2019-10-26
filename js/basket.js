var buttonBuy = document.querySelectorAll(".button-buy"), index, buttom;

var popapBasket = document.querySelector(".popap-basket");

var closeBasket = popapBasket.querySelector(".button-close");

for (index = 0; index < buttonBuy.length; index++) {
    button = buttonBuy[index];
    button.addEventListener('click', function (event) {
        console.log('click');
        event.preventDefault();
        popapBasket.classList.add("popap-basket-show");
    });
}

closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapBasket.classList.remove("popap-basket-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popapBasket.classList.contains("popap-basket-show")) {
            popapBasket.classList.remove("popap-basket-show");
        }
    }
});