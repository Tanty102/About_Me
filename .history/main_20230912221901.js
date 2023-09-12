// toggle icon navbar

// scroll sections
window.onscroll = () => {
    //sticky scroll header
    let header = document.querySelector('header');
    let navLinks = document.querySelector

    header.classList.toggle('sticky', window.scrollY > 100);
}