var buttonBuy = document.querySelectorAll(".button-buy"), index, buttom;
var popapBasket = document.querySelector(".popap-basket");
var closeBasket = popapBasket.querySelector(".button-close");

for (index = 0; index < buttonBuy.length; index++) {
    button = buttonBuy[index];
    button.addEventListener("click", function (event) {
        console.log("click");
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

var linkFeedback = document.querySelector(".contacts .button");
var popapFeedback = document.querySelector(".popap-feedback");
var closeFeedback = popapFeedback.querySelector(".button-close-feedback");
var formFeedback = popapFeedback.querySelector("form");
var nameFeedback = popapFeedback.querySelector("[name=username]");
var emailFeedback = popapFeedback.querySelector("[name=email]");
var letterFeedback = popapFeedback.querySelector("[name=letter]");
var isStorageSupport = true;
var storageFeedback = "";

try {
    storageFeedback = localStorage.getItem("emailFeedback");
} catch (err) {
    isStorageSupport = false;
}

linkFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapFeedback.classList.add("popap-show");
    
    if (storageFeedback) {
        emailFeedback.value = storageFeedback;
        letterFeedback.focus();
    } else {
        emailFeedback.focus();
    }
});

closeFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popapFeedback.classList.remove("popap-show");
    popapFeedback.classList.remove("popap-feedback-error");
});

formFeedback.addEventListener("submit", function(evt) {
    if (!emailFeedback.value || !letterFeedback.value) {
        evt.preventDefault();
        popapFeedback.classList.remove("popap-feedback-error");
        popapFeedback.offsetWidth = popapFeedback.offsetWidth;
        popapFeedback.classList.add("popap-feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", emailFeedback.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popapFeedback.classList.contains("popap-show")) {
            popapFeedback.classList.remove("popap-show");
            popapFeedback.classList.remove("popap-feedback-error");
        }
    }
});

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

var nextSlideButton = document.querySelector(".button-forward");
var prevSlideButton = document.querySelector(".button-back");

nextSlideButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    plusSlideBtn();
});

prevSlideButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    minusSlideBtn();
});

function plusSlideBtn() {
    showSlides(slideIndex += 1);
}

function minusSlideBtn() {
    showSlides(slideIndex -= 1);
}

var dots = document.getElementsByClassName("dot");
var dotsArea = document.getElementsByClassName("dots-slider")[0];
var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

dotsArea.onclick = function (e) {
    for (var i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains("dot") && e.target == dots[i-1]) {
            currentSlide(i);
        }
    }
}

var dotService = document.getElementsByClassName("dotService");
var linkArea = document.getElementsByClassName("servises-link")[0];
var slidesService = document.getElementsByClassName("mySlidesService");
var slideIndexService = 1;

showSlidesService(slideIndexService);

function showSlidesService (n) {
    if (n < 1) {
        slideIndexService = slidesService.length;
    } else if (n > slidesService.length) {
        slideIndexService = 1;
    }

    for (var i = 0; i < slidesService.length; i++) {
        slidesService[i].style.display = "none";
    }

    for (var i = 0; i < dotService.length; i++) {
        dotService[i].classList.remove("activeService");
    }

    slidesService[slideIndexService - 1].style.display = "block";
    dotService[slideIndexService - 1].classList.add("activeService");
}

function currentSlideService (n) {
    showSlidesService(slideIndexService = n);
}

linkArea.onclick = function (e) {
    for (var i = 0; i < dotService.length + 1; i++) {
        if (e.target.classList.contains("dotService") && e.target == dotService[i-1]) {
            currentSlideService(i);
        }
    }
}