$(function() {

    //Инициализация скролбара
    var sidebar = $(".clients");
    var dialogue = $(".dialogue");

    // Ps.initialize(sidebar[0]);
    // Ps.initialize(dialogue[0]);


    //Inbox - показываем/скрываем сообщение
    (function(){

        var elems = $(".top-menu__item--inbox, .inbox");
        var inbox;
        var timer;

        elems.on("mouseenter", function(e){
            inbox = $(".inbox");
            inbox.slideDown();
            window.clearTimeout(timer);
        });

        elems.on("mouseleave", function(){
            timer = window.setTimeout(function(){
                inbox.slideUp();
            }, 300);
        })

    })();


    //Плейсхолдер при клике на #messText
    (function(){
        var textarea = $("#messText");
        var placeholder = $('#placeholer');

        placeholder.on("click", function(){
            $(this).fadeOut();
            textarea.focus();
        })

        textarea.focus(function(){
            placeholder.fadeOut(200);
        });

        textarea.blur(function(){
            var val = $(this).val();
            if(!val)
                placeholder.fadeIn(200);
        });

    })();


    //Авторесайз для textarea
    (function(){
        // autosize($("#messText")[0]);
    })();


    //Sidebar показываем/скрываем
    (function(){
        var asideBtn = $("#asideBtn");
        var isOpen = false;
        var sidebar = $(".header__logo-wrap, .sidebar");

        asideBtn.on("click", function(){
            if(!isOpen){
                asideBtn.css("transform", "rotate(0)");
                sidebar.show().animate({"left" : "0px"}, 400);
                isOpen = true;
            } else {
                asideBtn.css("transform", "rotate(180deg)");
                sidebar.animate({"left" : "-340px"}, 400, function(){
                    $(this).hide();
                });
                isOpen = false;
            }
        });

    })();

    //Hamburger показываем/скрываем
    (function(){
        var hambBtn = $("#hambBtn");
        var topMenu = $(".top-menu");
        var isOpen = false;

        hambBtn.on("click", function(){
            if(!isOpen){
                topMenu.slideDown();
                isOpen = true;
            }	else {
                topMenu.slideUp();
                isOpen = false;
            }

        });
    })();


    //Retina-img
    var retina = window.devicePixelRatio > 1 ? true : false;
    if(retina) {
        $('img').each( function(){
            // $(this).attr('src', $(this).attr('src').replace('.jpg', '@2x.jpg'));
        })
    }



});