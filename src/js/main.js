import $ from 'jquery';

export var MAIN = {
    textareaHolderToggle: function(){
        var $textarea = $("#messText"),
            $placeholder = $('#placeholer');

        if($placeholder.length){
            $placeholder.on("click", function(){
                $(this).fadeOut();
                $textarea.focus();
            });
            $textarea.on('focus', function(){
                $placeholder.fadeOut(200);
            });
            $textarea.on('blur', function(){
                if(!$(this).val().length){
                    $placeholder.fadeIn(200);
                }
            })
        }
    },

    searchInputClear: function(){
        var $input = $('.search__input'),
            $label = $('.search__icon'),
            placeholderValue = $input.attr('placeholder');

        if($input.length){
            $label.on('click', function(){
                $input.attr('placeholder', '');
            });

            $input.on('click', function(){
                $input.attr('placeholder', '');
            });

            $input.on('blur', function(){
                $input.attr('placeholder', placeholderValue);
            })
        }
    },

    hamburgerMenuToggle: function(){
        var $hambBtn = $("#hambBtn"),
            $topMenu = $(".top-menu"),
            isOpen = false;

        $hambBtn.on("click", function () {
            (!isOpen) ? $topMenu.slideDown() : $topMenu.slideUp();
            isOpen = !isOpen;
        });
    },

    sidebarToggle: function(){
        var $asideBtn = $("#asideBtn"),
            $sidebar = $(".header__logo-wrap, .sidebar"),
            isOpen = false;

        $asideBtn.on("click", function () {
            if (!isOpen) {
                $asideBtn.css("transform", "rotate(0)");
                $sidebar.show().animate({"left": "0px"}, 400);
            } else {
                $asideBtn.css("transform", "rotate(180deg)");
                $sidebar.animate({"left": "-340px"}, 400, function () {
                    $(this).hide();
                });
            }
            isOpen = !isOpen;
        });
    },

    init: function(){
        this.textareaHolderToggle();
        this.searchInputClear();
        this.hamburgerMenuToggle();
        this.sidebarToggle();
        // console.log('MAIN init');
    }
};