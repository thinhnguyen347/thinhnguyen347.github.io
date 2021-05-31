$.ajax({
    url: 'https://quanly-hv.herokuapp.com/login'
})
    .done(function (data) {

        $('form').submit(function (event) {

            event.preventDefault();

            let userInfo = $('#username').val();
            let current_password = $('#password').val();

            let success = false;

            $.each(data, function () {


                if (current_password == this.password && userInfo == this.username) {

                    success = true;
                    console.log(success);

                    return success = true;
                }

            })

            if (success) {

                $('p.message').empty();
                $('p.message').append('<span class="success"><i class="far fa-check-circle"></i> &nbsp; Đăng nhập thành công</span><br>')

                setTimeout(function () {
                    window.location.href = "https://quanly-hv.herokuapp.com/";
                }, 1000)

            } else {

                $('p.message').fadeOut().empty();
                $('p.message').fadeIn().append('<span class="alert"><i class="far fa-times-circle"></i> &nbsp;Thông tin đăng nhập chưa chính xác</span>')
            
            }

        })

    })
    .fail(function () {
        alert('Truy xuất thông tin người dùng thất bại')
    })