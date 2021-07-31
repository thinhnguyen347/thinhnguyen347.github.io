checkLoginStatus(localStorage.logIn);

let bookingList = JSON.parse(localStorage.bookingList)

let extraBedNumber = 0, exchangeRate = 0, extraBedPrice = 0, roomcharge = 0

function renderData() {

    for (let i = 0; i < bookingList.length; i++) {
        let item = JSON.parse(bookingList[i])

        $('nav[aria-label=breadcrumb]').append(
            `<div class="booking-info bg container-fluid rounded mt-4">
      <h5 class="title pt-3 ps-3">Room ${i + 1} : ${item.bookedRoom}</h5>
      <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 text-break py-3">

        <div class="col-12 col-md-6 col-lg-5 px-0">
          <p class="px-3 fw-bold font-condense">Check-in date: <span id="checkInDate"> ${item.checkIn}</span></p>
          <p class="px-3 fw-bold font-condense">Check-out date: <span id="checkOutDate"> ${item.checkOut}</span></p>
          <p class="px-3 fw-bold font-condense">Room rate: <span id="roomRate"> ${item.price}</span> <span id="currency"> ${item.currency} </span> /night x <span id="nights"> 1 </span> nights</p>
        </div>

        <div class="col-12 col-md-6 col-lg-5 px-0">
          <p class="px-3 fw-bold font-condense">Adults: <span id="adult"> ${item.adult} </span></p>
          <p class="px-3 fw-bold font-condense">Childs: <span id="child"> ${item.kid}</span></p>
          <p class="px-3 fw-bold font-condense">Extra-bed: <span id="extraBedNumber"> ${item.extraBed}</span></p>
        </div>

        <div class="col-12 col-md-6 col-lg-2 px-0">
          <div class="container-fluid d-flex justify-content-center">
            <p class="delete btn py-1">Delete</p>
          </div>          
        </div>
      </div>
    </div>`
        )

        extraBedNumber += parseInt(item.extraBed);
        exchangeRate = parseFloat(item.exchangeRate);
        roomcharge += parseInt(item.price);
    }

    $('#roomCharge').val(roomcharge);

    extraBedPrice = extraBedNumber * 15 * exchangeRate;

    $('#extraBedPrice').val(1);
}


renderData();