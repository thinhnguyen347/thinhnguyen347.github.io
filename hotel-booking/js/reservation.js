checkLoginStatus(localStorage.logIn);

// Date Picker
if (localStorage.checkOut == undefined || localStorage.checkIn == undefined || localStorage.checkIn == "" || localStorage.checkOut == "") {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let today = month + "/" + day + "/" + year;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    $("#checkIn, #checkOut").attr("value", today);
    $("#checkIn, #checkOut").datepicker({
        minDate: today,
    });

} else {

    $("#checkIn").attr("value", localStorage.checkIn);
    $("#checkOut").attr("value", localStorage.checkOut);
    // $("#adultNumber").attr("value", localStorage.adult);
    // $("#kidNumber").attr("value", localStorage.child);

}

//See more

$('span.fst-italic').each(function (index) {
    $(this).on('click', function () {
        $('.see-more').eq(index).toggleClass('d-none')
    })
})

// Data of Rate per room in USD

let room_rate_RO = [30, 40, 50, 60, 70, 80, 90, 100]

for (let i = 0; i < room_rate_RO.length; i++) {
    $('.rateRO').eq(i).text(room_rate_RO[i])
    $('.rateBB').eq(i).text(room_rate_RO[i] + 10)

}

// Currency Change

let rooms = $('.no-breakfast');
let rateCode = $('select.title option:selected').attr('code');

$('select#currency').on('change', function () {
    rateCode = $('select.title option:selected').attr('code');
    let unitRate = $('select.title option:selected').val();
    let extraBedRate = 15 * unitRate;

    for (let i = 0; i < rooms.length; i++) {
        $('.eb-rate').eq(i).text(extraBedRate.toLocaleString("en-US"))
        $('.eb-code').eq(i).text(rateCode);

        let rateRO = room_rate_RO[i];
        let rateBB = rateRO + 10;
        rateRO *= unitRate;
        rateBB *= unitRate;

        $('.rateRO').eq(i).text(rateRO.toLocaleString("en-US"));
        $('.rateBB').eq(i).text(rateBB.toLocaleString("en-US"))

    }

    $('.current-currency').each(function (index) {
        $('.current-currency').eq(index).text(rateCode)
    })

})

// Select rate plans
$('input[type=radio].no-breakfast').each(function (index) {
    $('input[type=radio].no-breakfast').eq(index).on('change', function () {
        $('div.no-breakfast').eq(index).removeClass('d-none');
        $('div.breakfast').eq(index).addClass('d-none');

    })
})

$('input[type=radio].breakfast').each(function (index) {

    $('input[type=radio].breakfast').eq(index).on('change', function () {
        $('div.breakfast').eq(index).removeClass('d-none');
        $('div.no-breakfast').eq(index).addClass('d-none');

    })

})

// Update available room

function updateAvailableRoom() {

    for (let i = 0; i < roomInventory.length; i++) {

        if (roomInventory[i] === 0) {
            $('h4.title.py-3').eq(i).append(`<span class="badge fs position-absolute top-10 ms-3 bg-danger">SOLD OUT</span>`)
            $('.checkbox').eq(i).addClass('d-none')
        }

        for (let k = 0; k <= roomInventory[i]; k++) {

            $('.roomNo-RO').eq(i).append(`<option class="font-regular text-center" value="${k}"> ${k} rooms</option>`)
            $('.roomNo-RO').eq(i).find('option[value=0]').attr('selected', 'selected')

            $('.roomNo-BB').eq(i).append(`<option class="font-regular text-center" value="${k}"> ${k} rooms</option>`)
            $('.roomNo-BB').eq(i).find('option[value=0]').attr('selected', 'selected')
        }

    }

    $('input[name=extrabed]:checked').removeAttr('checked','checked');
}

updateAvailableRoom()

// Book-now button on click

let booked_list = [];
let totalSelect = $('select.py-2.px-2')
let item = {};

$('.more-details').on('click', function () {
    for (let i = 0; i <= totalSelect.length; i++) {

        if (parseInt(totalSelect.eq(i).val()) > 0) {
            $('.book-now').removeAttr('disabled')

            // get price
            let index = Math.floor(i / 2)
            let plan = totalSelect.eq(i).attr('plan');
            let target = ".r-" + index + " .rate" + plan
            let price = $(target).text();
            item.price = price;

            // ID
            let roomID = totalSelect.eq(i).attr('roomID');
            item.roomID = roomID;

            // get room name
            let bookedRoom = totalSelect.eq(i).attr('data')
            item.bookedRoom = bookedRoom;

            // Extrabed & Currency
            item.extraBed = $('input[name=extrabed]:checked').length
            item.currency = rateCode;

            // get booked room amount
            item.amount = totalSelect.eq(i).val()

            // Check in-out
            item.checkIn = $('#checkIn').val();
            item.checkOut = $('#checkOut').val();

            booked_list.push(JSON.stringify(item));

            console.log(item)


        }

    }

    updateAvailableRoom();
    
    console.log(booked_list)
})

$('.book-now').on('click', function () {

    localStorage.setItem('bookingList', JSON.stringify(booked_list))
    window.location.href = "payment.html"

})

