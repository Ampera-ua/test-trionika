
$(function () {

    var body = $('body'),
        menu = $('.menu_line'),
        closeIcon = $('.nav__link_close'),
        section = $('.section');

    menu.on('click', toggle);
    closeIcon.on('click', toggle);

    section.on('click', function () {
        if (body.is('.open-nav')) close();
    });

    function toggle() {
        body.is('.open-nav')
            ? close()
            : open();
    }

    function close() {
        body.removeClass('open-nav').addClass('close-nav');
    }
    function open(){
        body.removeClass('close-nav').addClass('open-nav');
    }
});
