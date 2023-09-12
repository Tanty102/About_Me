// toggle icon navbar

// scroll sections
let navLinks = document.querySelectorAll('sec')

window.onscroll = () => {
    //sticky scroll header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}