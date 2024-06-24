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
    const headerMiddle = document.querySelector('.header__wrap-middle');
    const headerBottom = document.querySelector('.header__wrap-bottom');
    const header = document.querySelector('.header');
    const headerButtonMenu = document.querySelector('.header__button-menu');
    const headerMenu = document.querySelector('.header__menu');
    let flag = false;

    headerButtonMenu.addEventListener('click', () => {
        headerMenu.classList.add('header__menu--active');
        // headerButtonMenu.classList.add('header__button-menu--active');
    });
    for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
        item.querySelector('.item__button').addEventListener('click', (e) => {
            for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
            }
            if (document.querySelector('.list-2')) document.querySelector('.list-2').remove();
            item.querySelector('.item__button').style.color = '#d6383c';
            let ul = document.createElement('ul');
            for (let i = 0; i < 14; i++) {
                let li = document.createElement('li');
                let button = document.createElement('button');
                button.textContent = 'Кнопка';
                button.classList.add('button-reset', 'item__button', 'item__button-2');
                li.classList.add('list__item', 'item');
                li.append(button);
                ul.appendChild(li);
            }
            ul.classList.add('list', 'list-2');
            item.append(ul);
            test();
        });
    }

    function test() {
        if (headerMenu.querySelector('.list-2')) {
            console.log(headerMenu.querySelector('.list-2'));
            for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                item.querySelector('.item__button').addEventListener('click', (e) => {
                    for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                        item.querySelector('.item__button').removeAttribute('style');
                    }
                    if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
                    item.querySelector('.item__button').style.color = '#d6383c';
                    let ul = document.createElement('ul');
                    for (let i = 0; i < 3; i++) {
                        let li = document.createElement('li');
                        let button = document.createElement('button');
                        button.textContent = 'Кнопка';
                        button.classList.add('button-reset', 'item__button', 'item__button-3');
                        li.classList.add('list__item');
                        li.append(button);
                        ul.appendChild(li);
                    }
                    ul.classList.add('list', 'list-3');
                    item.append(ul);
                });
            }
        }
    }
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

    const newsSwiper = new Swiper('.news__swiper', {
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
    const newsSwiperInside = new Swiper('.news__swiper-inside', {
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
