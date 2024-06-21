document.addEventListener('DOMContentLoaded', () => {
    const headerMiddle = document.querySelector('.header__wrap-middle');
    const headerBottom = document.querySelector('.header__wrap-bottom');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;

        const isScrollGoDown = scrollTop > 60;
        const isScrollStart = scrollTop < 60;
        const isScrollGoTop = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        // HeaderTop
        // if (isScrollStart) {
        //     headerTop.classList.add('header__wrap-top-visible');
        //     header.classList.add('header-visible');
        // }
        // if (isScrollGoDown) {
        //     headerTop.classList.remove('header__wrap-top-visible');
        //     header.classList.remove('header-visible');
        // }
        if (isScrollStart) {
            headerMiddle.classList.remove('header__wrap-middle-visible');
            headerBottom.classList.remove('header__wrap-bottom-visible-start');
        }
        if (isScrollGoDown) {
            headerMiddle.classList.add('header__wrap-middle-visible');
            headerBottom.classList.add('header__wrap-bottom-visible-start');
        }

        // // HeaderBottom
        if (isScrollGoDown && !isScrollGoTop) {
            headerBottom.classList.add('header__wrap-bottom-visible');
            header.style.marginBottom = '170px';
        }
        if (isScrollGoDown && isScrollGoTop) {
            headerBottom.classList.remove('header__wrap-bottom-visible');
            header.removeAttribute('style');
        }
    }
});
