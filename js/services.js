var slideIndexService = 1;
showSlidesService(slideIndexService);

function plusSlides(n) {
  showSlidesService(slideIndexService += n);
}

function currentSlide(n) {
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
}