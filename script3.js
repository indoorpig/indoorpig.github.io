// Loader
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".screen").classList.add('loaded');
  }, 500);
});

var content = document.querySelector(".screen");

window.onload = function() {


  // Recalculate Margins - Resets view every time
  project = document.querySelector("#project1").getBoundingClientRect();
  projectHeight = project.height;
  viewHeight = window.innerHeight;
  viewWidth = window.innerWidth;
  marginHeight = (viewHeight - projectHeight) / 2;

  projectCards = document.querySelectorAll(".project-card");
  for (i = 0; i < 5; i++) {
    projectCards.item(i).style.marginTop = marginHeight + "px";
    projectCards.item(i).style.marginBottom = marginHeight + "px";
  }
  aboutText.style.marginTop = marginHeight + "px";
  aboutText.style.marginBottom = marginHeight + "px";

  // Recalculating fixing height thresholds according to new size
  fixThresh = (marginHeight + projectHeight);

  // Rescaling text
  var textSizes = document.querySelectorAll(".text ul");
  for (i = 0; i < 5; i++) {
    textSizes.item(i).style.fontSize = parseInt(viewWidth / 60) + "px";
  }
}

// Refresh at top
window.onbeforeunload = function() {
  // window.scrollTo(0, 0);
};

let scrollHeight = 0;
var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

// First element fixed
var container = document.querySelector("#card-container");
var title = document.querySelector(".title");
container.style.position = "fixed";
container.style.left = "0";
container.style.right = "0";

// Calculating Margins
var project = document.querySelector("#project1").getBoundingClientRect();
var projectHeight = project.height;
var marginHeight = (viewHeight - projectHeight) / 2;

// Sets Margins
var projectCards = document.querySelectorAll(".project-card");
for (i = 0; i < 5; i++) {
  projectCards.item(i).style.marginTop = marginHeight + "px";
  projectCards.item(i).style.marginBottom = marginHeight + "px";
}

var aboutText = document.querySelector(".text");
aboutText.style.marginTop = marginHeight + "px";
aboutText.style.marginBottom = marginHeight + "px";

// Sets Margins for title

// Fix Threshold is the amount you need to scroll to get to make elements fix
// One margin + one project height means that once that first project exits, next one locks
var fixThresh = (marginHeight + projectHeight);

// This is the amount needed to scroll to get elements unfixed
var unfixHeight = 1000;

// Forgot to add this in before so all Enters/Exits have to add this value
var halfUnfix = (unfixHeight / 2)

window.addEventListener("resize", function(event) {

  // Recalculate Margins
  project = document.querySelector("#project1").getBoundingClientRect();
  projectHeight = project.height;
  viewHeight = window.innerHeight;
  viewWidth = window.innerWidth;
  marginHeight = (viewHeight - projectHeight) / 2;

  // Recalculating Margins
  projectCards = document.querySelectorAll(".project-card");
  for (i = 0; i < 5; i++) {
    projectCards.item(i).style.marginTop = marginHeight + "px";
    projectCards.item(i).style.marginBottom = marginHeight + "px";
  }
  aboutText.style.marginTop = marginHeight + "px";
  aboutText.style.marginBottom = marginHeight + "px";

  // Recalculating fixing height thresholds according to new size
  fixThresh = (marginHeight + projectHeight);

  // Rescaling text
  var textSizes = document.querySelectorAll(".text ul");

  console.log(viewWidth);
  if (viewWidth < 1101) {
    textSizes.item(i).style.fontSize = "18px";
  } else {
    for (i = 0; i < 5; i++) {
      textSizes.item(i).style.fontSize = parseInt(viewWidth / 60) + "px";
    }
  }

});

