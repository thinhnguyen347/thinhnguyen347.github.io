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
    arrows: true,
    prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow"),
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
