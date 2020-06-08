var dataAlvo1 = new Date('03/02/2020 06:29:59'),
    dataAlvo2 = new Date('03/04/2020 06:29:59'),
    dataAlvo3 = new Date('03/06/2020 06:29:59'),
    dataAlvo4 = new Date('03/10/2020 06:29:00'),
    video = document.querySelector("#videoPlayer"),
    caixa = document.querySelector("#caixaVideo"),
    video1 = document.getElementsByClassName(".link1"),
    enunciado1 = document.getElementsByClassName(".enunciado1"),
    thumbs1 = document.getElementsByClassName('.thumbs1'),
    video2 = document.querySelector('.link2'),
    enunciado2 = document.querySelector('.enunciado2'),
    thumbs2 = document.querySelector('.thumbs2'),
    video3 = document.querySelector('.link3'),
    enunciado3 = document.querySelector('.enunciado3'),
    thumbs3 = document.querySelector('.thumbs3');
    video4 = document.querySelector('.link4'),
    enunciado4 = document.querySelector('.enunciado4'),
    thumbs4 = document.querySelector('.thumbs4');
    var dataAtual = new Date;

    // if (dataAtual >= dataAlvo1) {
        // console.log("foi");
        
        thumbs1.setAttribute("style", "pointer-events: none; cursor: none;filter: saturate(100%)");
        thumbs1.getElementsByTagName("i").setAttribute("class", "fas fa-play");
        enunciado1.getElementsByClassName(".enunciado__aviso").textContent = "Liberado";
        caixa.getElementsByTagName('img').setAttribute("style", "display: none");
        caixa.getElementsByClassName('.header__play').setAttribute("style", "display: none");
        video.setAttribute("style", "display: block");
        caixa.setAttribute("style", "filter: saturate(100%)");
    // }
setInterval(() => {
    var dataAtual = new Date;
    
    if (dataAtual >= dataAlvo4) {
        video4.setAttribute("href", "https://clkdmg.site/lead/8ff75694-ab7d-40e1-a7b4-60a6cad2cd4b");
        enunciado4.setAttribute("href", "https://clkdmg.site/lead/8ff75694-ab7d-40e1-a7b4-60a6cad2cd4b");
        video4.setAttribute("style", "pointer-events: pointer; cursor: pointer;");
        enunciado4.setAttribute("style", "pointer-events: pointer; cursor: pointer;");
        thumbs4.setAttribute("style", "pointer-events: pointer; cursor: pointer;filter: saturate(100%)");
        thumbs4.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado4.querySelector(".enunciado__aviso").textContent = "Liberado";
    }
    if (dataAtual >= dataAlvo3) {
        video3.setAttribute("href", "../video3-equilibrio-resultado");
        enunciado3.setAttribute("href", "../video3-equilibrio-resultado");
        video3.setAttribute("style", "pointer-events: pointer; cursor: pointer;");
        enunciado3.setAttribute("style", "pointer-events: pointer; cursor: pointer;");
        thumbs3.setAttribute("style", "pointer-events: pointer; cursor: pointer;filter: saturate(100%)");
        thumbs3.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado3.querySelector(".enunciado__aviso").textContent = "Liberado";
    }
    if (dataAtual >= dataAlvo2) {
        video2.setAttribute("href", "../video2-verdadeiro-foco");
        enunciado2.setAttribute("href", "../video2-verdadeiro-foco");
        thumbs2.setAttribute("style", "filter: saturate(100%)");
        thumbs2.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado2.querySelector(".enunciado__aviso").textContent = "Liberado";
    }

}, 1000);


//Modal Para Formulário

// Setando Formato
$("#modalForm").iziModal({
    width: '500px',
    radius: '30px'
});

$(document).on('click', '.button__trigger', function (event) {
    event.preventDefault();
    $('#modalForm').iziModal('open', {
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown'
    });
});

function ExibeDarkRoom(srcdarkroom) {
    document.getElementById('darkRoom__iframe').src = srcdarkroom;
    document.getElementById('darkRoom').style.display = 'flex';
}

function EscondeDarkRoom() {
    document.getElementById('darkRoom__iframe').src = "";
    document.getElementById('darkRoom').style.display = 'none';
}