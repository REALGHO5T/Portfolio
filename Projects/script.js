var arr = [
  { image: "./assets/Restaurant.png" },
  { image: "./assets/Watch.png" },
  { image: "./assets/Valhalla-web.png" },
  { image: "./assets/ecom.png" },
  { image: "./assets/Music-Stream.png" },
  { image: "./assets/Catering.png" },
  { image: "./assets/Netflix.png"},
  { image: "./assets/Tourism.png"},
  { image: "./assets/slide.png"},
  { image: "./assets/significo.png"},
];
function projects(){
  var clutter = ""
  arr.forEach(function(obj){
    clutter += `<div class="project">
    <img src="${obj.image}" alt="">
  </div>`
})
document.querySelector(".projects").innerHTML = clutter
}

function pageanimation(){

  gsap.utils.toArray('.project').forEach(project => {
    gsap.from(project, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger:0.5,
    scrollTrigger: {
      trigger: project,
      start: "top 80%", // triggers when the top of the element is 80% from the top of the viewport
      end: "top 30%", // ends when the top of the element is 30% from the top of the viewport
      toggleActions: "play none none none",
      scrub:true // plays the animation when it enters the viewport
    }
  });
})
}
function smoothscroll() {
  const locomotiveScroll = new LocomotiveScroll();
}
projects()
pageanimation()
smoothscroll()