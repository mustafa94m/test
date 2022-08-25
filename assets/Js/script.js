var swiper = new Swiper(".slider-container", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      loopFillGroupWithBlank: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
      },
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },

      breakpoints: {
            0: {
                  slidesPerView: 1,
            },
            767: {
                  slidesPerView: 1,
            },
            992: {
                  slidesPerView: 2,
            },
            1200: {
                  slidesPerView: 2,
            },
      },
});