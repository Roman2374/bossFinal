import '../scss/style.scss'
import '../scss/project13.scss'
import '../scss/project14.scss'
import '../scss/project15.scss'
import '../scss/asideTypeTech.scss'
import '../scss/priceService.scss'
import '../scss/footer.scss'
import '../scss/stylePascha.scss'

if (window.innerWidth < 768) {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
}

let openReadMore = document.querySelector('.readMore')
let readMore__text = document.querySelector('.readMore__text')
let readMore__icon = document.querySelector('.readMore__icon')
let listBrendsOn768px = document.querySelector('.listBrendsOn768px')
let openReadMoreType = document.querySelector('.readMoreType')
let listBrendsType = document.querySelector('.listBrendsType')
let readMoreType__icon = document.querySelector('.readMoreType__icon')
let readMoreType__text = document.querySelector('.readMoreType__text')
let site = document.querySelector('.site')

openReadMore.addEventListener('click', function () {
    if (openReadMore.classList.contains('hidden')) {
        readMore__text.textContent = 'Показать все'
        openReadMore.classList.remove('hidden')
        readMore__icon.style.transform = 'rotate(0deg)'
        listBrendsOn768px.style.maxHeight = '175px'
    } else {
        readMore__text.textContent = 'Скрыть'
        openReadMore.classList.add('hidden')
        readMore__icon.style.transform = 'rotate(-180deg)'
        listBrendsOn768px.style.maxHeight = `${listBrendsOn768px.scrollHeight}px`
    }
})

openReadMoreType.addEventListener('click', function () {
    if (openReadMoreType.classList.contains('hidden')) {
        openReadMoreType.classList.remove('hidden')
        readMoreType__text.textContent = 'Показать все'
        readMoreType__icon.style.transform = 'rotate(0deg)'
        listBrendsType.style.maxHeight = '160px'
    } else {
        readMoreType__text.textContent = 'Скрыть'
        openReadMoreType.classList.add('hidden')
        readMoreType__icon.style.transform = 'rotate(-180deg)'
        listBrendsType.style.maxHeight = `${listBrendsType.scrollHeight}px`
    }
})

let headerContainer__burger = document.querySelector(
    '.header-container__burger'
)

let asideDropMenu = document.querySelector('.aside-drop-menu')
let headerDropMenu__close = document.querySelector('.header-drop-menu__close')
let blur = document.querySelector('.blur')

headerContainer__burger.addEventListener('click', function () {
    asideDropMenu.style.transform = 'translateX(0)'
    blur.style.transform = 'translateX(0)'
    site.style.overflow = 'hidden'
})

headerDropMenu__close.addEventListener('click', function () {
    asideDropMenu.style.transform = 'translateX(-100%)'
    blur.style.transform = 'translateX(-100%)'
    site.style.overflow = 'scroll'
})

blur.addEventListener('click', function () {
    asideDropMenu.style.transform = 'translateX(-100%)'
    blur.style.transform = 'translateX(-100%)'
    site.style.overflow = 'scroll'
})


