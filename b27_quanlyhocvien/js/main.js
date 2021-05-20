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
    $('.item-list').append(
        '<div class="item">' +
        '<div class="icon"><i class="far fa-edit"></i></div>' +
        '<div class="avatar">' +
        '<img src="img/student10.png" alt="student-image">' +
        '</div>' +
        '<div class="details">' +
        '<h3 class="HoTen">' + new_name + '</h3>' +
        '<ul>' +
        '<li>Ngày sinh: <span class="NgaySinh">' + new_dob + '</span></li>' +
        '<li>Giới tính: <span class="GioiTinh">' + new_gender + '</span></li>' +
        '<li>Địa chỉ: <span class="DiaChi">' + new_address + '</span></li>' +
        '<li> E - mail: <span class="Email">' + new_email + '</span></li >' +
        '<li>Số điện thoại: <span class="sdt">' + new_phone + '</span></li>' +
        '</ul >' +
        '</div >' +
        '</div >'
    )
})

// Nút Sửa/Xoá học viên--------------------------------------------------------------------

$('.fa-edit').click(function () {
    $('.modal-edit').removeClass('hide');

    let item = $(this).parent().parent();

    // Lấy avatar
    let current_avatar = item.find('.avatar img').attr('src');
    $('.edit-data img').attr('src', current_avatar);

    // Lấy thông tin tên
    let current_name = item.find('.details h3').text();
    $('.edit-data #name').val(current_name);

    // Lấy thông tin ngày sinh
    let current_dob = item.find('.NgaySinh').text();
    $('.edit-data #dob').val(current_dob);

    // Lấy thông tin giới tính
    let gender = item.find('.GioiTinh').text();
    if (gender == "Nam") {
        $('.edit-data #male').attr('checked', 'checked');
    } else if (gender == "Nữ") {
        $('.edit-data #female').attr('checked', 'checked');
    } else {
        $('.edit-data #other').attr('checked', 'checked');
    }

    // Lấy thông tin địa chỉ
    let current_address = item.find('.DiaChi').text();
    $('.edit-data #DiaChi').val(current_address);

    // Lấy thông tin e-mail
    let current_email = item.find('.Email').text();
    $('.edit-data #email').val(current_email);

    // Lấy thông tin sdt
    let current_phone = item.find('.sdt').text();
    $('.edit-data #sdt').val(current_phone);
})


// Tắt Modal thêm/edit thông tin
$('.fa-times').click(function () {
    $('.modal-edit').addClass('hide');
    $('.modal-add').addClass('hide');
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

