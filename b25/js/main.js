

    //---------------------------------POPOVERS--------------------------------------------------
    $(".left").addClass("hide");
    $(".btn-primary").click(function () {
        $(".left").toggleClass("hide");
        // $(".top").addClass("hide");
        // $(".bottom").addClass("hide");
        // $(".right").addClass("hide");
    })

    $(".top").addClass("hide");
    $(".btn-secondary").click(function () {
        $(".top").toggleClass("hide");
        // $(".left").addClass("hide");
        // $(".bottom").addClass("hide");
        // $(".right").addClass("hide");
    })

    $(".bottom").addClass("hide");
    $(".btn-success").click(function () {
        $(".bottom").toggleClass("hide");
        // $(".left").addClass("hide");
        // $(".top").addClass("hide");
        // $(".right").addClass("hide");
    })

    $(".right").addClass("hide");
    $(".btn-danger").click(function () {
        $(".right").toggleClass("hide");
        // $(".top").addClass("hide");
        // $(".bottom").addClass("hide");
        // $(".left").addClass("hide");
    })

    // ----------------------------------TABS------------------------------------
    $(".nav-link").click(function () {

        $(".nav-link").removeClass("active");
        $(this).toggleClass("active");

        let a = $(".active").text();
        if (a == "Facebook") {
            $(".facebook").removeClass("hide")
        } else {
            $(".facebook").addClass("hide");
            $(this).children().removeClass("active");
        }
        if (a == "Twitter") {
            $(".twitter").removeClass("hide")
        } else {
            $(".twitter").addClass("hide");
            $(this).children().removeClass("active");
        }
        if (a == "Youtube") {
            $(".youtube").removeClass("hide");
        } else {
            $(".youtube").addClass("hide");
            $(this).children().removeClass("active");
        }
    })

    //----------------------------------ARCORDION----------------------------------

    $("#ending").click(function () {
        $("div#ending").toggleClass("rounded-bottom");
    })

    $(".content-box").addClass("hide");

    $(".title-box").click(function () {

        let index = $(".title-box").index(this);

        $(".content-box").eq(index).toggleClass("hide");
        $(".content-box").eq(index).siblings("div.content-box").addClass("hide");
        $(".content-box").eq(index).slideDown("slow");
        let hide = $("div.content-box").hasClass("hide");
        if (hide == false) {
            $(this).neighbor().slideUp("slow");
        }
        // $(this).next(".content-box").toggleClass("hide");
        // $(this).next(".content-box").siblings(".content-box").addClass("hide");
        // $(this).children("div:nth-child(2)").addClass("chevron-down")
    })

      