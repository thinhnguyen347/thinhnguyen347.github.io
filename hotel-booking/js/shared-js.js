
// Tawk.to Script --------------------------------------------------------------------------

// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = 'https://embed.tawk.to/60f6e1b0d6e7610a49ac29e3/1fb2636th';
//   s1.charset = 'UTF-8';
//   s1.setAttribute('crossorigin', '*');
//   s0.parentNode.insertBefore(s1, s0);
// })();

//Back to top -----------------------------------------------------------------------------
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    $('.back-to-top').css('display', 'block');
  } else {
    $('.back-to-top').css('display', 'none');
  }
}

//Title animation -------------------------------------------------------------------------
AOS.init();

//==========================================================================================================================

localStorage.clear();
let logInStatus = false;

// User data
let users = [{ id: 1, password: "admin1234", title: "mr", firstName: "Thinh", lastName: "Nguyen", email: "admin@gmail.com", password: "admin", phone: "0984018891", country: "Vietnam" }]

console.log(users)

// Log-in

console.log(localStorage)

$('#signInModal').on('click','.log-in', function (e) {
  
  e.preventDefault()
  
  console.log(users[0].password);
  console.log(users[0].email);

  console.log($('#logInEmail').val());
  console.log(pass= $('#logInPassword').val()
)
})


