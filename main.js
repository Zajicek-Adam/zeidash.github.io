var burger = document.getElementById("burger");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

var links = document.getElementById("divM");
var telo = document.getElementById("telo");

var content = document.getElementById("content-container");

var isToggled = false;

var checkbox = document.getElementById("check");
const mediaQuery = window.matchMedia("(max-width: 550px)");
var card = document.querySelectorAll(".card");

var contactContainer = document.getElementById("contact-form");
var contact = document.getElementById("contact-text");
var contactOff = document.getElementById("contact-button");
var contactIsOn = false;

function handleTabletChange(e) {
  if (e.matches) {
    links.style.opacity = "0";
    links.style.opacity = "0";
    links.style.visibility = "collapse";
    links.style.zIndex = "-5";
  } else {
    links.style.opacity = "1";
    links.style.visibility = "visible";
    links.style.zIndex = "99999";
    content.style.opacity = "1";
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

burger.onclick = function () {
  if (isToggled == false) {
    one.classList.add("one-active");
    two.classList.add("two-active");
    three.classList.add("three-active");
    one.classList.remove("one-disabled");
    two.classList.remove("two-disabled");
    three.classList.remove("three-disabled");
    links.style.opacity = "1";
    links.style.visibility = "visible";
    links.style.zIndex = "99999";
    telo.style.overflow = "hidden";
    content.style.opacity = "0";
    isToggled = true;
  } else {
    one.classList.add("one-disabled");
    two.classList.add("two-disabled");
    three.classList.add("three-disabled");
    one.classList.remove("one-active");
    two.classList.remove("two-active");
    three.classList.remove("three-active");
    links.style.opacity = "0";
    links.style.visibility = "collapse";
    links.style.zIndex = "-5";
    content.style.opacity = "1";
    telo.style.overflowY = "scroll";
    isToggled = false;
  }
};
contact.onclick = function () {
  if (contactIsOn == false) {
    contactContainer.style.display = "flex";
    contactContainer.style.opacity = 1;
    contactContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
  }
};
contactOff.onclick = function () {
  contactContainer.style.display = "none";
  contactContainer.style.opacity = 1;
  contactContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
};
