// mouse ile aşağıya indiğimizde heder kaybolur

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
    } else {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
    }
});


// header menü toggle

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.mobile-list').classList.toggle('active');
});
