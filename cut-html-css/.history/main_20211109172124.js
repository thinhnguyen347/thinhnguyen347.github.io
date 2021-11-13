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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true,
          prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow"),
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          prevArrow: $(".prevArrow"),
          nextArrow: $(".nextArrow"),
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
