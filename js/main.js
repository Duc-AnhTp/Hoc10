const menuToggle = document.getElementById("mobileMenuBtn")
const nav = document.querySelector(".navbar-menu")

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
})

document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active")
    })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({ behavior: "smooth" })
        }
    })
})

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

document
    .querySelectorAll(".feature-section, .program-section, .timeline-section, .testimonials-section")
    .forEach((section) => {
        section.style.opacity = "0"
        section.style.transform = "translateY(20px)"
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(section)
    })

const timelineDots = document.querySelectorAll(".timeline-dot")
timelineDots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.2}s`
})

const statsSection = document.querySelector(".statistics")
if (statsSection) {
    statsSection.style.opacity = "0"
    statsSection.style.transform = "translateY(20px)"
    statsSection.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(statsSection)
}

const testimonialsSection = document.querySelector(".testimonials-section")
if (testimonialsSection) {
    testimonialsSection.style.opacity = "0"
    testimonialsSection.style.transform = "translateY(20px)"
    testimonialsSection.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(testimonialsSection)
}
