document.addEventListener("DOMContentLoaded", () => {
  // 디스플레이와 키패드 영역 선택
  const display = document.querySelector(".calculator__display");
  const keys = document.querySelector(".calculator__keys");
  const clearBtn = keys.querySelector("[data-button-type='clear']");

  // 계산기 상태 변수
  let firstOperand = "";
  let operator = "";
  let secondOperand = "";
  let resultDisplayed = false;

  // 디스플레이에 값 표시
  function updateDisplay(value) {
    display.textContent = value;
  }

  // 모든 상태 초기화 (AC 버튼)
  function clearAll() {
    firstOperand = "";
    operator = "";
    secondOperand = "";
    resultDisplayed = false;
    updateDisplay("0");
    keys
      .querySelectorAll("[data-button-type='operator']")
      .forEach((btn) => btn.classList.remove("is-pressed"));
    clearBtn.textContent = "AC";
  }

  // 현재 입력 중인 숫자 초기화 (CE 버튼)
  function clearEntry() {
    if (!operator) {
      firstOperand = "";
      updateDisplay("0");
    } else {
      secondOperand = "";
      updateDisplay("0");
    }
    clearBtn.textContent = "AC";
  }

  // 결과 포맷 함수: "3." → "3", "3.1400" → "3.14" 등 정리
  function formatResult(result) {
    const num = parseFloat(result);
    return Number.isInteger(num)
      ? String(num)
      : String(num.toFixed(10)).replace(/\.?0+$/, "");
  }

  // 실제 계산 함수
  function calculate(a, op, b) {
    let x = parseFloat(a);
    let y = parseFloat(b);
    if (op === "plus") return String(x + y);
    if (op === "minus") return String(x - y);
    if (op === "times") return String(x * y);
    if (op === "divide") {
      if (y === 0) return "오류";
      return String(x / y);
    }
    return b;
  }

  // 키패드 클릭 이벤트 처리
  keys.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const key = btn.dataset.key;
    const type = btn.dataset.buttonType;

    if (type === "number") {
      if (resultDisplayed) {
        clearAll();
      }
      if (!operator) {
        if (key === "0" && firstOperand === "0") return;
        firstOperand += key;
        updateDisplay(firstOperand);
        clearBtn.textContent = "CE";
      } else {
        if (key === "0" && secondOperand === "0") return;
        secondOperand += key;
        updateDisplay(secondOperand);
        clearBtn.textContent = "CE";
      }
    }

    if (type === "decimal") {
      if (!operator) {
        if (!firstOperand.includes(".")) {
          firstOperand = firstOperand ? firstOperand + "." : "0.";
          updateDisplay(firstOperand);
          clearBtn.textContent = "CE";
        }
      } else {
        if (!secondOperand.includes(".")) {
          secondOperand = secondOperand ? secondOperand + "." : "0.";
          updateDisplay(secondOperand);
          clearBtn.textContent = "CE";
        }
      }
    }

    if (type === "operator") {
      if (firstOperand === "") firstOperand = "0";
      if (operator && secondOperand) {
        let calc = calculate(firstOperand, operator, secondOperand);
        calc = formatResult(calc);
        firstOperand = calc;
        updateDisplay(calc);
        secondOperand = "";
      }
      operator = key;
      resultDisplayed = false;
      keys
        .querySelectorAll("[data-button-type='operator']")
        .forEach((btn) => btn.classList.remove("is-pressed"));
      btn.classList.add("is-pressed");
    }

    if (type === "equal") {
      // 숫자만 입력하고 = 누른 경우 (ex. 3. → 3)
      if (firstOperand && !operator && !secondOperand) {
        const formatted = formatResult(firstOperand);
        updateDisplay(formatted);
        resultDisplayed = true;
        clearBtn.textContent = "AC";
        return;
      }

      if (firstOperand && operator && secondOperand) {
        let calc = calculate(firstOperand, operator, secondOperand);
        calc = formatResult(calc);
        updateDisplay(calc);
        firstOperand = calc;
        secondOperand = "";
        operator = "";
        resultDisplayed = true;
        keys
          .querySelectorAll("[data-button-type='operator']")
          .forEach((btn) => btn.classList.remove("is-pressed"));
        clearBtn.textContent = "AC";
      }
    }

    if (type === "clear") {
      if (clearBtn.textContent === "CE") {
        clearEntry();
      } else {
        clearAll();
      }
    }
  });

  // 페이지 로드시 초기화
  clearAll();
});
