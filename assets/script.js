Splitting();

$('.nav-link').on('click', function(){
    var active = $('.active');

    if (active.length > 0) {
        $(active[0]).removeClass('active');
    }

    $(this).addClass('active');

});

