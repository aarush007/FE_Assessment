// Responsive Navbar
const mainMenu = document.querySelector(".mainMenu");
const subMenu = document.querySelector(".subMenu");
const closeMenu = document.querySelector(".closeMenu");
const closeSubMenuBtn = document.querySelector(".subMenu .closeMenu");
const openMenu = document.querySelector(".openMenu");
const openSubMenu = document.querySelector(".openSubMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");
const subMenu_items = document.querySelectorAll("nav .subMenu li ");

openMenu.addEventListener("click", show);
openSubMenu.addEventListener("click", showSubMenu);
closeMenu.addEventListener("click", close);
closeSubMenuBtn.addEventListener("click", closeSubMenu);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});
subMenu_items.forEach((item) => {
  item.addEventListener("click", function () {
    closeSubMenu();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function showSubMenu() {
  subMenu.style.display = "flex";
  subMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
function closeSubMenu() {
  subMenu.style.top = "-100%";
}

// Carousal
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Recognition slider
// Get all the nav items



const navItems = document.querySelectorAll(".reconitionBar ul li a");

// slide call


// Add a click event listener to each nav item
navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    // Prevent the default action (scrolling to the top of the page)
    event.preventDefault();

    const anyActive = document.querySelector(".anchorActive");
    if (anyActive) anyActive.classList.remove("anchorActive");

    navItem.classList.add("anchorActive");

    // Get the id of the clicked nav item (e.g. "nav-item-1")
    const navItemId = this.id;

    recogniBtn = navItemId

    // Get the corresponding slider element (e.g. "slider-1")
    const sliderId = navItemId.replace("nav-item", "slider");
    const slider = document.getElementById(sliderId);

    // Show the corresponding slider and hide the others
    document.querySelectorAll(".slider").forEach((otherSlider) => {
      if (otherSlider === slider) {
        otherSlider.style.display = "block";
        if(document.querySelector('.slider')) {
        let callingElement = otherSlider.id.charAt(otherSlider.id.length -1)
      showDivs(slideIndex,callingElement);
      }


      } else {
        otherSlider.style.display = "none";
      }
    });

    
  });
});



var recogSlideIndex = 1;
if(document.querySelector('.slider'))
showDivs(slideIndex,2);

function plusDivs(n, recogBtn) {
  showDivs((recogSlideIndex += n), recogBtn);
}

function showDivs(n, recogBtn) {
  var i;
  
  var x = document.getElementsByClassName(`myRecogSlide${recogBtn}`);
  if (n > x.length) {
    recogSlideIndex = 1;
  }
  if (n < 1) {
    recogSlideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[recogSlideIndex - 1].style.display = "block";
}

$(window).on('scroll',function() {
  var hT = $('.recognition').offset().top,
  hH = $('.recognition').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  if (wS > ((hT+hH-wH)-500)){
    document.getElementById("nav-item-2").click();
      // This detaches the scroll so doStuff() won't run more than once
      $(window).off('scroll');
      doStuff();
  }
});
