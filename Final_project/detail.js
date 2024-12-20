document.addEventListener("DOMContentLoaded", () => {
  const scrollNav = document.getElementById("scrollNav");
  const stickyNavbar = document.getElementById("stickyNavbar");

  // 스크롤 이벤트
  window.addEventListener("scroll", () => {
    const stickyHeight = stickyNavbar.offsetHeight; // 기존 헤더 높이
    const scrollY = window.scrollY; // 현재 스크롤 위치

    // 특정 스크롤 위치에 도달했을 때 네비게이션 표시
    if (scrollY > stickyHeight) {
      scrollNav.classList.add("visible");
    } else {
      scrollNav.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navTabs = document.querySelectorAll(".nav-tabs span");
  const sections = document.querySelectorAll("section"); // 섹션들

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70; // 네비게이션 높이를 고려
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navTabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.dataset.target === `#${currentSection}`) {
        tab.classList.add("active");
      }
    });
  });

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);
      window.scrollTo({
        top: target.offsetTop - 60, // 네비게이션 높이만큼 조정
        behavior: "smooth"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navTabs = document.querySelectorAll(".nav-tabs span");
  const sections = document.querySelectorAll("section"); // 각 섹션
  const scrollNav = document.getElementById("scrollNav");

  // 스크롤 이벤트로 hidden 클래스 제거 및 현재 섹션 감지
  window.addEventListener("scroll", () => {
    // 스크롤 200px 이상일 때 네비게이션 표시
    if (window.scrollY > 300) {
      scrollNav.classList.remove("hidden");
    } else {
      scrollNav.classList.add("hidden");
    }

    // 현재 보고 있는 섹션 찾기
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // 네비게이션 높이 보정
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // 탭 활성화 상태 업데이트
    navTabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.textContent.trim() === currentSection) {
        tab.classList.add("active");
      }
    });
  });

  // 탭 클릭 시 스크롤 이동
  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const sectionId = tab.textContent.trim();
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // 네비게이션 높이 보정
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 모달 관련 변수들
  const openModalLink = document.getElementById("openReviewModalLink");
  const modal = document.getElementById("reviewModal");
  const closeModal = document.querySelector(".close");

  // 링크 클릭 시 모달 열기
  openModalLink.addEventListener("click", (event) => {
    event.preventDefault(); // 링크 기본 동작 방지
    modal.style.display = "block"; // 모달 표시
  });

  // 닫기 버튼 클릭 시 모달 닫기
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // 모달 숨기기
  });

  // 모달 외부 클릭 시 모달 닫기
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // 모달 숨기기
    }
  });
});
