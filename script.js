// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll(".section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   window.addEventListener("scroll", function () {
//     let current = "";
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (pageYOffset >= sectionTop - sectionHeight / 6) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href").includes(current)) {
//         link.classList.add("active");
//       }
//     });
//   });
// });
