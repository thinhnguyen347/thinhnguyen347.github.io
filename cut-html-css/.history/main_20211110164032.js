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
    prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 00,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});
