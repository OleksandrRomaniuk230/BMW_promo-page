const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href').substring(1);
        e.preventDefault();
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    })
})