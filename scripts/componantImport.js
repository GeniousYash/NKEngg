import navbar from "../componants/navbar.js";
const navbarcon = document.querySelector("nav");
navbarcon.innerHTML = navbar();


import stickynav from "../componants/stickynav.js";
const sticknavbar = document.querySelector(".bsct-main-bottom");
sticknavbar.innerHTML = stickynav();



import preLoader from "../componants/loader.js";
const loaderP = document.querySelector("#loader");
loaderP.innerHTML = preLoader();

function loader(){
     window.onload = () => {
       let preLoader = document.querySelector("#loader");
       preLoader.style.display = "none";
     };
     
   }
loader();

// setInterval(function() { 
  
// }, 2000)