// Nút Thêm học viên
$('.btn-add').click(function () {
    $('.modal-add').removeClass('hide');
})

// Tắt Modal thêm học sinh
$('.fa-times').click(function () {
    $('.modal-add').addClass('hide');
})

// Lấy dữ liệu từ form nhập
$('button.submit').click(function () {
    $('.item-list').append(
        '<div class="item">' +
        '<div class="icon"><i class="far fa-edit"></i></div>' +
        '<div class="avatar">' +
        '<img src="img/student10.png" alt="student-image">' +
        '</div>' +
        '<div class="details">' +
        '                    <h3 class="HoTen">Yaya Urassaya</h3>' +
        '<ul>' +
        '                        <li>Ngày sinh: <span class="NgaySinh">18/03/1993</span></li>' +
        '                        <li>Giới tính: <span class="GioiTinh">Nữ</span></li>' +
        '                        <li>Địa chỉ: <span class="DiaChi">Pattaya, Thái Lan</span></li>' +
        '< li > E - mail: <span class="Email">123@gmail.com</span></li >' +
        '<li>Số điện thoại: <span class="sdt">04 1900 8090</span></li>' +
        '                    </ul >' +
        '</div >' +
        '</div >'
    )
})

// Nút Sửa/Xoá học viên

$('.fa-edit').click(function () {
    $('.modal-edit').removeClass('hide');

    // Lấy info của item được chọn:
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



// Tắt Modal edit thông tin
$('.fa-times').click(function () {
    $('.modal-edit').addClass('hide');
})