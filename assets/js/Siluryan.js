$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 6, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel (só se existir o markup antigo com vários itens)
var $owlPortfolio = $('#owl-portfolio');
if ($owlPortfolio.length) {
    $owlPortfolio.owlCarousel({
        center: true,
        margin: 30,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 3, nav: false },
            1000: { items: 4, nav: false, loop: false }
        }
    });
}

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})