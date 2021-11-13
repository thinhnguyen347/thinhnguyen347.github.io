$(document).ready(function () {
  $(".menu-mobile").addClass("hide");
  $(".menu-icon").click(function () {
    $(".menu-mobile").toggleClass("hide");
  });

  $(".carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    prevArrow: `<div class="prevArrow"><span><i class="fas fa-chevron-left"></i></span></div>`,
    nextArrow: `<div class="nextArrow"><span><i class="fas fa-chevron-right"></i></span>
</div>`,
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
});
