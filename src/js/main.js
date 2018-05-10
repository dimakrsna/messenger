$(function () {

    //Инициализация скролбара
    var sidebar = $(".clients"),
        dialogue = $(".dialogue");

    // Ps.initialize(sidebar[0]);
    // Ps.initialize(dialogue[0]);


    //Авторесайз для textarea
    (function () {

        console.log($('#messText'))
        autosize($("#messText")[0]);
    })();


    //Sidebar показываем/скрываем
    (function () {
        var asideBtn = $("#asideBtn"),
            isOpen = false,
            sidebar = $(".header__logo-wrap, .sidebar");

        asideBtn.on("click", function () {
            if (!isOpen) {
                asideBtn.css("transform", "rotate(0)");
                sidebar.show().animate({"left": "0px"}, 400);
            } else {
                asideBtn.css("transform", "rotate(180deg)");
                sidebar.animate({"left": "-340px"}, 400, function () {
                    $(this).hide();
                });
            }
            isOpen = !isOpen;
        });

    })();

    //Hamburger показываем/скрываем
    (function () {
        var hambBtn = $("#hambBtn"),
            topMenu = $(".top-menu"),
            isOpen = false;

        hambBtn.on("click", function () {
            (!isOpen) ? topMenu.slideDown() : topMenu.slideUp();
            isOpen = !isOpen;
        });
    })();

});