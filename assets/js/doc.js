<<<<<<< HEAD
=======
// nav-bar
>>>>>>> 801843f859a83701f2aba20b2946d88fa74dacc5
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
<<<<<<< HEAD
}
=======
}


$('.simple-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 3000,
    prevArrow: ".prev",
    nextArrow: ".next",
    pauseOnHover: false,
    pauseOnfocus: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 0,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                cssEase: 'linear',
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slickSlider1').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.slickSlider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slickSlider1',
    dots: true,
    autoplay: true,
    speed: 300,
    arrows: false,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
});

>>>>>>> 801843f859a83701f2aba20b2946d88fa74dacc5
