

$(document).ready(function () {
    function goToByScroll(href) {
        $('html,body').animate({
            scrollTop: $(href).offset().top
        },
            'slow');
    }

    $(".link").click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr('href'));
    });
    createSlick();
    window.onscroll = function () { scrollFunction() };
});
function scrollFunction() {
    var tmp = $("#contact").offset().top;
    if (document.body.scrollTop > tmp  || document.documentElement.scrollTop > tmp ) {
        $("#myBtn").show();console.log(tmp);
    } else {
        $("#myBtn").hide();console.log("no",tmp);
    }
}
function createSlick() {

    $(".slider").not('.slick-initialized').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

}


