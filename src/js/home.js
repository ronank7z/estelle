let prevScrollPos = window.pageYOffset;

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-button");

window.onscroll = () => {
  showScrollUpButton();

  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-7.5rem";
  }
  prevScrollPos = currentScrollPos;
};

function showScrollUpButton() {
  let scrollUpButton = document.getElementById("scroll-button-up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.opacity = "1";
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.opacity = "0";
    scrollUpButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBtn.style.opacity = "0";
};

document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
    searchBtn.style.opacity = "1";
  }
});
