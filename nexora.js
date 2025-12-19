function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}




function submitForm(event) {
    event.preventDefault();
    alert("Thank you for contacting Nexora Technologies Ltd. We will respond shortly.");
}



// Reveal elements on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(
    ".section, .service-box, .about-box, .leader-box, .contact-form"
).forEach(el => observer.observe(el));


