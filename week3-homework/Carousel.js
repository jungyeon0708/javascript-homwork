document.addEventListener("DOMContentLoaded", () => {
  // game-card hover 시 game-character 확대 및 텍스트 투명도 조정
  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const character = card.querySelector(".game-character");
      if (character) {
        // 캐릭터 크기 조정
        character.style.width = "164px";
        character.style.height = "176px";
        // 캐릭터 확대 시 부드러운 전환 효과 추가
        character.style.transition = "width 0.18s, height 0.18s";
      }
      ["game-title", "game-desc", "game-genre"].forEach((cls) => {
        const el = card.querySelector(`.${cls}`);
        if (el) {
          el.style.opacity = "0.64";
        }
      });
    });
    card.addEventListener("mouseleave", () => {
      const character = card.querySelector(".game-character");
      if (character) {
        // 캐릭터 크기 원래대로 조정
        character.style.width = "160px";
        character.style.height = "172px";
      }
      ["game-title", "game-desc", "game-genre"].forEach((cls) => {
        const el = card.querySelector(`.${cls}`);
        if (el) {
          // 텍스트 투명도 원래대로 조정
          el.style.opacity = "";
        }
      });
    });
  });

  // 캐러셀 기능
  const pages = document.querySelectorAll(".carousel-page");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const indicator = document.querySelector(".carousel-page-indicator .current");
  let current = 0;

  function updateCarousel() {
    pages.forEach((page, idx) => {
      page.classList.toggle("active", idx === current);
    });
    indicator.textContent = current + 1;

    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  prevBtn.addEventListener("click", () => {
    // 이전 페이지로 이동
    if (current > 0) {
      current--;
    } else {
      // 마지막 페이지로 이동
      current = pages.length - 1;
    }
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (current < pages.length - 1) {
      // 다음 페이지로 이동
      current++;
    } else {
      // 첫 페이지로 이동
      current = 0;
    }
    updateCarousel();
  });

  updateCarousel();
});