window.addEventListener("scroll", function(event) {

  // Recalculate scrollHeight
  scrollHeight = window.pageYOffset;

  var fixThresh2 = fixThresh * 2 + unfixHeight;
  var fixThresh3 = fixThresh * 3 + unfixHeight * 2;
  var fixThresh4 = fixThresh * 4 + unfixHeight * 3;
  var fixThresh5 = fixThresh * 5 + unfixHeight * 4;
  var fixThresh6 = fixThresh * 6 + unfixHeight * 5;

  var firstExit = halfUnfix;
  var secondEnter = fixThresh + halfUnfix;
  var secondExit = fixThresh + unfixHeight + halfUnfix;
  var thirdEnter = fixThresh2 + halfUnfix;
  var thirdExit = fixThresh2 + unfixHeight + halfUnfix;
  var fourthEnter = fixThresh3 + halfUnfix;
  var fourthExit = fixThresh3 + unfixHeight + halfUnfix;
  var fifthEnter = fixThresh4 + halfUnfix;
  var fifthExit = fixThresh4 + unfixHeight + halfUnfix;
  var sixthEnter = fixThresh5 + halfUnfix;
  var sixthExit = fixThresh5 + unfixHeight + halfUnfix;
  var seventhEnter = fixThresh6 + halfUnfix;

  // Fixing/Unfixing States

  // First Fix Enter
  if (scrollHeight <= firstExit) {
    document.querySelector(".title").innerHTML = "data visualization";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.right = "0";
    container.style.top = "0px";
    title.style.opacity = 1 - (scrollHeight + 5) / halfUnfix;
  }

  // First Fix Exit
  if (scrollHeight > firstExit && scrollHeight < secondEnter) {
    container.style.position = "relative";
    container.style.top = halfUnfix + "px";
  }

  // Second Fix Enter
  if (scrollHeight >= secondEnter && scrollHeight <= secondExit) {
    document.querySelector(".title").innerHTML = "inspection";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.right = "0";
    container.style.top = -(marginHeight + projectHeight) + "px";

    // Second Fix Halfway - Text Fade
    if (scrollHeight < fixThresh + unfixHeight) {
      title.style.opacity = (scrollHeight - secondEnter) / (scrollHeight - secondEnter + halfUnfix) * 2;
    } else {
      title.style.opacity = 1 - ((scrollHeight - secondEnter - halfUnfix) / ((scrollHeight - secondEnter))) * 2;
    }
  }

  // Second Fix Exit
  if (scrollHeight > secondExit && scrollHeight < thirdEnter) {
    container.style.position = "relative";
    container.style.top = unfixHeight + halfUnfix + "px";
  }

  // Third Fix Enter
  if (scrollHeight >= thirdEnter && scrollHeight <= thirdExit) {
    document.querySelector(".title").innerHTML = "skymouse";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.right = "0";
    container.style.top = -(2 * marginHeight + 2 * projectHeight) + "px";

    // Third Fix Halfway - Text Fade
    if (scrollHeight < fixThresh2 + unfixHeight) {
      title.style.opacity = (scrollHeight - thirdEnter) / (scrollHeight - thirdEnter + halfUnfix) * 2;
    } else {
      title.style.opacity = 1 - ((scrollHeight - thirdEnter - halfUnfix) / ((scrollHeight - thirdEnter))) * 2;
    }
  }

  // Third Fix Exit
  if (scrollHeight > thirdExit && scrollHeight < fourthEnter) {
    container.style.position = "relative";
    container.style.top = (2 * unfixHeight + halfUnfix) + "px";
  }

  // Fourth Fix Enter
  if (scrollHeight >= fourthEnter && scrollHeight <= fourthExit) {
    document.querySelector(".title").innerHTML = "harlem globetrotters rube goldberg";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.right = "0";
    container.style.top = -(3 * marginHeight + 3 * projectHeight) + "px";

    // Fourth Fix Halfway - Text Fade
    if (scrollHeight < fixThresh3 + unfixHeight) {
      title.style.opacity = (scrollHeight - fourthEnter) / (scrollHeight - fourthEnter + halfUnfix) * 2;
    } else {
      title.style.opacity = 1 - ((scrollHeight - fourthEnter - halfUnfix) / ((scrollHeight - fourthEnter))) * 2;
    }
  }

  // Fourth Fix Exit
  if (scrollHeight > fourthExit && scrollHeight < fifthEnter) {
    container.style.position = "relative";
    container.style.top = (3 * unfixHeight + halfUnfix) + "px";
  }

  // Fifth Fix Enter
  if (scrollHeight >= fifthEnter && scrollHeight <= fifthExit) {
    document.querySelector(".title").innerHTML = "animation and video";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.right = "0";
    container.style.top = -(4 * marginHeight + 4 * projectHeight) + "px";

    // Fifth Fix Halfway - Text Fade
    if (scrollHeight < fixThresh4 + unfixHeight) {
      title.style.opacity = (scrollHeight - fifthEnter) / (scrollHeight - fifthEnter + halfUnfix) * 2;
    } else {
      title.style.opacity = 1 - ((scrollHeight - fifthEnter - halfUnfix) / ((scrollHeight - fifthEnter))) * 2;
    }
  }

  // Fifth Fix Exit
  if (scrollHeight > fifthExit && scrollHeight < sixthEnter) {
    document.querySelector(".title").innerHTML = "";
    container.style.position = "relative";
    container.style.top = (4 * unfixHeight + halfUnfix) + "px";
    aboutText.style.position = "relative";
    aboutText.style.top = "px";
  }

  // Sixth Fix Enter
  if (scrollHeight >= sixthEnter && scrollHeight <= sixthExit) {
    aboutText.style.position = "fixed";
    aboutText.style.top = (marginHeight / 2) + "px";
    // aboutText.style.marginTop = marginHeight/4 + "px";
  }

  var aboutTextScrollDist = unfixHeight / 5;
  var textOne = document.querySelector("#text1");
  var textTwo = document.querySelector("#text2");
  var textThree = document.querySelector("#text3");
  var textFour = document.querySelector("#text4");
  var textFive = document.querySelector("#text5");

  if (scrollHeight > fixThresh5 + marginHeight) {
    textOne.style.opacity = (scrollHeight - sixthEnter + marginHeight) / (scrollHeight - sixthEnter + marginHeight + halfUnfix) * 2;
  } else {
    textOne.style.opacity = 0;
  }

  if (scrollHeight > fixThresh5 + marginHeight + aboutTextScrollDist) {
    textTwo.style.opacity = (scrollHeight - sixthEnter + marginHeight - aboutTextScrollDist) / (scrollHeight - sixthEnter + marginHeight + halfUnfix - aboutTextScrollDist) * 2;
  } else {
    textTwo.style.opacity = 0;
  }

  if (scrollHeight > fixThresh5 + marginHeight + aboutTextScrollDist * 2) {
    textThree.style.opacity = (scrollHeight - sixthEnter + marginHeight - aboutTextScrollDist * 2) / (scrollHeight - sixthEnter + marginHeight + halfUnfix - aboutTextScrollDist * 2) * 2;
  } else {
    textThree.style.opacity = 0;
  }

  if (scrollHeight > fixThresh5 + marginHeight + aboutTextScrollDist * 3) {
    textFour.style.opacity = (scrollHeight - sixthEnter + marginHeight - aboutTextScrollDist * 3) / (scrollHeight - sixthEnter + marginHeight + halfUnfix - aboutTextScrollDist * 3) * 2;
  } else {
    textFour.style.opacity = 0;
  }

  if (scrollHeight > fixThresh5 + marginHeight + aboutTextScrollDist * 4) {
    textFive.style.opacity = (scrollHeight - sixthEnter + marginHeight - aboutTextScrollDist * 4) / (scrollHeight - sixthEnter + marginHeight + halfUnfix - aboutTextScrollDist * 4) * 2;
  } else {
    textFive.style.opacity = 0;
  }

});
