// slick slider for pack slider
//
//$(document).ready(function () {
//   $('.packs-slider').slick({
//     dots: false,
//     infinite: true,
//     centerMode: true,

//     arrows: true,
//     speed: 300,
//     nextArrow: '<button type="button" class="slick-next">Dalee</button>',
//     prevArrow: '<button type="button" class="slick-prev">Preved</button>',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1850,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }

//     ]
//   });
// });

// burger-menu
$('.burger__menu-btn').on('click', function (e) {
  e.preventDefault();
  $('.burger__menu').toggleClass('burger__menu-active');
  $('.burger__content').toggleClass('burger__content-active');
})

//burger-button
function burgerButton(x) {
  x.classList.toggle("change");
}

//signals-slider
jQuery(document).ready(function ($) {
  {
    var rev = $('.binance_slider');
    rev.on('init', function (event, slick, currentSlide) {
      var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      cur.removeClass('slick-snext').removeClass('slick-sprev');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      // console.log('beforeChange');
      var
        cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev);

      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      next = cur.next(),
        prev = cur.prev();
      prev.prev();
      prev.next();

      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    let slider = rev.slick({
      speed: 500,
      arrows: false,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '0',
      swipe: true,
      lazyLoad: 'progressive',
      customPaging: function (slider, i) {
        return '';
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
      /*infinite: false,*/
    });
    $('.binance-button.prev').click(function () {
      slider.slick('slickPrev')
    })
    $('.binance-button.next').click(function () {
      slider.slick('slickNext')
    })

  }
});


//faq dropdown content
function showFirst() {
  document.getElementById("dropdown-1").classList.toggle("faq-show");
  document.getElementById("faq-img-1").classList.toggle("faq-rotate");
}
function showSecond() {
  document.getElementById("dropdown-2").classList.toggle("faq-show");
  document.getElementById("faq-img-2").classList.toggle("faq-rotate");
}
function showThird() {
  document.getElementById("dropdown-3").classList.toggle("faq-show");
  document.getElementById("faq-img-3").classList.toggle("faq-rotate");
}

window.onclick = function (event) {
  if (!event.target.matches('.faq__dropbtn , .faq__dropbtn-img')) {
    var dropdowns = document.getElementsByClassName("faq__dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('faq-show')) {
        openDropdown.classList.remove('faq-show');
      }

    }
  }
  if (!event.target.matches('.faq__dropbtn, .faq__dropbtn-img')) {
    var leftArrow = document.getElementsByClassName("faq__dropbtn-img");
    var i;
    for (i = 0; i < leftArrow.length; i++) {
      var bottomArrow = leftArrow[i];
      if (bottomArrow.classList.contains('faq-rotate')) {
        bottomArrow.classList.remove('faq-rotate');
      }

    }
  }
};

// reviews slider -> activate slider width resize
$(window).resize(function () {
  if ($(window).width() < 1200) {
    $('.reviews__wrapper').addClass('reviews-slider');
  }
});
$(window).resize(function () {
  if ($(window).width() > 1200) {
    $('.reviews__wrapper').removeClass('reviews-slider');
  }
});

// slick slider for reviews
$(document).ready(function () {
  function slickify() {
    $('.reviews__slider-wrapper').not('.slick-initialized').slick({
      dots: false,
      infinite: true,
      centerMode: true,
      mobileFirst: true,
      centerPadding: '0px',
      speed: 300,
      nextArrow: '<button type="button" class="reviews-slick-nextbtn reviews-btn"></button>',
      prevArrow: '<button type="button" class="reviews-slick-prevbtn reviews-btn"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: "unslick"
        }

      ]
    });
  }
  slickify();
  $(window).resize(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth < 1200) {
      slickify();
    }
  });
});


