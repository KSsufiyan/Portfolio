$('.mouse-pos-list-image-wrap a').on('mouseenter', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
});
$('.mouse-pos-list-image-wrap a').on('mouseleave', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
});
$('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseenter', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
});
$('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseleave', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
});
$('main').on('mousedown', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").addClass('pressed');
});
$('main').on('mouseup', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").removeClass('pressed');
});

$('.mouse-pos-list-image-wrap li.visible').on('mouseenter', function() {
    var $elements = $(".mouse-pos-list-image-wrap li.visible");
    var index = $elements.index($(this));
    var count = $(".mouse-pos-list-image li.visible").length;

    if ($(".float-image-wrap")) {
        gsap.to($(".float-image-wrap"), {
            y: (index * 100) / (count * -1) + "%",
            duration: .6,
            ease: Power2.easeInOut
        });
    }
    $(".mouse-pos-list-image.active .mouse-pos-list-image-bounce").addClass("active").delay(400).queue(function(next) {
        $(this).removeClass("active");
        next();
    });
});

$('.archive-work-grid li').on('mouseenter', function() {
    $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next) {
        $(this).removeClass("hover");
        next();
    });
});