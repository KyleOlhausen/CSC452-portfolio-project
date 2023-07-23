



// card animation
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

hiddenElements.forEach(element => {
    observer.observe(element)
})