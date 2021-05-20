function Stt() {
    let array = $('td.number');
    for (let i = 0; i < array.length; i++) {
        array[i].innerText = i + 1;
    }
}

Stt();

// Nút Thêm học viên
$('.btn-add').click(function () {
    $('.modal-add').removeClass('hide');
})

// Lấy dữ liệu từ form nhập-----------------------------------------------------------------
// let new_avatar = $(".input-data #avatar").val();
let new_name = $('.input-data #name').val();
let new_dob = $('.input-data #dob').val();
let new_gender = $('.input-data input[name="gender"]:checked').val();
let new_address = $('.input-data #DiaChi').val();
let new_email = $('.input-data #email').val();
let new_phone = $('.input-data #sdt').val();

$('button.submit').click(function () {

    $('.modal-add').addClass('hide');
    $('tr').last().append(
        '<tr>' +
        '<td class="number"></td>' +
        '<td class="avatar"><img src="img/student8.png" alt="student-image" width="150px"></td>' +
        '<td class="name">' + new_name + '</td>' +
        '<td class="dob">' + new_dob + "</td>" +
        '<td class="gender">' + new_gender + '</td>' +
        '<td class="address">' + new_address + '</td>' +
        '<td class="email">' + new_email + '</td>' +
        '<td class="phone">' + new_phone + '</td>' +
        '<td><i class="far fa-edit"></i><i class="far fa-trash-alt"></i></td></tr>'
    )
})

// Nút Sửa thông tin học viên--------------------------------------------------------------------

$('.fa-edit').click(function () {
    $('.modal-edit').removeClass('hide');

    let item = $(this).parent().parent();

    // Lấy avatar
    let current_avatar = item.find('img').attr('src');
    $('.edit-data img').attr('src', current_avatar);

    // Lấy thông tin tên
    let current_name = item.find('.name').text();
    console.log(current_name);
    $('.edit-data #name').val(current_name);

    // Lấy thông tin ngày sinh
    let current_dob = item.find('.dob').text();
    $('.edit-data #dob').val(current_dob);

    // Lấy thông tin giới tính
    let gender = item.find('.gender').text();
    if (gender == "Nam") {
        $('.edit-data #male').attr('checked', 'checked');
    } else if (gender == "Nữ") {
        $('.edit-data #female').attr('checked', 'checked');
    } else {
        $('.edit-data #other').attr('checked', 'checked');
    }

    // Lấy thông tin địa chỉ
    let current_address = item.find('.address').text();
    $('.edit-data #DiaChi').val(current_address);

    // Lấy thông tin e-mail
    let current_email = item.find('.email').text();
    $('.edit-data #email').val(current_email);

    // Lấy thông tin sdt
    let current_phone = item.find('.phone').text();
    $('.edit-data #sdt').val(current_phone);
})


// Tắt Modal thêm/edit thông tin
$('.fa-times').click(function () {
    $('.modal-edit').addClass('hide');
    $('.modal-add').addClass('hide');
})

// Nút Xoá học viên
$('.fa-trash-alt').click(function () {
    $('.modal-delete').removeClass('hide');
    let item = $(this).parent().parent();
    $("button").click(
        function () {
            if ($(this).hasClass('confirm')) {
                item.html('');
                Stt();
            }
        }
    )

})

// Tắt Modal xoá item -------------------------------------------------------------------------------
$('.confirm').click(function () {
    $('.modal-delete').addClass('hide');
})

$('.cancel').click(function () {
    $('.modal-delete').addClass('hide');
})

//Mở modal xác nhận xoá item
$('.delete').click(function () {
    $('.modal-edit').addClass('hide');
    $('.modal-delete').removeClass('hide');
})

//Cập nhật thông tin item----------------------------------------------------------------------------


// Nút Update & Tắt/bật thông báo chỉnh sửa thành công
// $(".update").click(function () {
//     $('.modal-edit').addClass('hide');
// })

