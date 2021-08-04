let logIn = localStorage.logIn;
checkLoginStatus(logIn);

// Update room name & description

$('h2.title').text(localStorage.more_detail_name);
$('p.description').text(localStorage.more_detail_des);
$('.photo-area').html(

    '<div class="card overflow-hidden">' + 
    JSON.parse(localStorage.roomGallery) +
    '</div>'
)


$('.book-now').on('click', function (e) {

    localStorage.setItem('booked', localStorage.more_detail_name);

})

