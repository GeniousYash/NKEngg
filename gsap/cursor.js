var circle = document.querySelector("#circle");

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove",function(dets){
     gsap.to(circle,{
          x: dets.clientX,
          y: dets.clientY,
          duration: .2,
          ease: Expo,
     })
});