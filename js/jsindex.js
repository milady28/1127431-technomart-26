var linkFeedback = document.querySelector(".contacts .button");

var popapFeedback = document.querySelector(".popap-feedback");
var closeFeedback = popapFeedback.querySelector(".button-close");

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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-block-big");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

var slideIndexService = 1;
showSlidesService(slideIndexService);

function plusSlidesService(n) {
  showSlidesService(slideIndexService += n);
}

function currentSlideService(n) {
  showSlidesService(slideIndexService = n);
}

function showSlidesService(n) {
  var i;
  var slidesService = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slidesService.length) {
    slideIndexService = 1
}
  if (n < 1) {
    slideIndexService = slidesService.length
}
  for (i = 0; i < slidesService.length; i++) {
      slidesService[i].style.display = "none";
  }
  slidesService[slideIndexService-1].style.display = "block";
};