function SoThuTu() {
    let array = $('td.number');
    for (let i = 0; i < array.length; i++) {
        array[i].innerText = i + 1;
    }
}

SoThuTu();

// Nút Thêm học viên
$('.btn-add').click(function () {
    $('.modal-add').removeClass('hide');
})

// Lấy dữ liệu từ form nhập-----------------------------------------------------------------

function NhapData() {

    $('.modal-add').addClass('hide');

    // let new_avatar = $(".input-data #avatar").val();
    let new_name = $('.input-data #name').val();
    let new_dob = $('.input-data #dob').val();
    let new_gender = $('.input-data input[name="gender"]:checked').val();
    let new_address = $('.input-data #DiaChi').val();
    let new_email = $('.input-data #email').val();
    let new_phone = $('.input-data #sdt').val();

    $('table > tbody').append('<tr><td class="number"></td><td class="avatar"><img src="img/student4.png" alt="student-image" width="150px"></td><td class="name">' + new_name + '</td><td class="dob">' + new_dob + '</td><td class="gender">' + new_gender + '</td>' +
        '<td class="address">' + new_address + '</td><td class="email">' + new_email + '</td><td class="phone">' + new_phone + '</td><td><i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;<i class="far fa-trash-alt"></i></td></tr>'
    )

    SoThuTu()
}

// Nút Sửa thông tin học viên--------------------------------------------------------------------
let row_index;
$('.fa-edit').click(function () {
    $('.modal-edit').removeClass('hide');

    let item = $(this).parent().parent();
    index = item.index();
    row_index = index;
    // Lấy avatar
    let current_avatar = item.find('img').attr('src');
    $('.edit-data img').attr('src', current_avatar);

    // Lấy thông tin tên
    let current_name = item.find('.name').text();
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

function updateData() {

    let new_name = $('.edit-data input#name').val();
    let new_dob = $('.edit-data #dob').val();
    let new_gender = $('.edit-data input[name="gender"]:checked').val();
    let new_address = $('.edit-data #DiaChi').val();
    let new_email = $('.edit-data #email').val();
    let new_phone = $('.edit-data #sdt').val();

    $('tr').eq(row_index).find('td.name').text(new_name);
    $('tr').eq(row_index).find('td.dob').text(new_dob);
    $('tr').eq(row_index).find('td.gender').text(new_gender);
    $('tr').eq(row_index).find('td.address').text(new_address);
    $('tr').eq(row_index).find('td.email').text(new_email);
    $('tr').eq(row_index).find('td.phone').text(new_phone);

}

$('.update').click(function () {
    updateData();
    $('.modal-edit').addClass('hide');
})


// Tắt Modal thêm/edit thông tin
$('.fa-times').click(function () {
    $('.modal-edit').addClass('hide');
    $('.modal-add').addClass('hide');
    row_index = 0;
})

// Xoá học viên khi ấn vào icon thùng rác
$('.fa-trash-alt').click(function () {
    $('.modal-delete').removeClass('hide');
    let item = $(this).parent().parent();
    $("button").click(
        function () {
            if ($(this).hasClass('confirm')) {
                item.html('');
                SoThuTu();
            }
        }
    )
})

// Xoá học viên khi ấn vào nút Xoá

$('.confirm').click(function(){
    $('tr').eq(row_index).remove();
    SoThuTu();
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

// Nút Update & Tắt/bật thông báo chỉnh sửa thành công
// $(".update").click(function () {
//     $('.modal-edit').addClass('hide');
// })

