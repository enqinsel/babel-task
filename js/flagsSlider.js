document.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector('.flags-slider');

    const countries = [
        { name: "Dominik", imgSrc: "./images/dominicflag.png", info: "/545kw" },
        { name: "Gabon", imgSrc: "./images/gabonflag.png", info: "/536kw" },
        { name: "Türkiye", imgSrc: "./images/turkeyflag.png", info: "/521kw" },
        { name: "Makedonya", imgSrc: "./images/makedonyaflag.png", info: "/517kw" },
        { name: "Almanya", imgSrc: "./images/germanyflag.png", info: "/599kw" },
        { name: "Dominik", imgSrc: "./images/dominicflag.png", info: "/545kw" },
        { name: "Gabon", imgSrc: "./images/gabonflag.png", info: "/536kw" },
        { name: "Türkiye", imgSrc: "./images/turkeyflag.png", info: "/521kw" },
        { name: "Makedonya", imgSrc: "./images/makedonyaflag.png", info: "/517kw" },
        { name: "Almanya", imgSrc: "./images/germanyflag.png", info: "/599kw" },
        { name: "Dominik", imgSrc: "./images/dominicflag.png", info: "/545kw" },
        { name: "Gabon", imgSrc: "./images/gabonflag.png", info: "/536kw" },
        { name: "Türkiye", imgSrc: "./images/turkeyflag.png", info: "/521kw" },
        { name: "Makedonya", imgSrc: "./images/makedonyaflag.png", info: "/517kw" },
        { name: "Almanya", imgSrc: "./images/germanyflag.png", info: "/599kw" },
        { name: "Dominik", imgSrc: "./images/dominicflag.png", info: "/545kw" },
        { name: "Gabon", imgSrc: "./images/gabonflag.png", info: "/536kw" },
        { name: "Türkiye", imgSrc: "./images/turkeyflag.png", info: "/521kw" },
        { name: "Makedonya", imgSrc: "./images/makedonyaflag.png", info: "/517kw" },
        { name: "Almanya", imgSrc: "./images/germanyflag.png", info: "/599kw" }
    ];

    
    countries.forEach(country => {
        const slide = document.createElement('div');
        slide.className = 'flags-slide';
        slide.setAttribute('data-country', `${country.name} <span>${country.info}</span>`);
        
        const img = document.createElement('img');
        img.src = country.imgSrc;
        img.alt = country.name;

        slide.appendChild(img);
        slider.appendChild(slide);
    });


    // Tooltip işlevi
    const slides = document.querySelectorAll('.flags-slide');
    const tooltip = document.querySelector('.flags-tooltip');

    slides.forEach(slide => {
        slide.addEventListener('mouseover', function(event) {
            tooltip.innerHTML = this.getAttribute('data-country');
            tooltip.style.opacity = 1;
            tooltip.style.zIndex = 10; 
        });

        slide.addEventListener('mousemove', function(event) {
            const offsetX = -100;
            const offsetY = 100;
            tooltip.style.left = event.pageX + offsetX + 'px';
            tooltip.style.top = event.pageY - offsetY + 'px';
        });

        slide.addEventListener('mouseout', function() {
            tooltip.style.opacity = 0;
        });
    });

    // Slider kontrolü
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.getBoundingClientRect().left; 
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.getBoundingClientRect().left; 
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.style.width = `${slider.scrollWidth}px`; 
});
