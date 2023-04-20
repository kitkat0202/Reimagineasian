document.addEventListener('DOMContentLoaded', function() {
  ////////////////
  // OPEN MODAL //
  ////////////////
  let allModalLinks = document.querySelectorAll("[data-modal-is]")
  allModalLinks.forEach(el => {
    el.addEventListener("click", () => {
      let modalID = el.getAttribute("data-modal-is")
      let modal = document.querySelector(`#${modalID}`)

      modal.classList.add("active")
    })
  })


  /////////////////
  // CLOSE MODAL //
  /////////////////
  let allModals = document.querySelectorAll(".modal")
  function closeModal() {
    allModals.forEach(el => {
      el.classList.remove("active")
    })
  }



  /////////////////
  // INTRO MODAL //
  /////////////////
  let introModal = document.querySelector("#intro-modal")
  introModal.addEventListener("click", () => {
    document.querySelector("body").classList.remove("pause")
    closeModal()
  })


  ///////////////////
  // Mobile Navbar //
  ///////////////////
  let btnsToCloseNav = document.querySelectorAll("#sidenav .overlay, #sidenav a")
  let mobileNavTrigger = document.querySelector(".sidenav-trigger")
  function closeNavbar() {
    let mobileNav = document.querySelector("#sidenav")
    if (mobileNav && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active")
      mobileNavTrigger.classList.remove("open")
    }
  }

  function openNavbar() {
    let mobileNav = document.querySelector("#sidenav")
    if (mobileNav && !mobileNav.classList.contains("active")) {
      mobileNav.classList.add("active")
      mobileNavTrigger.classList.add("open")
    }
  }


  if (btnsToCloseNav.length > 0) {
    btnsToCloseNav.forEach(el => {
      el.addEventListener("click", () => {
        closeNavbar()
      })
    })
  }


  if (mobileNavTrigger) {
    mobileNavTrigger.addEventListener("click", () => {
      if (mobileNavTrigger.classList.contains("open")) {
        closeNavbar()
      } else {
        openNavbar()
      }


    })
  }
})