// fixed header
const nav = document.querySelector("nav");
const threshold = window.innerHeight * 0.7;
const originalClasses = nav.className;
window.addEventListener("scroll", () => {
  if (window.scrollY >= threshold) {
    if (!nav.classList.contains("opaque")) {
      nav.className = `${originalClasses} opaque `.trim(); // Giữ class ban đầu
    }
  } else {
    nav.className = originalClasses;
  }
});
//dropdown

const dropdownToggle = document.querySelector(".navbar-toggler");
const dropdownMenu = document.querySelector(".navbar-collapse");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// scrol in section

// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".navbar-nav li a");
// const lastSection = sections[sections.length - 1];

// window.addEventListener("scroll", () => {
//   let currentSection = null;

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (
//       window.scrollY >= sectionTop - window.innerHeight / 3 &&
//       window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3 &&
//       section !== lastSection
//     ) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("current");
//     if (currentSection && link.getAttribute("href").includes(currentSection)) {
//       link.classList.add("current");
//     }
//   });
// });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav li a");
const idSections = Array.from(sections).filter((section) =>
  section.hasAttribute("id")
);
const lastSection = sections[sections.length - 1];

let lastIdSection = idSections[idSections.length - 1];

window.addEventListener("scroll", () => {
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop - window.innerHeight / 3 &&
      window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3 &&
      section !== lastSection
    ) {
      if (section.hasAttribute("id")) {
        currentSection = section.getAttribute("id");
      }
    }
  });

  if (!currentSection) {
    currentSection = lastIdSection.getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("current");
    if (currentSection && link.getAttribute("href").includes(currentSection)) {
      link.classList.add("current");
    }
  });

  const activeSection = idSections.find(
    (section) => section.getAttribute("id") === currentSection
  );
  if (activeSection) {
    lastIdSection = activeSection;
  }
});

// input form-register

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    this.style.display = "none";

    document.querySelector(".register_success_box").style.display = "block";
  });

// tap cange img

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      
      panes.forEach((pane) => pane.classList.remove("active", "show"));
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      panes[index].classList.add("active", "show");
    });
  });
});

//people say

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn.btn-link");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetID = button.getAttribute("data-target");
      const targetElement = document.querySelector(targetID);
      document.querySelectorAll(".collapse").forEach((collapse) => {
        if (collapse !== targetElement) {
          collapse.classList.remove("show");
        }
      });

      targetElement.classList.toggle("show");
    });
  });
});

//contact form

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    this.style.display = "none";

    document.querySelector(".contact_success_box").style.display = "block";
  });

//add animation

// const animatedElements = document.querySelectorAll('[class*="wow"]');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Lấy class thứ 3 từ danh sách class (sau wow)
//       const animationClass = entry.target.classList[2];
      
//       if (animationClass && !entry.target.classList.contains('animated')) {
//         // Thêm animation và class 'animated' khi cuộn tới
//         entry.target.style.animationName = animationClass;
//         entry.target.style.visibility= `visible`;
//         entry.target.classList.add('animated');
//         observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã thêm animation
//       }
//     }
//   });
// }, { threshold: 0.5 });

// animatedElements.forEach(element => observer.observe(element));

const animatedElements = document.querySelectorAll('[class*="wow"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.classList[2];
          const delay = entry.target.getAttribute('data-wow-delay') || '0s';

          if (animationClass && !entry.target.classList.contains('animated')) {
            entry.target.style.visibility = 'visible';
            entry.target.style.animationName = animationClass;
            entry.target.style.animationDelay = delay;
            entry.target.style.animationFillMode = 'both'; // Hiển thị khi cuộn tới
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));