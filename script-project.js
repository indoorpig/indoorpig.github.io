var parallaxOne = document.querySelector("#firstSection");
var parallaxTwo = document.querySelector("#secondSection")
var parallaxThree = document.querySelector("#thirdSection")
var firstImage = document.querySelector("#firstSection").getBoundingClientRect();
var firstImageHeight = firstImage.height

window.addEventListener("scroll", function() {

  // Controls parallax effect of the first title
  var scrollHeight = window.pageYOffset
  var limitOne = parallaxOne.offsetTop + parallaxOne.offsetHeight;
  if (scrollHeight > parallaxOne.offsetTop && scrollHeight <= limitOne) {
    parallaxOne.style.backgroundPositionY = (scrollHeight - parallaxOne.offsetTop) / 2.0 + "px";
  } else {
    parallaxOne.style.backgroundPositionY = "0";
  }

  // Controls parallax effect of the second title
  var limitTwo = parallaxTwo.offsetTop + parallaxTwo.offsetHeight;
  if (scrollHeight > parallaxTwo.offsetTop && scrollHeight <= limitTwo) {
    parallaxTwo.style.backgroundPositionY = (scrollHeight - parallaxTwo.offsetTop) / 2.0 + "px";
  } else {
    parallaxTwo.style.backgroundPositionY = "0";
  }

  // Controls parallax effect of the third title
  var limitThree = parallaxThree.offsetTop + parallaxThree.offsetHeight;
  if (scrollHeight > parallaxThree.offsetTop && scrollHeight <= limitThree) {
    parallaxThree.style.backgroundPositionY = (scrollHeight - parallaxThree.offsetTop) / 2.0 + "px";
  } else {
    parallaxThree.style.backgroundPositionY = "0";
  }

  // Name fade
  document.querySelector(".name").style.opacity = firstImageHeight / 600 - scrollHeight / 200;

});

window.addEventListener("resize", function() {

  var divisionTitle = document.querySelectorAll("h1");
  var viewWidth = window.innerWidth;
  var descriptions = document.querySelectorAll(".description")

  // Scaling of Parallax title
  for (i = 0; i < 3; i++) {
    divisionTitle.item(i).style.fontSize = parseInt(viewWidth / 26.66) + "px";
  }

  // Scaling of general body text
  // If less than half width, scale down. Otherwise, scale back up.
  if (viewWidth < 961) {
    document.querySelector(".summary").style.fontSize = "1em";
    for (i = 0; i < 2; i++) {
      descriptions.item(i).style.fontSize = "1em";
    }
    document.querySelector(".bottom").style.fontSize = "1em";
    document.querySelector(".name ul").style.fontSize = "1em";
    console.log("Activated")
  } else {
    document.querySelector(".summary").style.fontSize = "1.5em";
    for (i = 0; i < 2; i++) {
      descriptions.item(i).style.fontSize = "1.5em";
    }
    document.querySelector(".bottom").style.fontSize = "1.5em";
    document.querySelector(".name ul").style.fontSize = "1.5em";
  }

});
