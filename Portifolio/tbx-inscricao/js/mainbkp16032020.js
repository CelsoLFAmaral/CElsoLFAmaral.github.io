// botao colapisado
$(document).ready(function () {
    $('.collapsible').collapsible();
});

// Slider

$(document).ready(function () {
    $('.mentores').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        // dots: true
    });
});


var dataAtualContador = new Date();
console.log(dataAtualContador);

if (dataAtualContador <= new Date("09/10/2019 23:59:59")) {
    var dataAlvoContador = new Date("09/10/2019 23:59:59");
    document.getElementById('faltam').style.display = "block";
    document.getElementById('mindpro').style.display = "block";
    // console.log("mindpro");

} else {
    var dataAlvoContador = new Date("09/12/2019 23:59:59");
    document.getElementById('chamada').style.display = "block";
    document.getElementById('faltam').style.display = "block";

    // console.log("chamada");

}
var x = setInterval(function () {
    var dataAtualContador = new Date().getTime();

    var distance = dataAlvoContador - dataAtualContador;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("dias").innerHTML = days;
    document.getElementById("dias2").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("horas2").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("minutos2").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;
    document.getElementById("segundos2").innerHTML = seconds;
    if (dataAtualContador > new Date("09/12/2019 23:59:59")) {
        document.getElementById('chamada').style.display = "block";
        var botao = document.querySelectorAll('.button');
        for (let i = 1; i < botao.length; i++) {
            botao[i].innerHTML = "INSCRICÕES ENCERRADAS";
            botao[i].classList.add('encerrado');
        }
        document.getElementById("dias").innerHTML = "0";
        document.getElementById("horas").innerHTML = "0";
        document.getElementById("minutos").innerHTML = "0";
        document.getElementById("segundos").innerHTML = "0";
        document.getElementById("dias2").innerHTML = "0";
        document.getElementById("horas2").innerHTML = "0";
        document.getElementById("minutos2").innerHTML = "0";
        document.getElementById("segundos2").innerHTML = "0";
        console.log("encerrado");

    }
}, 1000);

function closeFaixa() {
    document.getElementById('faixaTelefone').style.display = "none";
    document.getElementById('corpoFaixa').style.display = "none";
}