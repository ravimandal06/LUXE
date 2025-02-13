// Toggle Mobile Menu
const navId = document.getElementById("nav_menu"),
      ToggleBtnId = document.getElementById("toggle_btn"),
      CloseBtnId = document.getElementById("close_btn");

// Show Menu
ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// Hide Menu
CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});

// Initialize Animate on Scroll
AOS.init({
    duration: 800, // Faster Animation duration
    once: true, // Whether animation should happen only once
});

// ==== GSAP Animations ==== //
// ==== LOGO ==== //
gsap.from(".logo", {
 opacity: 0,
 y: -10,
 delay: 0.5,
 duration: 0.3,
 ease: "power2.out"
});

// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
 opacity: 0,
 y: -10,
 delay: 0.7,
 duration: 0.3,
 stagger: 0.2,
 ease: "power2.out"
});

// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
 opacity: 0,
 y: -10,
 delay: 0.7,
 duration: 0.3,
 ease: "power2.out"
});

// ==== MAIN HEADING ==== //
gsap.from(".main-heading", {
 opacity: 0,
 y: 15,
 delay: 1.2,
 duration: 0.5,
 ease: "power2.out"
});

// ==== INFO TEXT ==== //
gsap.from(".info-text", {
 opacity: 0,
 y: 15,
 delay: 1.4,
 duration: 0.5,
 ease: "power2.out"
});

// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
 opacity: 0,
 y: 15,
 delay: 1.4,
 duration: 0.5,
 ease: "power2.out"
});

// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
 opacity: 0,
 y: 15,
 delay: 1.6,
 duration: 0.5,
 ease: "power2.out"
});