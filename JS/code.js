document.addEventListener('DOMContentLoaded', () => {
    const debounce = (func, delay, immediate = false) => {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, delay);
            if (immediate && !timeout) func.apply(context, args);
        };
    };

    setTimeout(() => {
        animateSlidesIn(0)
    })

    const slider = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slideshow-slide');
    const nextBtn = document.querySelector('.nav-next');
    const prevBtn = document.querySelector('.nav-prev');
    let sliderWidth = parseInt(getComputedStyle(slider).width);
    let clickCounter = 0;

    function splitText(element) {
        const text = element.textContent;
        const characters = text.split('').map(char => {
            if (char === ' ') return '<span class="char" style="white-space: pre;"> </span>';
            return `<span class="char">${char}</span>`;
        }).join('');
        element.innerHTML = characters;
        return element.querySelectorAll('.char');
    }

    function animateText(chars) {
        const tl = gsap.timeline();
        tl.to(chars, {
            duration: 0.8,
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            transformOrigin: '0% 50% -50',
            ease: 'back.out(1.7)',
            stagger: 0.03
        });
        return tl;
    }

    function animateSlideIn(index) {
        const currentSlide = slides[index];
        const title = currentSlide.querySelector('.title');
        const subTitle = currentSlide.querySelector('.sub-title');
        const image = currentSlide.querySelector('.slideshow-img');

        const chars = splitText(title);
        const tl = gsap.timeline();

        tl.add(animateText(chars))
          .fromTo(title, { y: -50, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1, ease: 'power2.inOut' })
          .fromTo(subTitle, { y: 50, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1, ease: 'power2.out' })
          .to(image, { duration: 0.4, scale: 1, ease: 'power2.easeOut' }, '-=0.6')

          return tl;
    }

    function updateNavBtns() {
        prevBtn.classList.toggle('is-inactive', clickCounter === 0);
    }

    nextBtn.addEventListener('click', () => {
        clickCounter = (clickCounter + 1) % slides.length;
        gsap.to(slider, { duration: 0.9, x: -clickCounter * sliderWidth, ease: 'power2.inOut' });
        animateSlideIn(clickCounter);
        updateNavBtns();
    });

    prevBtn.addEventListener('click', () => {
        if (clickCounter > 0) {
            clickCounter--;
            gsap.to(slider, { duration: 0.9, x: `+=${sliderWidth}`, ease: 'power2.inOut' });
            animateSlideIn(clickCounter);
            updateNavBtns();
        }
    });

    window.addEventListener('resize', () => {
        sliderWidth = parseInt(getComputedStyle(slider).width);
        gsap.to(slider, { x: -clickCounter * sliderWidth });
    });

    updateNavBtns();
    
})