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