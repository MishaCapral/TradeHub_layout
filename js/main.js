$(document).ready(function () {
  $('.packs-slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 300,
    nextArrow: '<button type="button" class="slick-next">Dalee</button>',
    prevArrow: '<button type="button" class="slick-prev">Preved</button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

