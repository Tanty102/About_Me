// toggle icon navbar

// scroll sections
let navLinks = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
    //sticky scroll header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}