// Carousel Settings
$(".carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: false,
  prevArrow: `<div class="prevArrow"><i class="fas fa-chevron-left"></i></div>`,
  nextArrow: `<div class="nextArrow"><i class="fas fa-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
});

//Menu mobile mode

