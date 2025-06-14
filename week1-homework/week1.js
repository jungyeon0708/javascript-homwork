//  변수, 상수 작성 과제

// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

// 1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let userName = "김정연";
console.log(userName);
// 2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO = -273.15;
console.log(ABSOLUTE_ZERO + "°C");
// 3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true;
console.log(isLoggedIn);
// 4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 30;
console.log(userAge + "살");
// 5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = "39,900";
console.log(productPrice + "원");
// 6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const backGroundColor = "#fff";
console.log(backGroundColor);
// 7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let commentAcount = 12;
console.log("댓글 수 : " + commentAcount + "개");
// 8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let pageNumber = 3;
console.log(pageNumber + "페이지");
// 9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let memberGrade = "VIP";
console.log("회원등급 : " + memberGrade);
// 10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isButtonClicked = true;
console.log(isButtonClicked);

// 1. 인사말 메시지

function greetUser(username) {
  return "안녕하세요! " + username + "님. 좋은 하루되세요!";
}
console.log(greetUser("김정연"));

// 2. 원가 계산
function calculateOriginalPrice(priceWithTax) {
  const taxRate = 0.033;
  const originalPrice = priceWithTax / (1 + taxRate);
  return originalPrice;
}
console.log(calculateOriginalPrice(12500));

// 3. 주류 판매 가능 여부

const canSellAlcohol = (registrationCard) => registrationCard.age >= 19;

const registrationCard = {
  name: "김정연",
  age: 30,
  gender: "여성",
};

const registrationCard2 = {
  name: "김철수",
  age: 18,
  gender: "남성",
};
console.log(canSellAlcohol(registrationCard));
console.log(canSellAlcohol(registrationCard2));

// 4. 할인가 계산

function getDiscountedPrice(originalPrice, discountPercent) {
  return originalPrice - originalPrice * (discountPercent / 100);
}

console.log(getDiscountedPrice(18700, 20));

// 5. 등급 판단 함수
function getGrade(score) {
  let grade, description;

  if (score >= 90) {
    grade = "A";
    description = "매우 우수";
  } else if (score >= 80) {
    grade = "B";
    description = "우수";
  } else if (score >= 70) {
    grade = "C";
    description = "보통";
  } else if (score >= 60) {
    grade = "D";
    description = "미달, 통과 기준 근접";
  } else {
    grade = "F";
    description = "낙제";
  }

  return { score, grade, description };
}
console.log(getGrade(87));
console.log(getGrade(100));
console.log(getGrade(40));
console.log(getGrade(65));
