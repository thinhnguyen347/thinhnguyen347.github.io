$.ajax({
    url: 'https://quanly-hv.herokuapp.com/login'
})
    .done(function (data) {

        $('form').on('submit', function (event) {
            event.preventDefault();

            let userInfo = $('#username').val();
            let password = $('#password').val();

            let success = false;

            $.each(data, function () {

                console.log(this.password)

                if (password == this.password && userInfo == this.username) {

                    success = true;
                    
                }

            })

            if (success) {
                $('.alert').addClass('hide');
                $('.success').removeClass('hide');

                setTimeout(function () {
                    window.location.href = "https://quanly-hv.herokuapp.com/";
                }, 2000)

            } else {
                $('.alert').removeClass('hide');
                $('.success').addClass('hide');
                setTimeout(function () {
                    window.location.reload()
                }, 3000)
            }

        })

    })
    .fail(function () {
        alert('Truy xuất thông tin người dùng thất bại')
    })