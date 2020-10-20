var backdrop = document.querySelector(".back-drop");
var modal = document.querySelector(".modal");
var modalCancelButton = document.querySelector(".modal__action--negative");
var selectProductButtons = document.querySelectorAll(
  ".products__section button"
);
var mobileNavButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop);
// console.dir(selectProductButtons);

for (let i = 0; i < selectProductButtons.length; i++) {
  selectProductButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalCancelButton) {
  modalCancelButton.addEventListener("click", closeModal);
}

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}

mobileNavButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
