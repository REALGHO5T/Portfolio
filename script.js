function pageanimation() {
  var tl = gsap.timeline();
  tl.from("header, header ul li", {
    y: -50,
    delay: 1,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(
    ".text ",
    {
      y:200,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      ease: Power4,
    },
    
  );

  var al = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-section",
      start: "-10% 50%",
      scrub: false,
    },
  });
  al.from(".img,.img img", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: Power2,
  });
  al.from(
    ".about-text .about-me, .about-text p",
    {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: Power2,
    },
    "<"
  );
  var sl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-section",
      start: "-10% 50%",
      scrub: false,
    },
  });
  sl.from(".service-text h1, .service-text p", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  sl.from(
    ".service",
    {
      y: 100,
      opacity: 0,
      duration: 1,
    },
    "<"
  );
  var pl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-section",
      start: "-10% 50%",
      scrub: false,
    },
  });
  pl.from(".projects",{
    y:100,
    opacity:0,
    duartion:1,
    stagger:0.3
  })
}
function pageview() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
function smoothscroll() {
  const locomotiveScroll = new LocomotiveScroll();
}
pageanimation()
smoothscroll();
pageview();
