document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slideshow-container');
    const nextBtn = document.querySelector('.nav-next');
    const prevBtn = document.querySelector('.nav-prev');
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
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 8
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 9
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 10
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 11
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 12
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 13
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 14
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 15
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 16
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 17
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 18
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 19
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 20
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 21
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 22
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 23
        }, {
            src: '',
            alt: '',
            caption: '',
            subCaption: '',
            id: 24
        },
    ]
})