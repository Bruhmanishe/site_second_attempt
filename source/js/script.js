"use strict";

const wrapper = document.querySelector(".wrapper");
const iconBtn = document.querySelector(".nav__icon-container");
const contactsClue = document.querySelector(".contacts");
const headTextContactsClueBtn = document.querySelector(".headback");

const menuWaveContainer = document.querySelector(".nav__menu-container");
const btnMenuWave = document.querySelector(".btn-wave");
const btnMenuWaveList = document.querySelector(".nav__menu-list");
const btnMenuWaveListOptns = document.querySelectorAll(".nav__menu-list > li");

const btnMenuWaveWaves = document.querySelector(".btn-wave__waves");

const linkToDiff = document.querySelectorAll(".link");

console.log(btnMenuWaveListOptns[0].offsetHeight);

btnMenuWaveListOptns.forEach((el) => el.setAttribute("nonHovered", ""));

btnMenuWave.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  if (btnMenuWaveList.classList.contains("display-none")) {
    btnMenuWaveList.classList.remove("display-none");
    btnMenuWaveList.setAttribute("displayed", "");
    btnMenuWaveWaves.style.height = `${
      (btnMenuWaveListOptns.length + 1) * btnMenuWaveListOptns[0].offsetHeight
    }px`;
    menuWaveContainer.classList.add("menu-wave-back");
    addEventListener("mouseover", (e) => {
      const btnListOffsetHeight = btnMenuWaveList.offsetHeight;
      e.stopPropagation();
      for (let i = 0; i < btnMenuWaveListOptns.length; i++) {
        let n = i;
        if (btnMenuWaveListOptns[n] == e.target) {
          let listBoung = {
            left: btnMenuWaveListOptns[n].getBoundingClientRect().left,
            right:
              btnMenuWaveListOptns[n].getBoundingClientRect().left +
              btnMenuWaveListOptns[n].offsetWidth,
            top: btnMenuWaveListOptns[n].getBoundingClientRect().top,
            bottom:
              btnMenuWaveListOptns[n].getBoundingClientRect().top +
              btnMenuWaveListOptns[n].offsetHeight,
          };
          console.log(n);
          btnMenuWaveWaves.style.height = `${
            btnListOffsetHeight +
            btnMenuWaveListOptns[n].offsetHeight *
              (btnMenuWaveListOptns.length - 3) -
            btnMenuWaveListOptns[n].offsetHeight * (n + 1)
          }px`;
          btnMenuWaveWaves.style.top = `${listBoung.top}px`;
          btnMenuWave.addEventListener(
            "mouseover",
            function mouseoveOverMnBtn(e) {
              if (btnMenuWaveListOptns[n].offsetHeight > 0) {
                btnMenuWaveWaves.style.top = `${0}px`;
                btnMenuWaveWaves.style.height = `${
                  btnMenuWaveListOptns[n].offsetHeight *
                    (btnMenuWaveListOptns.length - 3) +
                  btnListOffsetHeight
                }px`;
                if (btnMenuWaveList.classList.contains("display-none")) {
                  btnMenuWave.addEventListener("mouseleave", (e) => {
                    btnMenuWaveWaves.style.height = `${btnMenuWave.offsetHeight}px`;
                  });
                }
              }
            }
          );
            btnMenuWaveListOptns[n].addEventListener("click", (e) => {
            linkToDiff[n].classList.remove("display-none");
            linkToDiff[n].click();
          });
        }
      }
    });
  } else if (btnMenuWaveList.hasAttribute("displayed")) {
    btnMenuWaveList.classList.add("display-none");
    btnMenuWaveList.removeAttribute("displayed");
    menuWaveContainer.classList.remove("menu-wave-back");
    btnMenuWaveWaves.style.height = `${btnMenuWave.offsetHeight}px`;
  }
});

iconBtn.addEventListener("click", (e) => {
  iconBtn.insertAdjacentElement("afterbegin", contactsClue);
  contactsClue.classList.remove("display-none");
  contactsClue.style.left = "70px";
  contactsClue.style.top = "100%";
  contactsClue.style.animation = "call-us-appear 0.5s linear forwards 0.2s";
  if (!contactsClue.classList.contains("display-none")) {
    e.stopPropagation();

    wrapper.addEventListener("click", (e) => {
      if (e.target.closest(".contacts")) {
      } else if (e.target.closest(".nav__image")) {
        contactsClue.classList.add("display-none");
      } else {
        contactsClue.classList.add("display-none");
      }
    });
  }
});

headTextContactsClueBtn.addEventListener("click", (e) => {
  headTextContactsClueBtn.insertAdjacentElement("afterbegin", contactsClue);
  contactsClue.classList.remove("display-none");
  contactsClue.style.animation = "call-us-appear 0.5s linear forwards 0.2s";
  var screenWidth = window.matchMedia("(max-width: 450px)");
  contactsClue.style.left = "100%";
  contactsClue.style.top = "110%";
  if (screenWidth) {
    contactsClue.style.left = "10%";
    contactsClue.style.top = "110%";
  }
  if (!contactsClue.classList.contains("display-none")) {
    e.stopPropagation();
    wrapper.addEventListener("click", (e) => {
      if (e.target.closest(".closest")) {
      } else if (e.target.closest(".headback")) {
      } else {
        contactsClue.classList.add("display-none");
      }
    });
  }
});
