highlight();

$(window).on("scroll", function () {
    highlight();
});

function highlight() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    $(".highlight").each(function () {
        var pos = $(this).offset().top;
        if (scroll + height >= pos) {
            $(this).addClass("active");
        }
        console.log(pos);
        console.log(scroll);
    });
}

var current = new Date().getFullYear();
var experience = current - 2011;


console.log(current);
console.log(experience);
$(".experience").html(experience);