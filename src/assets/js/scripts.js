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
    })
  })

  /////////////////
  // CLOSE MODAL //
  /////////////////
  let allModals = document.querySelectorAll(".modal")
  function closeModal() {
    document.querySelector("body").classList.remove("pause")
    allModals.forEach(el => {
      el.classList.remove("active")

      let elVideo = el.querySelector("video")
      if (elVideo) {
        elVideo.pause();
        elVideo.currentTime = 0;
      }
    })
  }





  /////////////////
  // INTRO MODAL //
  /////////////////
  let allVideoModal = document.querySelectorAll(".video-modal")
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