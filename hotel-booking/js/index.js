localStorage.setItem('logIn', false);
let logIn = localStorage.logIn;
checkLoginStatus(logIn);

//Title animation 

AOS.init();

// Date Picker
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

let today = month + "/" + day + "/" + year;

$("#checkIn, #checkOut").attr("value", today);
$("#checkIn, #checkOut").datepicker({
  minDate: today,
});

localStorage.setItem('checkIn', today)
localStorage.setItem('checkOut', today)
localStorage.setItem('adult', '0')
localStorage.setItem('child', '0')

$('.check-avail').on('click', function () {

  localStorage.setItem('checkIn', $('#checkIn').val())
  localStorage.setItem('checkOut', $('#checkOut').val())
  localStorage.setItem('adult', $('#adultNumber').val())
  localStorage.setItem('child', $('#kidNumber').val())

})

//Photo Gallery Carousel
$('.gallery .owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 10,
      animateOut: 'hinge',
      animateIn: 'flipInX',
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

//SPECIAL OFFERS Carousel
$('.special-offers .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: false
    },
    800: {
      items: 2,
      nav: false
    },
    1000: {
      items: 2
    },
    1440: {
      items: 3
    },
    2000: {
      items: 4
    },
    2900: {
      items: 5
    }
  }
})

$('span[aria-label=Next]').html('<i class="fas fa-angle-right"></i>')
$('span[aria-label=Previous]').html('<i class="fas fa-angle-left"></i>')

//Review Carousel
$('.review .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }

})

// Gallery

$('.gallery div.item img').on('click', function (e) {

  let fullSize = $(e.target).attr('full-size');
  let imgTitle = $(e.target).attr('img-title');

  $('#imgLabel').text(imgTitle);
  $('#gallery-image-zoom .modal-body img').attr('src', fullSize)

})













