document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slideshow-container');
    const images = [
        {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Apollo-Athena_1.png?raw=true',
            alt: 'dogs',
            caption: 'Apollo & Athena #1',
            subCaption: 'May 10, 2024 - Central Virginia',
            id: 1
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Flower_1.png?raw=true',
            alt: 'flower',
            caption: 'Spring Flower #1',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 2
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Peony_1.png?raw=true',
            alt: 'peony',
            caption: 'Peony #1',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 3
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Sunset_1.png?raw=true',
            alt: 'sunset',
            caption: 'Spring Sunset #1',
            subCaption: 'May 11, 2024 - Central Virginia',
            id: 4
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Flower_2.png?raw=true',
            alt: 'flowers',
            caption: 'Spring Flowers #2',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 5
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Peony_2.png?raw=true',
            alt: 'peony',
            caption: 'Peony #2',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 6
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Sunset_2.png?raw=true',
            alt: 'sunset',
            caption: 'Spring Sunset #2',
            subCaption: 'May 11, 2024 - Central Virginia',
            id: 7
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Apollo-Athena_2.png?raw=true',
            alt: 'dogs',
            caption: 'Apollo & Athena #2',
            subCaption: 'May 11, 2024 - Central Virginia',
            id: 8
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Flower_3.png?raw=true',
            alt: 'flowers',
            caption: 'Spring Flowers #3',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 9
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Peony_3.png?raw=true',
            alt: 'peony',
            caption: 'Peony #3',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 10
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Sunset_3.png?raw=true',
            alt: 'sunset',
            caption: 'Spring Sunset #3',
            subCaption: 'May 10, 2024 - Central Virginia',
            id: 11
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Floxglove_1.png?raw=true',
            alt: 'foxglove',
            caption: 'Foxglove - Close Up',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 12
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Apollo_1.png?raw=true',
            alt: 'dog',
            caption: 'Apollo',
            subCaption: 'May 9, 2024 - Central Virginia',
            id: 13
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Athena_2.png?raw=true',
            alt: 'dog',
            caption: 'Athena #1',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 14
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Peony_4.png?raw=true',
            alt: 'peony',
            caption: 'Peony #4',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 15
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Flower_4.png?raw=true',
            alt: 'wildflowers',
            caption: 'Spring Wildflowers',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 16
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Athena_1.png?raw=true',
            alt: 'dog',
            caption: 'Athena #2',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 17
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Floxglove_2.png?raw=true',
            alt: 'foxglove',
            caption: 'Foxglove',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 18
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Flower_5.png?raw=true',
            alt: 'flowers',
            caption: 'Spring Flowers #4',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 19
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Peony_5.png?raw=true',
            alt: 'peony',
            caption: 'Peony #5',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 20
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Apollo-Athena_3.png?raw=true',
            alt: 'dogs',
            caption: 'Apollo & Athena #3',
            subCaption: 'May 10, 2024 - Central Virginia',
            id: 21
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Rose_1.png?raw=true',
            alt: 'rose',
            caption: 'Spring Rose',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 22
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Athena_3.png?raw=true',
            alt: 'dog',
            caption: 'Athena #3',
            subCaption: 'May 12, 2024 - Central Virginia',
            id: 23
        }, {
            src: 'https://github.com/bellamoss77/GSAP-animated-slider/blob/main/images/Sunset_4.png?raw=true',
            alt: 'sunset',
            caption: 'Spring Sunset #4',
            subCaption: 'May 10, 2024 - Central Virginia',
            id: 24
        }
    ];

    const populateSlides = () => {
        images.forEach(image => {
            const slide = document.createElement('li');
            slide.className = 'slideshow-slide';

            const slideImg = document.createElement('figure');
            slideImg.className = 'slideshow-img';
            slideImg.style.backgroundImage = `url(${image.src})`;


            const titleWrap = document.createElement('div');
            titleWrap.className = 'title-wrap';

            const slideCaption = document.createElement('h2');
            slideCaption.className = 'title';
            slideCaption.textContent = `${image.caption}`;

            const slideSubCaption = document.createElement('h3');
            slideSubCaption.className = 'sub-title';
            slideSubCaption.textContent = `${image.subCaption}`;

            titleWrap.appendChild(slideCaption);
            titleWrap.appendChild(slideSubCaption);
            slide.appendChild(slideImg);
            slide.appendChild(titleWrap);
            container.appendChild(slide);
        })
    }

    populateSlides();

    const event = new customEvent('SlidesPopulated');
    document.dispatchEvent(event);
})