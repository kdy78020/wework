$(document).ready(function () {
    $(".btn-menu").on("click", function () {
        $("nav").stop().fadeIn();
        $("nav").addClass("on");
    });
    $(".btn-close").on("click", function () {
        $("nav").stop().fadeOut();
        $("nav").removeClass("on");
    });

    var swiperSec2 = new Swiper(".section2 .wrap1", {
        slidesPerView: 2,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    var swiperSec3 = new Swiper(".section3.mySwiper", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView : 2,
        loop: false,
        pagination: {
            
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            1200: {
                slidesPerView : 3,
                loop: false,
                centeredSlides: false,
                spaceBetween: 0,
            }
        }
    });
    var swiperSec5 = new Swiper(".section5 .mySwiper", {
        slidesPerView : 1,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        breakpoints: {
            1200: {
                slidesPerView : 2,
                loop: true,
                centeredSlides: false
            }
        }
      });

    function countSlider() {
        var currentCount = $(".section5 .swiper-slide-active").attr("aria-label");
        currentCount = currentCount.split(" / ")

        $(".section5 .pagination .current").text(currentCount[0]);
        $(".section5 .pagination .total").text(currentCount[1]);
    }

    // swiperSec5.on("slideChange", countSlider);//변경시
    swiperSec5.on("slideChangeTransitionEnd", function() {
        countSlider();
    })
    countSlider();//로드시

    AOS.init();
})