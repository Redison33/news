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
});
