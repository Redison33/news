// window.addEventListener('scroll', function () {
//     const scrollPosition = document.documentElement.scrollTop;
//     const scrollDirection = scrollPosition > this.previousScrollPosition ? 'down' : 'up';

//     if (scrollDirection === 'up') {
//         console.log('work');
//     } else if (scrollDirection === 'down') {
//         console.log('work2');
//     }

//     this.previousScrollPosition = scrollPosition;
// });
document.addEventListener('DOMContentLoaded', () => {
    const headerTop = document.querySelector('.header__wrap-top');
    const headerMiddle = document.querySelector('.header__wrap-middle');
    const headerBottom = document.querySelector('.header__wrap-bottom');

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;

        const isScrollGoDown = scrollTop > 0;
        const isScrollStart = scrollTop === 0;
        const isScrollGoTop = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        // HeaderTop
        if (isScrollStart) headerTop.classList.add('header__wrap-top-visible');
        if (isScrollGoDown) headerTop.classList.remove('header__wrap-top-visible');

        // HeaderBottom
        isScrollGoTop ? headerBottom.classList.add('header__wrap-bottom-visible') : headerBottom.classList.remove('header__wrap-bottom-visible');
    }
    const Swiper1 = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 150,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
