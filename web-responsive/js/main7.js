
if (window.matchMedia && window.matchMedia('(max-width: 600px)').matches) {
    $("div.show-menu").addClass("hide");
    $("img").click(function () {
        if ($("div.show-menu").hasClass("hide")) {
            $("div.show-menu").removeClass("hide")
        } else { $("div.show-menu").addClass("hide") }
    })
}



