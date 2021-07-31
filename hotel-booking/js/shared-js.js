
//Back to top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    $('.back-to-top').css('display', 'block');
  } else {
    $('.back-to-top').css('display', 'none');
  }
}

//==========================================================================================================================


// User data
let users = [{ id: 1, password: "admin123", title: "Mr", firstName: "Thinh", lastName: "Nguyen", email: "admin@gmail.com", password: "admin", phone: "0984018891", country: "Vietnam" }]

// Log-in
function checkLoginStatus(logIn) {
  if (logIn == true) {
    $('.log-in-btn, .sign-up-btn').addClass('d-none');
    $('.user-btn').removeClass('d-none');
  }

  if (logIn == false) {
    $('.log-in-btn, .sign-up-btn').removeClass('d-none');
    $('.user-btn').addClass('d-none');
  }
}

$('#logInModal').on('click', '.log-in', function (e) {

  e.preventDefault();
  let emailInput = $('#logInEmail').val().trim();
  let pwInput = $('#logInPassword').val();

  // Test password
  if (pwInput.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {

    // Ẩn nút/tab Log-in và Sign-up
    if (emailInput == users[0].email && pwInput == $('#logInPassword').val()) {

      localStorage.setItem('logIn', true);
      $('p.text-danger.text-center').remove();
      $('#logInModal .form-check').before(
        `<p class="text-success text-center" data-aos="fade-in" data-aos-duration="1000"><i class="fas fa-check-circle text-warning pe-2"></i> Log-in successful!</p>`
      )

      $('.guestName').html(`
      <i class="fas fa-user-circle"></i>&nbsp;Hello, ${users[0].title}. ${users[0].firstName}
      `)


      setTimeout(function () {
        $('.log-in-btn, .log-in-btn').addClass('d-none');
        $('.user-btn').removeClass('d-none');
        $('#logInModal').removeClass('show');
        $('#logInModal').fadeOut(800);
        $('.modal-backdrop').fadeOut(800)
      }, 2500)

      $('btn.log-in').attr('disabled')
    }

  } else {
    // báo lỗi log-in
    $('p.text-danger.text-center').fadeOut(200);
    $('#logInModal .form-check').before(
      `<p class="text-danger text-center" data-aos="fade-in" data-aos-duration="1000"><i class="fas fa-times-circle text-danger pe-2"></i>Log-in failed. Please try again!</p>`
    );

    setTimeout(function () {
      $('#logInEmail').val('');
      $('#logInPassword').val('')
    }, 1000)
  }

})
// Log-out
$('.log-out').on('click', function () {
  $('.log-in-btn, .log-in-btn').removeClass('d-none');
  $('.user-btn').addClass('d-none');
  localStorage.setItem('logIn', false);
  $('.toastMessage').removeClass('d-none');
  $('.toastMessage').fadeOut(3000)
})

// Room Data

let roomInventory = [3, 5, 4, 1, 0, 0, 3, 2,];










