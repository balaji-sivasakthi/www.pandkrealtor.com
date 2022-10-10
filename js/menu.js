$('input[id="toggle"]').on('change',function(e) {
if ($(this).prop('checked')) {
    $('body').css('overflow', 'hidden');
} else {
    $('body').css('overflow', 'auto');
};
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 3, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
  }
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
  },
  mousewheel: false,
  grabCursor: true, // менять иконку курсора
  thumbs: { // указываем на превью слайдер
    swiper: sliderThumbs // указываем имя превью слайдера
  },
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
  }
});

function landsclick(){
  sliderImages.slideTo(5, 200, ()=>{
    console.log('called')
  });
}
function aboutclick(){
  sliderImages.slideTo(0, 200, ()=>{
    console.log('called')
  });
}
function blogsclick(){
  sliderImages.slideTo(1, 200, ()=>{
    console.log('called')
  });
}
function contactclick(){
  sliderImages.slideTo(4, 200, ()=>{
    console.log('called')
  });
}
function ongoingclick(){
  sliderImages.slideTo(3, 200, ()=>{
    console.log('called')
  });
}
function completedclick(){
  sliderImages.slideTo(2, 200, ()=>{
    console.log('called')
  });
}