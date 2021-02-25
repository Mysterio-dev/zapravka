let swiperMain = new Swiper(".swiper-main", {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //     delay: 8000,
    // },
    navigation: {
        nextEl: '.selectornx1',
        prevEl: '.selectorpr1',
    },
});

let swiperBrand = new Swiper(".swiper-brand", {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 500,
    autoplay: {
      delay: 4000,
    },

    navigation: {
      nextEl: '.selectornx2',
      prevEl: '.selectorpr2',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },

  
    },
  });
