// Sticky Navigation Search Functionality
document.addEventListener("DOMContentLoaded", () => {
  const stickySearchBtn = document.querySelector(".sticky-search-btn");

  stickySearchBtn.addEventListener("click", () => {
    const destination = document.querySelector(".sticky-search-input").value;
    const checkInDate = document.querySelectorAll(".sticky-date-input")[0].value;
    const checkOutDate = document.querySelectorAll(".sticky-date-input")[1].value;

    console.log("검색 시작!");
    console.log(`여행지: ${destination}`);
    console.log(`체크인: ${checkInDate}`);
    console.log(`체크아웃: ${checkOutDate}`);

    // 여기서 검색 결과를 처리하거나, 새 페이지로 이동 가능
    alert(`검색어: ${destination}\n체크인: ${checkInDate}\n체크아웃: ${checkOutDate}`);
  });
});

// 햄버거 메뉴 토글
function toggleMenu() {
  alert("햄버거 메뉴 클릭됨!"); // 여기서 실제 동작 추가 가능
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarButtons = document.querySelectorAll(".sidebar button");
  const rangeInput = document.querySelector("input[type='range']");
  const rangeDisplay = document.querySelector(".filter-section span");

  rangeInput.addEventListener("input", (e) => {
    const value = e.target.value;
    rangeDisplay.textContent = `0원 - ${Number(value).toLocaleString()}원 이상`;
  });

  sidebarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(`필터 적용: ${button.textContent}`);
    });
  });
});

// 가격 슬라이더 값 업데이트
document.querySelector('input[type="range"]').addEventListener("input", function (event) {
  const value = event.target.value;
  document.querySelector(".price-range span:first-child").textContent = `${value}원`;
});

// 태그 클릭 시 이벤트 처리
document.querySelectorAll(".tags button").forEach((button) => {
  button.addEventListener("click", (e) => {
    button.classList.toggle("active");
    console.log(`태그 ${button.textContent} 선택됨.`);
  });
});

document.querySelectorAll(".filter-section input, .filter-section button").forEach((el) => {
  el.addEventListener("click", () => {
    console.log("Filter clicked:", el.id || el.textContent.trim());
  });
});

// 드롭다운 버튼 클릭 이벤트
document.querySelector(".dropdown-btn").addEventListener("click", function () {
  const dropdown = this.parentElement;
  dropdown.classList.toggle("open");
});

// 드롭다운 항목 선택 이벤트
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    const dropdown = this.closest(".dropdown");
    const button = dropdown.querySelector(".dropdown-btn");
    const activeItem = dropdown.querySelector(".dropdown-item.active");

    // 기존 활성화된 항목 비활성화
    if (activeItem) activeItem.classList.remove("active");

    // 클릭된 항목 활성화
    this.classList.add("active");

    // 버튼 텍스트 업데이트
    button.innerHTML = `${this.textContent} <span class="arrow">&#9662;</span>`;

    // 드롭다운 닫기
    dropdown.classList.remove("open");
  });
});

// 문서 클릭 시 드롭다운 닫기
document.addEventListener("click", function (event) {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    // 모든 항목에서 active 클래스 제거
    document.querySelectorAll(".dropdown-item").forEach((el) => el.classList.remove("active"));

    // 클릭한 항목에 active 클래스 추가
    e.target.classList.add("active");

    // 버튼 텍스트 업데이트
    const selectedText = e.target.textContent.trim().replace("✔", ""); // 기존 체크표시 제거
    document.querySelector(
      ".dropdown-btn"
    ).innerHTML = `${selectedText} <span class="arrow">&#9662;</span>`;
  });
});
