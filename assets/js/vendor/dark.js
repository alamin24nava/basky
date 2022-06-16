// switch btn(dark mode)
$('.switch-btn').on('click', function() {
    $(this).toggleClass('d-btn');
    $('body').toggleClass('dark');
});