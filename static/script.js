// Sidebar Hover Expand
const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("mouseenter", () => {
    sidebar.style.width = "200px";
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.style.justifyContent = "flex-start";
    });
});

sidebar.addEventListener("mouseleave", () => {
    sidebar.style.width = "70px";
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.style.justifyContent = "center";
    });
});

// Smooth Scrolling for Sidebar Links
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Save user preference in local storage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load Dark Mode Preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Contact Form Submission (Optional)
document.querySelector("form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully! 🚀");
    this.reset();  // Clear form fields after submission
});

// Scroll Indicator Effect (Optional)
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.clientHeight;
    
    let scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
    document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
});
