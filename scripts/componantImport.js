import navbar from "../componants/navbar.js";
const navbarcon = document.querySelector("nav");
navbarcon.innerHTML = navbar();

import footer from "../componants/footer.js";
const footercon = document.querySelector("footer");
footercon.innerHTML = footer();


import stickynav from "../componants/stickynav.js";
const sticknavbar = document.querySelector(".bsct-main-bottom");
sticknavbar.innerHTML = stickynav();



import preLoader from "../componants/loader.js";
const loaderP = document.querySelector("#loader");
loaderP.innerHTML = preLoader();

document.addEventListener("DOMContentLoaded", function () {
  let preLoader = document.querySelector("#loader");
  preLoader.style.display = "none";
});
