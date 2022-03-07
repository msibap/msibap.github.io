const backdrop = document.querySelector(".back-drop");
const modal = document.querySelector(".modal");
const modalCancelButton = document.querySelector(".modal__action--negative");
const selectProductButtons = document.querySelectorAll(
  ".products__section button"
);
const mobileNavButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavCloseButton = document.querySelector(".mobile-nav__close-btn");

if (selectProductButtons) {
  selectProductButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      modal.classList.add("open");
      backdrop.classList.add("open");
    });
  });
}

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
});

if (modalCancelButton) {
  modalCancelButton.addEventListener("click", () => {
    backdrop.classList.remove("open");
    modal.classList.remove("open");
  });
}

mobileNavButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

mobileNavCloseButton.addEventListener("click", () => {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
});

// for (const i = 0; i < selectProductButtons.length; i++) {
//   selectProductButtons[i].addEventListener("click", function () {
//     // modal.style.display = "block";
//     // backdrop.style.display = "block";
//     // backdrop.style.display = "block";
//     // modal.style.display = "block";
//     setTimeout(function () {}, 10);
//     backdrop.classList.add("open");
//     modal.classList.add("open");
//   });
// }

// backdrop.addEventListener("click", () => {
//   // mobileNav.style.display = "none";
//   mobileNav.classList.remove("open");
//   closeModal();
// });

// if (modalCancelButton) {
//   modalCancelButton.addEventListener("click", closeModal);
// }

// function closeModal() {
//   // backdrop.style.display = "none";
//   // modal.style.display = "none";
//   if (modal) {
//     modal.classList.remove("open");
//   }
//   setTimeout(function () {
//     backdrop.style.display = "none";
//     mobileNav.style.display = "none";
//     if (modal) {
//       modal.style.display = "none";
//     }
//   }, 300);
//   backdrop.classList.remove("open");
// }

// mobileNavButton.addEventListener("click", function () {
//   // mobileNav.style.display = "block";
//   // backdrop.style.display = "block";
//   mobileNav.style.display = "block";
//   backdrop.style.display = "block";
//   if (modal) {
//     modal.style.display = "block";
//   }
//   setTimeout(function () {
//     backdrop.classList.add("open");
//     mobileNav.classList.add("open");
//   }, 10);
// });
