// Modal



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
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 2,
            margin: 15,
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












