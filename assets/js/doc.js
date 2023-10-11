
// nav-bar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}

// preloader---------
setTimeout(() => {
    document.getElementById("preloder").classList.add("opacity-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 1000);



// back-to-top=============
window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("back")
    if (window.scrollY > 500) {
        backtotop.style.display = 'block'
    }
    else { backtotop.style.display = 'none' }
}
)

