// Tawk.to Script
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = 'https://embed.tawk.to/60f6e1b0d6e7610a49ac29e3/1fb2636th';
//   s1.charset = 'UTF-8';
//   s1.setAttribute('crossorigin', '*');
//   s0.parentNode.insertBefore(s1, s0);
// })();

//Back to top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    $('.back-to-top').css('display', 'block');
  } else {
    $('.back-to-top').css('display', 'none');
  }
}

//Title animation
AOS.init();
