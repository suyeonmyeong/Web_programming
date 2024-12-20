// 네비게이션 버튼 클릭 이벤트 처리
document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    // 모든 버튼에서 active 클래스 제거
    document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    // 모든 섹션 숨기기
    document
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.add("hidden"));

    // 클릭된 섹션 보이기
    const sectionId = e.target.getAttribute("data-section");
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove("hidden");
    }
  });
});

// 검색창 탭 클릭 이벤트
document.querySelectorAll("#search-tabs .tab").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // 모든 검색창 탭에서 active 클래스 제거
    document.querySelectorAll("#search-tabs .tab").forEach((t) => t.classList.remove("active"));
    e.target.classList.add("active");

    // 탭 전환에 따른 동작 (예: 검색 필드 변경)
    const searchType = e.target.getAttribute("data-type");
    console.log("Selected search type:", searchType);
  });
});

// 날짜 선택 시 UI 업데이트
document.querySelectorAll('.field.date input[type="date"]').forEach((dateInput) => {
  dateInput.addEventListener("change", (event) => {
    const selectedDate = new Date(event.target.value);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const formattedDate = `${selectedDate.getDate()} ${
      monthNames[selectedDate.getMonth()]
    } ${selectedDate.getFullYear()}`;
    const dayName = dayNames[selectedDate.getDay()];
    const parentDiv = event.target.parentElement;

    parentDiv.querySelector("p").textContent = formattedDate;
    parentDiv.querySelector("small").textContent = dayName;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#date-range", {
    mode: "range", // 시작일과 종료일 선택 가능
    dateFormat: "Y-m-d",
    minDate: "today", // 오늘 이후 날짜 선택 가능
    defaultDate: ["2024-12-06", "2024-12-07"], // 기본 날짜 설정
    locale: "ko", // 한국어 지원 (flatpickr 한국어 추가 필요)
    onClose: function (selectedDates, dateStr, instance) {
      console.log("Selected range: ", selectedDates);
    }
  });
});

// 객실 및 인원 선택 기능
let rooms = 1;
let adults = 1;
let children = 0;

function toggleRoomSelection() {
  const dropdown = document.getElementById("roomDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function updateCounter(type, change) {
  if (type === "rooms") {
    rooms = Math.max(1, rooms + change); // 최소 1 객실
    document.getElementById("rooms-count").textContent = rooms;
  } else if (type === "adults") {
    adults = Math.max(1, adults + change); // 최소 1 성인
    document.getElementById("adults-count").textContent = adults;
  } else if (type === "children") {
    children = Math.max(0, children + change); // 최소 0 아동
    document.getElementById("children-count").textContent = children;
  }
  updateRoomButton();
}

function updateRoomButton() {
  document.getElementById("guest-summary").textContent = `성인 ${adults}명, 아동 ${children}명`;
  document.getElementById("room-summary").textContent = `객실 ${rooms}개`;
}

// 햄버거 메뉴 토글
function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
}

// 이벤트 섹션
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  // 이동할 슬라이드 계산 (3개씩 보이기)
  currentSlide = index;
  const offset = -index * 100; // 각 슬라이드는 100% 너비

  // 슬라이드 이동
  slides.style.transform = `translateX(${offset}%)`;

  // 모든 점을 비활성화
  dots.forEach((dot) => dot.classList.remove("active"));

  // 선택된 점 활성화
  dots[index].classList.add("active");
}

// 자동 슬라이더 기능
setInterval(() => {
  const totalSlides = Math.ceil(document.querySelectorAll(".slide").length / 3);
  currentSlide = (currentSlide + 1) % totalSlides; // 슬라이드 루프
  showSlide(currentSlide);
}, 4500); // 초마다 슬라이드 전환

function setupAccommodationTabs() {
  document.querySelectorAll("#accommodation-tabs .tab").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      // 모든 탭에서 active 클래스 제거
      document
        .querySelectorAll("#accommodation-tabs .tab")
        .forEach((t) => t.classList.remove("active"));
      e.target.classList.add("active");

      // 선택된 섹션만 표시
      const city = e.target.getAttribute("data-city");
      document.querySelectorAll(".accommodation-section").forEach((section) => {
        section.classList.add("hidden");
      });
      document.getElementById(city).classList.remove("hidden");
    });
  });
}

// 호출
setupAccommodationTabs();

document.addEventListener("scroll", () => {
  const stickyNavbar = document.getElementById("stickyNavbar");
  const scrollPosition = window.scrollY; // 현재 스크롤 위치
  const triggerPosition = 400; // 네비게이션 바가 나타날 기준 위치 (px)

  if (scrollPosition > triggerPosition) {
    stickyNavbar.classList.add("visible");
  } else {
    stickyNavbar.classList.remove("visible");
  }
});
