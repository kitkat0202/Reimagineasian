"use strict";

document.addEventListener('DOMContentLoaded', function () {
  ////////////////
  // OPEN MODAL //
  ////////////////
  var allModalLinks = document.querySelectorAll("[data-modal-is]");
  allModalLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      var modalID = el.getAttribute("data-modal-is");
      var modal = document.querySelector("#".concat(modalID));
      modal.classList.add("active");
    });
  }); /////////////////
  // CLOSE MODAL //
  /////////////////

  var allModals = document.querySelectorAll(".modal");

  function closeModal() {
    allModals.forEach(function (el) {
      el.classList.remove("active");
    });
  } /////////////////
  // INTRO MODAL //
  /////////////////


  var introModal = document.querySelector("#intro-modal");
  introModal.addEventListener("click", function () {
    document.querySelector("body").classList.remove("pause");
    closeModal();
  }); ///////////////////
  // Mobile Navbar //
  ///////////////////

  var btnsToCloseNav = document.querySelectorAll("#sidenav .overlay, #sidenav a");
  var mobileNavTrigger = document.querySelector(".sidenav-trigger");

  function closeNavbar() {
    var mobileNav = document.querySelector("#sidenav");

    if (mobileNav && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      mobileNavTrigger.classList.remove("open");
    }
  }

  function openNavbar() {
    var mobileNav = document.querySelector("#sidenav");

    if (mobileNav && !mobileNav.classList.contains("active")) {
      mobileNav.classList.add("active");
      mobileNavTrigger.classList.add("open");
    }
  }

  if (btnsToCloseNav.length > 0) {
    btnsToCloseNav.forEach(function (el) {
      el.addEventListener("click", function () {
        closeNavbar();
      });
    });
  }

  if (mobileNavTrigger) {
    mobileNavTrigger.addEventListener("click", function () {
      if (mobileNavTrigger.classList.contains("open")) {
        closeNavbar();
      } else {
        openNavbar();
      }
    });
  }
});
//# sourceMappingURL=main.js.map
