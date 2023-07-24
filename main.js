//Nav hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


//Animation
const hiddenElements = document.querySelectorAll('.hidden-card, .hidden-title, .hidden-abt, .hidden-header-name');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.target.classList.contains('card')){
            entry.target.classList.toggle("show-card", entry.isIntersecting)
        }
        else if (entry.target.classList.contains('about-card')){
            entry.target.classList.toggle("show-abt-card", entry.isIntersecting)
        }
        else if (entry.target.classList.contains('hero-container')){
            entry.target.classList.toggle("show-title", entry.isIntersecting)
        }        
    })
})

hiddenElements.forEach(element => {
    observer.observe(element)
})
