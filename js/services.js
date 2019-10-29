var but1 = document.querySelector(".but1");
var but2 = document.querySelector(".but2");
var but3 = document.querySelector(".but3");

var block1 = document.querySelector(".services-delivery");
var block2 = document.querySelector(".services-guarantee");
var block3 = document.querySelector(".services-credit");

but1.addEventListener("click", function(evt) {
    evt.preventDefault();
    block1.classList.add("services-delivery-show");
    block2.classList.remove("services-guarantee-show");
    block3.classList.remove("services-credit-show");
});

but2.addEventListener("click", function(evt) {
    evt.preventDefault();
    block1.classList.remove("services-delivery-show");
    block2.classList.add("services-guarantee-show");
    block3.classList.remove("services-credit-show");
});

but3.addEventListener("click", function(evt) {
    evt.preventDefault();
    block1.classList.remove("services-delivery-show");
    block2.classList.remove("services-guarantee-show");
    block3.classList.add("services-credit-show");
});