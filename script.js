const btnNavEl = document.querySelector(".menu-btn");
const btnCloseEl = document.querySelector(".close-btn");
const headerEl = document.querySelector(".the-banner");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

btnCloseEl.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
