let logIn = localStorage.logIn;
checkLoginStatus(logIn);

// Update room name & description

$('h2.title').text(localStorage.more_detail_name);
$('p.description').text(localStorage.more_detail_des);
$('.photo-area').html(JSON.parse(localStorage.roomGallery));


$('.more-details').on('click', function (e) {

    localStorage.setItem('booked', localStorage.more_detail_name);

})

