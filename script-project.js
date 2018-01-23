var parallaxOne = document.querySelector("#firstSection");
var parallaxTwo = document.querySelector("#secondSection")
var parallaxThree = document.querySelector("#thirdSection")
var firstImage = document.querySelector("#firstSection").getBoundingClientRect();
var firstImageHeight = firstImage.height

window.addEventListener("scroll", function() {

  var scrolledHeight = window.pageYOffset
  var limitOne = parallaxOne.offsetTop + parallaxOne.offsetHeight;

  if (scrolledHeight > parallaxOne.offsetTop && scrolledHeight <= limitOne) {
    parallaxOne.style.backgroundPositionY = (scrolledHeight - parallaxOne.offsetTop) / 2.0 + "px";
  } else {
    parallaxOne.style.backgroundPositionY = "0";
  }

  var limitTwo = parallaxTwo.offsetTop + parallaxTwo.offsetHeight;

  if (scrolledHeight > parallaxTwo.offsetTop && scrolledHeight <= limitTwo) {
    parallaxTwo.style.backgroundPositionY = (scrolledHeight - parallaxTwo.offsetTop) / 2.0 + "px";
  } else {
    parallaxTwo.style.backgroundPositionY = "0";
  }

  var limitThree = parallaxThree.offsetTop + parallaxThree.offsetHeight;

  if (scrolledHeight > parallaxThree.offsetTop && scrolledHeight <= limitThree) {
    parallaxThree.style.backgroundPositionY = (scrolledHeight - parallaxThree.offsetTop) / 2.0 + "px";
  } else {
    parallaxThree.style.backgroundPositionY = "0";
  }

  var scrollHeight = window.pageYOffset;

  document.querySelector(".name").style.opacity = firstImageHeight / 600 - scrollHeight / 200;

});
