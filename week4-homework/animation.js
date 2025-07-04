document.addEventListener("DOMContentLoaded", () => {
  // 1. 메인 타이틀 애니메이션
  gsap.fromTo(
    ".main-title",
    { opacity: 0, y: -40 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
  );

  // 2. 설명 텍스트 애니메이션
  gsap.fromTo(
    ".main-desc",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.4, ease: "power2.out" }
  );

  // 3. 버튼들 애니메이션
  gsap.utils.toArray(".main-btns .btn").forEach((btn, idx) => {
    gsap.fromTo(
      btn,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.6 + idx * 0.1,
        ease: "power2.out",
      }
    );
  });

  // 4. 격자선(line) 애니메이션
  gsap.utils.toArray(".grid-line").forEach((line, idx) => {
    gsap.fromTo(
      line,
      { opacity: 0 },
      {
        opacity: 0.7,
        duration: 0.7,
        delay: 0.2 + idx * 0.1,
        ease: "power2.out",
      }
    );
  });

  // 5. 도형 애니메이션
  gsap.utils.toArray(".svg-shape").forEach((shape, idx) => {
    gsap.fromTo(
      shape,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.7 + idx * 0.07,
        ease: "power2.out",
      }
    );
  });

  // 6. 중앙 이미지 애니메이션 및 호버 효과
  const centerImg = document.querySelector(".center-image");
  if (centerImg) {
    gsap.fromTo(
      centerImg,
      { opacity: 0, scale: 0.8, rotate: -8 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power2.out",
      }
    );

    centerImg.addEventListener("mouseenter", () => {
      gsap.to(centerImg, {
        scale: 1.08,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => {
          centerImg.style.background = "transparent";
        },
      });
    });

    centerImg.addEventListener("mouseleave", () => {
      gsap.to(centerImg, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          centerImg.style.background = "#fff";
        },
      });
    });
  }
});
