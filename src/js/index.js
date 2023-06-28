let prevScrollPos = window.pageYOffset;

const primaryColor = "#f5935f";

const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
const hoverEffect = document.querySelectorAll(".nav-icon");
const boxArrow = document.querySelector("#boxArrow");

window.onscroll = () => {
  showScrollUpButton();

  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-7.5rem";
  }
  prevScrollPos = currentScrollPos;

  if (window.scrollY > 205) {
    // console.log(window.scrollY);
    boxArrow.classList.add("scrolled");
  } else {
    boxArrow.classList.remove("scrolled");
    // alert(window.scrollY);
  }
};

function showScrollUpButton() {
  const scrollUpButton = document.getElementById("scroll-button-up");
  const arrowUp = document.getElementById("arrow-up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.opacity = "1";
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.opacity = "0";
    scrollUpButton.style.display = "none";
  }
  scrollUpButton.onmouseenter = () => {
    arrowUp.style.stroke = primaryColor;
  };
  scrollUpButton.onmouseleave = () => {
    arrowUp.style.stroke = "#fff";
  };
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

searchBox.onfocus = () => {
  searchBtn.style.stroke = primaryColor;
};

searchBox.onblur = () => {
  searchBtn.style.stroke = "#000";
};

hoverEffect.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    event.target.style.stroke = primaryColor;
  });
  element.addEventListener("mouseleave", (event) => {
    event.target.style.stroke = "#000";
  });
});
