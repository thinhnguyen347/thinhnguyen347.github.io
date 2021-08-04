checkLoginStatus(localStorage.logIn)

// gallery

$('#carouselHaLong div.carousel-item img').on('click', function (e) {
  $('#image-zoom').show()
  let fullSize = $(e.target).attr('fullSize');
  let imgTitle = $(e.target).attr('imgTitle');

  $('#imgLabel').text(imgTitle);
  $('#image-zoom .modal-body img').attr('src', fullSize)

})

// Date Picker
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = month + "/" + day + "/" + year;
$("#startDate").attr("value", today);
$("#startDate").datepicker({
  minDate: today,
});

$('.fa-calendar-alt').click(()=>{
  $("input#startDate").click();
})
