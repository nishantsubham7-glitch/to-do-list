
// Mobile Navigation
const navbar = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");
menuButton.className = "menu-toggle";
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Toggle navigation");
menuButton.setAttribute("aria-expanded", "false");

document.querySelector(".navbar").appendChild(menuButton);

menuButton.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.innerHTML = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const userMessage = contactForm.querySelector(
        "textarea"
    ).value.trim();

    if (!name || !email || !userMessage) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent =
        `Thank you, ${name}! Your message has been received.`;

    message.style.color = "green";

    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Current Year in Footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} MyWebsite. All Rights Reserved.`;
}
