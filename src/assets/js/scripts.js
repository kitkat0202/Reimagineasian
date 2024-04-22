document.addEventListener('DOMContentLoaded', function() {
  ////////////////
  // OPEN MODAL //
  ////////////////
  let allModalLinks = document.querySelectorAll("[data-modal-id]")
  allModalLinks.forEach(el => {
    el.addEventListener("click", () => {
      let modalID = el.getAttribute("data-modal-id")
      let modal = document.querySelector(`#${modalID}`)

      modal.classList.add("active")
      document.querySelector("body").classList.add("pause")

      if(modalID === "modal-location") {
        let locatioLink = el.getAttribute("data-location-link")
        let iframeSrc = document.querySelector(`#modal-location iframe`)

        iframeSrc.setAttribute("src", locatioLink)
      }
    })
  })

  /////////////////
  // CLOSE MODAL //
  /////////////////
  let allModals = document.querySelectorAll(".modal")
  function closeModal(event) {
    if (!event.target.classList.contains('modal') && !event.target.classList.contains('close')) {
      return;
    }

    document.querySelector("body").classList.remove("pause")
    allModals.forEach(el => {
      el.classList.remove("active")

      let elVideo = el.querySelector("video")
      if (elVideo) {
        elVideo.pause();
        elVideo.currentTime = 0;
      }

      let elIframe = el.querySelector("iframe")
      if(elIframe) {
        let iframeSrc = document.querySelector(`#modal-location iframe`)
        iframeSrc.setAttribute("src", "")
      }
    })
  }

  let allVideoModal = document.querySelectorAll(".modal, .close")
  allVideoModal.forEach(el => {
    el.addEventListener("click", closeModal)
  })


  ///////////////////
  // Mobile Navbar //
  ///////////////////
  let mobileNavBtn = document.querySelector(".mobile-nav-trigger")
  mobileNavBtn.addEventListener("click", () => {
    document.querySelector(".nav-wrapper").classList.toggle("active")
  })


  ///////////////
  // Accordion //
  ///////////////
  let allAccordion = document.querySelectorAll(".accordion")
  allAccordion.forEach(el => {
    let accordionBtn = el.querySelector(".accordion-title")

    accordionBtn.addEventListener("click", () => {
      let accordion = el.querySelector(".accordion-item")
      if (accordion.classList.contains("active")) {
        accordion.classList.remove("active")
      } else {
        accordion.classList.add("active")
      }
    })
  })





  ////////////
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
})