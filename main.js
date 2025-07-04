document.addEventListener("DOMContentLoaded", () => {
  // h1, h2, li 모두 선택
  const targets = [...document.querySelectorAll("h1, h2, ul li, span")];
  targets.forEach((el, idx) => {
    gsap.fromTo(
      el,
      { opacity: 0, rotateX: 90, y: -20 },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 0.5,
        delay: 0.2 + idx * 0.12,
        ease: "power2.out",
      }
    );
  });
});
