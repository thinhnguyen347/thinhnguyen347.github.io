let logIn = localStorage.logIn;
checkLoginStatus(logIn);

// Date Picker
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = month + "/" + day + "/" + year;

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

if (localStorage.checkOut == undefined || localStorage.checkIn == undefined || localStorage.checkIn == "" || localStorage.checkOut == "") {

    $("#checkIn, #checkOut").attr("value", today);
    $("#checkIn, #checkOut").datepicker({
        minDate: today,
    });

} else {

    $("#checkIn").attr("value", localStorage.checkIn);
    $("#checkOut").attr("value", localStorage.checkOut);
    $("#checkIn, #checkOut").datepicker({
        minDate: today,
    });
}

let check_in = $('#checkIn').val(), check_out = $('#checkOut').val();

$("#checkOut").datepicker({
    minDate: new Date(check_in),
});

$('#checkIn').on('change', function(){
    check_in = $('#checkIn').val();
    $('#checkOut').val(check_in);
})

$('#checkOut').on('change', function(){
    check_out = $('#checkOut').val()
})

let night, In = new Date(check_in), Out = new Date(check_out);
function Night(a, b) {
    let t2 = b.getTime();
    let t1 = a.getTime();
    night = parseInt((t2 - t1) / (24 * 3600 * 1000));
    // console.log(night)
}

Night(In, Out);

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
            $('div.no-breakfast').eq(i).addClass('d-none');
            $('div.breakfast').eq(i).addClass('d-none');
        }

        for (let k = 0; k <= roomInventory[i]; k++) {

            $('.roomNo-RO').eq(i).append(`<option class="font-regular text-center" value="${k}"> ${k} rooms</option>`)
            $('.roomNo-RO').eq(i).find('option[value=0]').attr('selected', 'selected')

            $('.roomNo-BB').eq(i).append(`<option class="font-regular text-center" value="${k}"> ${k} rooms</option>`)
            $('.roomNo-BB').eq(i).find('option[value=0]').attr('selected', 'selected')
        }

    }

    $('input[name=extrabed]:checked').removeAttr('checked', 'checked');
}

updateAvailableRoom()

function UpdateAvailabilityAfterAdded() {
    // Update available room after added to booked list

    for (let i = 0; i < roomInventory.length; i++) {

        for (let k = 0; k <= roomInventory[i]; k++) {

            $('.roomNo-RO').eq(i).empty()
            $('.roomNo-BB').eq(i).empty()
        }

    }

    updateAvailableRoom();
}

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
            let extra_bed = $('input[name=extrabed]:checked').length;
            item.extraBed = extra_bed;
            item.exchangeRate = $('input[name=extrabed]:checked').val();
            item.currency = rateCode;

            // get booked amount
            let amount = totalSelect.eq(i).val();
            item.amount = amount;

            // Check in-out
            item.checkIn = check_in;
            item.checkOut = check_out;

            // night
            item.night = night;

            // display added rooms
            $('button.more-details').before(function () {

                if (index === 7) {
                    return `<div class="p-2 rounded mb-2 mb-lg-4">
                    <p class="title p-0 m-0 room-name ">${bookedRoom}</p>
                    <p class="fs title text-end">${amount} room(s)</p>
                    <p class="fs p-0 m-0 text-center"> ${check_in} - ${check_out}</p>
                    <p class="fs p-0 m-0 text-center"> 4 adults & ${extra_bed} extra person</p></div>`

                } else {
                    return `<div class="added-item p-2 rounded mb-2 mb-lg-4">
                    <p class="title p-0 m-0 room-name ">${bookedRoom}</p>
                    <p class="fs title text-end">${amount} room(s)</p>
                    <p class="fs p-0 m-0 text-center"> ${check_in} - ${check_out}</p>
                    <p class="fs p-0 m-0 text-center"> 2 adults & ${extra_bed} extra person</p></div>`
                }
            })

            // Minus available room
            roomInventory[index] -= amount;

            booked_list.push(JSON.stringify(item));

        }

    }

    UpdateAvailabilityAfterAdded();

    // console.log(booked_list)
})

$('.book-now').on('click', function () {

    localStorage.setItem('bookingList', JSON.stringify(booked_list))
    window.location.href = "payment.html"

})

