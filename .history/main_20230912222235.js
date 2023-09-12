// toggle icon navbar

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
    });
    //sticky scroll header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}