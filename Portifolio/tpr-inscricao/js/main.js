contadorBasico(
    "Mar 12 2020 23:59:59", //Primeira data alvo
    "", //Reativar, se não for deixa ""
    "", //Segunda data alvo, se não for reativar deixa ""
    "",
    "Mar 11 2020 06:59:59" //Data de ativação
);

var dataAlvo = new Date("Mar 11 2020 06:59:59").getTime();
var dataAtual = new Date().getTime();
var atencao = document.querySelector(".sectionAviso");

$(document).ready(function () {
    $('.collapsible').collapsible();
});

// videos comentarios
function ExibeDarkRoom(srcdarkroom) {
    document.getElementById('darkRoom__iframe').src = srcdarkroom;
    apareceVideo('darkRoom');
}


function EscondeDarkRoom() {
    desapareceVideo('darkRoom')
    document.getElementById('darkRoom__iframe').src = "";
}

function apareceVideo(item) {
    section = document.getElementById(item);

    setTimeout(function () {
        section.classList.add('stepAparece-1');
        section.classList.remove('stepDesaparece-2');
        section.classList.remove('stepDesaparece-1');

        setTimeout(function () {
            section.classList.add('stepAparece-2');
        }, 300);
    }, 200);

}

function desapareceVideo(item) {
    section = document.getElementById(item);

    setTimeout(function () {
        section.classList.remove('stepAparece-2');

        setTimeout(function () {
            section.classList.add('stepDesaparece-2');
            section.classList.remove('stepAparece-2');
            section.classList.remove('stepAparece-1');
        }, 200);

        section.classList.remove('stepDesaparece-2');
    }, 100);
}

var windowWidth = window.innerWidth;

if (windowWidth > 900) {
    var collapsibleChristian = document.querySelector(".sectionChristian__collapsible");
    var collapsibleChristianBody = document.querySelector(".sectionChristian__collapsible .collapsible-body");
    var collapsibleChristianHeader = document.querySelector(".sectionChristian__collapsible .collapsible-header");
    collapsibleChristian.classList.remove("collapsible");
    collapsibleChristianBody.classList.remove("collapsible-body");
    collapsibleChristianHeader.remove("collapsible-header");
}


var verButton = document.querySelectorAll(".collapsible--verMais .collapsible-header");

verButton.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerText == "VER MAIS") {
            e.children[0].innerHTML = "MENOS"
        } else {
            e.children[0].innerHTML = "MAIS"
        }
    });
});

if (dataAtual >= dataAlvo) {
    console.log(atencao);
    
    atencao.setAttribute("style", "display:block;")
}