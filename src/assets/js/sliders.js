document.addEventListener("DOMContentLoaded", () => {
    let sliders = document.querySelectorAll('.product__slider');
    if(sliders.length) {
        let productSlider = new Swiper(".product__slider .slider", {
            slidesPerView: 'auto',
            spaceBetween: 8,
            grabCursor: true,
            observeParents: true,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
            breakpoints: {
                744: {
                    spaceBetween: 14,
                    slidesOffsetBefore: 20,
                    slidesOffsetAfter: 20,
                },
                1024: {
                    spaceBetween: 14,

                    navigation: {
                        nextEl: '.product__slider .slider-nav-arrow--next',
                        prevEl: '.product__slider .slider-nav-arrow--prev',
                    },
                },

                1440: {
                    spaceBetween: 14,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,

                    navigation: {
                        nextEl: '.product__slider .slider-nav-arrow--next',
                        prevEl: '.product__slider .slider-nav-arrow--prev',
                    }
                }
            }
        });

        let curSlider = document.querySelector('.product__slide.current')
        let arrSlides= [...document.querySelectorAll('.product__slide')]
        let curIndex = arrSlides.indexOf(curSlider)
        
        productSlider.slideTo(curIndex) 
    } 

    let sliderPicture = document.querySelectorAll('.product__picture-wrapper .swiper');
    if(sliderPicture.length) {
        let productPicSlider = new Swiper(".product__picture-wrapper .swiper", {
            slidesPerView: 1,
            spaceBetween: 50,

            navigation: {
                nextEl: '.product__picture-wrapper .slider-nav-arrow--next',
                prevEl: '.product__picture-wrapper .slider-nav-arrow--prev',
            },

            breakpoints: {
                744: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                }
            }
        });
    } 
})

