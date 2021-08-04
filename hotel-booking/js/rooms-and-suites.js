let logInStatus = localStorage.logIn;
checkLoginStatus(logInStatus);

// Date Picker

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = month + "/" + day + "/" + year;

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

$("#checkIn, #checkOut").attr("value", today);
$("#checkIn, #checkOut").datepicker({
    minDate: today,
});

if (localStorage.checkOut != undefined || localStorage.checkIn != undefined || localStorage.checkIn != "" || localStorage.checkOut != "") {

    $("#checkIn").attr("value", localStorage.checkIn);
    $("#checkOut").attr("value", localStorage.checkOut);
    $("#adultNumber").attr("value", localStorage.adult);
    $("#kidNumber").attr("value", localStorage.child);

}

// Update guest number & date
$('.check-avail').on('click', function () {

    localStorage.setItem('checkIn', $('#checkIn').val())
    localStorage.setItem('checkOut', $('#checkOut').val())
    localStorage.setItem('adult', $('#adultNumber').val())
    localStorage.setItem('child', $('#kidNumber').val())

})

// Update room availbility from data

for (let i = 0; i < roomInventory.length; i++) {

    let badge = $('.badge');
    badge.eq(i + 1).text(roomInventory[i])

    if (roomInventory[i] == 0) {
        badge.eq(i + 1).addClass('bg-danger')
    } else {
        badge.eq(i + 1).addClass('bg-success')
    }

}

// Get room info on button click

$('a.more-details').each(function (index) {

    $(this).on('click', function () {

        let roomName = $('h3').eq(index).text();
        let roomDescription = $('p.card-text').eq(index).text();

        localStorage.setItem('more_detail_name', roomName)
        localStorage.setItem('more_detail_des', roomDescription)

        let html1 = $('.card').eq(index).find('.carousel').html();
        html = '<div id="carousel' + index + '" class="carousel slide" data-bs-ride="carousel">' + html1 + '</div>'

        localStorage.setItem('roomGallery', JSON.stringify(html))

    });
})

$('.book-now').on('click', function (e) {

    let index = $(e.target).index();
    let bookedRoom = $('h3').eq(index).text()
    localStorage.setItem('booked', bookedRoom);

})

