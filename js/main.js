// Descer devagar
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex',
                            '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    var header = document.querySelector('.header'),
    main = document.querySelector('.main'),
    nav = document.querySelector('.nav'),
    menu = document.querySelector('#menu'),
    botao = document.querySelector('.nav__hamburguer'),
    botaoDesktop = document.querySelector('.header__hamburguer'),
    botaoClose = document.querySelector('.nav__close'),
    link = document.querySelectorAll('.nav__link'),
    competencia = document.querySelectorAll('.sectionCompetencias__tecnicas');


botao.addEventListener('click', function () {
    if (menu.className === "nav__menu") {
        console.log(menu);
        
        menu.classList.add("responsive");
        console.log('foi');
        
    } else {
        menu.classList.remove("responsive");
    }
});

botaoDesktop.addEventListener('click', function () {
    nav.classList.add("responsive");
    header.style.marginLeft = "250px";
    main.style.marginLeft = "250px";
    this.style.display = "none";

});
botaoClose.addEventListener('click', function () {
    nav.classList.remove("responsive");
    header.style.marginLeft = "0";
    main.style.marginLeft = "0";
    botaoDesktop.style.display = "block";

})

var windowWidth = window.innerWidth;
if(windowWidth <= 1100){
    link.forEach(element => {
        element.addEventListener('click', function () {
            nav.classList.remove("responsive");
            header.style.marginLeft = "0";
            main.style.marginLeft = "0";
            botaoDesktop.style.display = "block";
    
        })
    });
}

$('.fab').hover(
    $(this).addClass("show")
);