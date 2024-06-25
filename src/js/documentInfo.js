document.addEventListener('DOMContentLoaded', () => {
    const headerMiddle = document.querySelector('.header__wrap-middle');
    const headerBottom = document.querySelector('.header__wrap-bottom');
    const header = document.querySelector('.header');
    const headerButtonMenu = document.querySelector('.header__button-menu');
    const headerMenu = document.querySelector('.header__menu');
    const menuOverlay = document.querySelector('.menu__overlay');
    const menuBack = document.querySelector('.menu-back');
    const menuUp = document.querySelector('.menu-up');
    const buttonInputVisible = document.querySelector('.button-input');
    const svg = ` <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path
                                    d="M8.25 16.5L13.75 11L8.25 5.5"
                                    stroke="#0E0D35"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>`;
    let tempMenu1;
    let tempMenu2;
    headerButtonMenu.addEventListener('click', () => {
        headerMenu.classList.add('header__menu--active');
        document.querySelector('body').style.overflow = 'hidden';
        menuOverlay.style.display = 'block';
    });
    buttonInputVisible.addEventListener('click', () => {
        document.querySelector('.input__wrap').style.display = 'block';
    });
    document.querySelector('main').addEventListener('click', () => {
        document.querySelector('.input__wrap').removeAttribute('style');
    });
    menuOverlay.addEventListener('click', () => {
        headerMenu.classList.remove('header__menu--active');
        document.querySelector('body').style.overflow = 'visible';
        menuOverlay.style.display = 'none';
        if (document.querySelector('.list-2')) document.querySelector('.list-2').remove();
        if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
        tempMenu1 = 0;
        tempMenu2 = 0;
        if (headerMenu.querySelector('.list-1')) {
            for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
        if (headerMenu.querySelector('.list-2')) {
            for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
    });
    menuBack.addEventListener('click', () => {
        headerMenu.classList.remove('header__menu--active');
        document.querySelector('body').style.overflow = 'visible';
        menuOverlay.style.display = 'none';
        if (document.querySelector('.list-2')) document.querySelector('.list-2').remove();
        if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
        tempMenu1 = 0;
        tempMenu2 = 0;
        if (headerMenu.querySelector('.list-1')) {
            for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
        if (headerMenu.querySelector('.list-2')) {
            for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
    });
    menuUp.addEventListener('click', () => {
        if (document.querySelector('.list-2') && !document.querySelector('.list-3')) {
            document.querySelector('.list-2').remove();
            menuUp.removeAttribute('style');
        }
        if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
        tempMenu1 = 0;
        tempMenu2 = 0;
        if (headerMenu.querySelector('.list-1')) {
            for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
        if (headerMenu.querySelector('.list-2')) {
            for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
        }
    });
    for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
        item.querySelector('.item__button').addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            let topPosition = rect.bottom;
            if (tempMenu1 == e.target) {
                if (document.querySelector('.list-2')) document.querySelector('.list-2').remove();
                tempMenu1 = 0;
                for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                    item.querySelector('.item__button').removeAttribute('style');
                    item.querySelector('.item__button').classList.remove('item__button--active');
                }
                return;
            } else {
                tempMenu1 = e.target;
            }
            for (const item of headerMenu.querySelector('.list-1').querySelectorAll('.item')) {
                item.querySelector('.item__button').removeAttribute('style');
                item.querySelector('.item__button').classList.remove('item__button--active');
            }
            if (document.querySelector('.list-2')) document.querySelector('.list-2').remove();
            item.querySelector('.item__button').style.color = '#d6383c';
            item.querySelector('.item__button').classList.add('item__button--active');
            let ul = document.createElement('ul');
            for (let i = 0; i < 14; i++) {
                let li = document.createElement('li');
                let button = document.createElement('button');
                button.textContent = 'Кнопка 2';
                button.insertAdjacentHTML('beforeend', svg);
                button.classList.add('button-reset', 'item__button', 'item__button-2');
                li.classList.add('list__item', 'item');
                li.append(button);
                ul.appendChild(li);
            }
            ul.classList.add('list', 'list-2');
            // window.innerWidth === 680 ? headerMenu.append(ul) : item.append(ul);
            if (window.innerWidth === 680) {
                menuUp.style.display = 'block';
                ul.style.overflowX = 'scroll';
                ul.style.height = `${document.querySelector('.list-1').offsetHeight + 33}px`;
                console.log(document.querySelector('.list-1').offsetHeight);
                headerMenu.append(ul);
            } else {
                item.append(ul);
            }
            // item.append(ul);
            if (rect.bottom + ul.offsetHeight > windowHeight + 100) {
                topPosition = ul.offsetHeight - rect.top;
                // topPosition = rect.top - ul.offsetHeight;
                ul.style.top = `${topPosition}px`;
            }
            visibleSecondMenu();
        });
    }

    function visibleSecondMenu() {
        if (headerMenu.querySelector('.list-2')) {
            for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                item.querySelector('.item__button').addEventListener('click', (e) => {
                    const rect = e.target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    let topPosition = rect.bottom;
                    if (tempMenu2 == e.target) {
                        if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
                        tempMenu2 = 0;
                        for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                            item.querySelector('.item__button').removeAttribute('style');
                            item.querySelector('.item__button').classList.remove('item__button--active');
                        }
                        return;
                    } else {
                        tempMenu2 = e.target;
                    }
                    for (const item of headerMenu.querySelector('.list-2').querySelectorAll('.item')) {
                        item.querySelector('.item__button').removeAttribute('style');
                        item.querySelector('.item__button').classList.remove('item__button--active');
                    }
                    if (document.querySelector('.list-3')) document.querySelector('.list-3').remove();
                    item.querySelector('.item__button').style.color = '#d6383c';
                    item.querySelector('.item__button').classList.add('item__button--active');
                    let ul = document.createElement('ul');
                    for (let i = 0; i < 3; i++) {
                        let li = document.createElement('li');
                        let button = document.createElement('button');
                        button.textContent = 'Кнопка 3';
                        button.insertAdjacentHTML('beforeend', svg);
                        button.classList.add('button-reset', 'item__button', 'item__button-3');
                        li.classList.add('list__item', 'item');
                        li.append(button);
                        ul.appendChild(li);
                    }
                    ul.classList.add('list', 'list-3');
                    if (window.innerWidth === 680) {
                        menuUp.style.display = 'block';
                        ul.style.overflowX = 'scroll';
                        ul.style.height = `${document.querySelector('.list-2').offsetHeight}px`;
                        headerMenu.append(ul);
                    } else {
                        item.append(ul);
                    }
                    if (rect.bottom + ul.offsetHeight > windowHeight + 60) {
                        topPosition = windowHeight - rect.top - ul.offsetHeight + 10;
                        ul.style.top = `${topPosition}px`;
                    }
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
