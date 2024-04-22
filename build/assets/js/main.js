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

      if (modalID === "modal-location") {
        var locatioLink = el.getAttribute("data-location-link");
        var iframeSrc = document.querySelector("#modal-location iframe");
        iframeSrc.setAttribute("src", locatioLink);
      }
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

      var elIframe = el.querySelector("iframe");

      if (elIframe) {
        var iframeSrc = document.querySelector("#modal-location iframe");
        iframeSrc.setAttribute("src", "");
      }
    });
  }

  var allVideoModal = document.querySelectorAll(".modal, .close");
  allVideoModal.forEach(function (el) {
    el.addEventListener("click", closeModal);
  }); ///////////////////
  // Mobile Navbar //
  ///////////////////

  var mobileNavBtn = document.querySelector(".mobile-nav-trigger");
  mobileNavBtn.addEventListener("click", function () {
    document.querySelector(".nav-wrapper").classList.toggle("active");
  }); ///////////////
  // Accordion //
  ///////////////

  var allAccordion = document.querySelectorAll(".accordion");
  allAccordion.forEach(function (el) {
    var accordionBtn = el.querySelector(".accordion-title");
    accordionBtn.addEventListener("click", function () {
      var accordion = el.querySelector(".accordion-item");

      if (accordion.classList.contains("active")) {
        accordion.classList.remove("active");
      } else {
        accordion.classList.add("active");
      }
    });
  }); ////////////
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
