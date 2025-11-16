function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("form-status").innerText = 
        "Message sent successfully! (This is a frontend demo)";

    this.reset();
});
