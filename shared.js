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
    backdrop.style.display = "block";
    modal.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
      modal.classList.add("open");
    }, 10);
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
  if (modal) {
    modal.classList.remove("open");
  }
  setTimeout(function () {
    backdrop.style.display = "none";
    modal.style.display = "none";
    mobileNav.style.display = "none";
  }, 300);
  backdrop.classList.remove("open");
}

mobileNavButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
  modal.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
  }, 10);
});
