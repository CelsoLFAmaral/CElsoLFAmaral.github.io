var slide = document.querySelector("#slide"),
    containerSlide = document.querySelector("#containerSlide"),
    larguraTela = window.innerWidth,
    dataAlvo = new Date("Jan 09, 2030 23:59:00"),
    dataReativo = new Date("Dec 04, 2030 00:59:00"),
    botao = document.querySelectorAll('.button__trigger'),
    extra = document.querySelector(".sectionExtra"),
    modal = document.querySelector(".formulario"),
    li = document.querySelector(".li__slide"),
    bonus = document.querySelectorAll(".sectionExtra__bonus"),
    contadoresTexto = document.querySelectorAll(".countdownTexto"),
    contadores = document.querySelectorAll('.countdown'),
    contadorDias = document.querySelectorAll('.dia'),
    contadorHoras = document.querySelectorAll('.hora'),
    contadorMinutos = document.querySelectorAll('.minuto'),
    contadorSegundos = document.querySelectorAll('.segundo'),
    contador = setInterval(() => {
        var dataAtual = new Date(),
            tempo = dataAlvo - dataAtual,
            dias = Math.floor(tempo / (1000 * 60 * 60 * 24)),
            horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60)),
            segundos = Math.floor((tempo % (1000 * 60)) / 1000);

        if ((tempo < 0)) {
            clearInterval(contador);
            contadorDias.innerHTML = 0;
            contadorHoras.innerHTML = 0;
            contadorMinutos.innerHTML = 0;
            contadorSegundos.innerHTML = 0;
            // extra.setAttribute("style", "display:none");
            // document.formulario.action = "https://clkdmg.site/form/8f53d8c4-acec-4bee-8729-f43042cba37a";
            botao.forEach(e => {
                e.setAttribute("style", "filter: saturate(0);");
                e.innerHTML = "Inscrições Encerradas<br> Entre para a Lista de Espera";
            });
        } else {
            if (dataAtual >= dataReativo) {
                contadores.forEach(e => {
                    e.setAttribute("style", "display:block");
                });
                contadoresTexto.forEach(e => {
                    e.setAttribute("style", "display:block");   
                });
            }
            if (dias < 10) {
                dias = "0" + dias;
            }
            if (horas < 10) {
                horas = "0" + horas;
            }
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
            if (segundos < 10) {
                segundos = "0" + segundos;
            }
            contadorDias.forEach(element => {
                element.textContent = dias
            });
            contadorHoras.forEach(element => {
                element.textContent = horas
            });
            contadorSegundos.forEach(element => {
                element.textContent = segundos
            });
            contadorMinutos.forEach(element => {
                element.textContent = minutos
            });
        }
    }, 1000);
// itens escondidos
$(document).ready(function () {
    $('.collapsible').collapsible();
});
// plus -> minus

function plusMinus(e) {
    var icone = e.querySelector(".fas");
    console.log(e);
    if (e.classList.contains("ativo")) {
        e.classList.remove("ativo");
        icone.classList.remove('fa-minus');
        icone.classList.add('fa-plus');
    } else {
        e.classList.add("ativo");
        icone.classList.add('fa-minus');
        icone.classList.remove('fa-plus');
    }
}