document.addEventListener('DOMContentLoaded', () => {
    const headerMiddle = document.querySelector('.header__wrap-middle');
    const headerBottom = document.querySelector('.header__wrap-bottom');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', handleScroll);
    const loadingWrap = document.querySelectorAll('.loading__wrap');
    for (let i = 0; i < loadingWrap.length; i++) {
        const label = loadingWrap[i].querySelector('label');
        const input = loadingWrap[i].querySelector('input');
        input.addEventListener('change', () => {
            label.querySelector('span').textContent = `(${input.files[0].name})`;
        });
    }

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;

        const isScrollGoDown = scrollTop > 60;
        const isScrollStart = scrollTop < 60;
        const isScrollGoTop = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        // HeaderTop
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
