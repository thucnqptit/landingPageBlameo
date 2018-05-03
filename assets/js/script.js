

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
        $("#myBtn").show();
    } else {
        $("#myBtn").hide();
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function subscribe() {
    let email = $("#email").val();
    if(email){
        if(validateEmail(email)){
            alert(email);
        }
        else{
            alert("Please enter your email again!");
        }
    }
    else{
        alert("You should enter your email before!");
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
    // $(".slider").not('.slick-initialized').slick({
    //     prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/pre_arr.png'>",
    //     nextArrow:"<img class='a-right control-c next slick-next' style='transform: scaleX(-1);-webkit-transform: scaleX(-1)' src='../img/pre_arr.png'>"
    // });

}


