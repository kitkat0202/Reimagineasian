"use strict";

document.addEventListener('DOMContentLoaded', function () {
  ////////////////
  // OPEN MODAL //
  ////////////////
  var allModalLinks = document.querySelectorAll("[data-modal-id]");
  allModalLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      var modalID = el.getAttribute("data-modal-id");
      var modal = document.querySelector("#".concat(modalID));
      modal.classList.add("active");
      document.querySelector("body").classList.add("pause");
    });
  }); /////////////////
  // CLOSE MODAL //
  /////////////////

  var allModals = document.querySelectorAll(".modal");

  function closeModal() {
    document.querySelector("body").classList.remove("pause");
    allModals.forEach(function (el) {
      el.classList.remove("active");
      var elVideo = el.querySelector("video");

      if (elVideo) {
        elVideo.pause();
        elVideo.currentTime = 0;
      }
    });
  } /////////////////
  // INTRO MODAL //
  /////////////////


  var introModal = document.querySelector("#intro-modal");
  introModal.addEventListener("click", closeModal);
  var allVideoModal = document.querySelectorAll(".video-modal");
  allVideoModal.forEach(function (el) {
    el.addEventListener("click", closeModal);
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
  } ////////////
  // SLIDES //
  ////////////
  // var index = 0;
  // var slides = document.querySelectorAll(".slides");
  // var dot = document.querySelectorAll(".dot");
  // function changeSlide(){
  //   if(index<0){
  //     index = slides.length-1;
  //   }
  //   if(index>slides.length-1){
  //     index = 0;
  //   }
  //   for(let i=0;i<slides.length;i++){
  //     slides[i].classList.remove("active");
  //     dot[i].classList.remove("active");
  //   }
  //   let nextActiveSlide = document.querySelector(`[data-slide-num="${index}"]`)
  //   let nextActiveDot = document.querySelector(`[data-dot-num="${index}"]`)
  //   nextActiveSlide.classList.add("active");
  //   nextActiveDot.classList.add("active");
  //   index++;
  //   setTimeout(changeSlide,5000);
  // }
  // changeSlide();

});
//# sourceMappingURL=main.js.map
