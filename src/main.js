import './assets/my.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


var divVisible = false;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
    document.querySelector("html").classList.toggle("overflow-hidden");
    document.querySelector("body").classList.toggle("overflow-hidden");
    var show__all = document.getElementById("show__all");
    if (divVisible) {
      show__all.style.display = "none";
      divVisible = false;
    } else {
      show__all.style.display = "block";
      divVisible = true;
    }
  });
});

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
