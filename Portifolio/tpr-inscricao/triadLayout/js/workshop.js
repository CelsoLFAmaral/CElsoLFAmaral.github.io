var dataAlvo1 = new Date('11/25/2019 06:29:59'),
    dataAlvo2 = new Date('11/27/2019 06:29:59'),
    dataAlvo3 = new Date('11/29/2019 06:29:59'),
    dataAlvo4 = new Date('12/03/2019 06:29:00'),
    
    video = document.querySelector("#videoPlayer"),
    caixa = document.querySelector("#caixaVideo"),

    enunciado1 = document.querySelector(".header__enunciado--1"),
    thumbs1 = document.querySelector('.header__thumbs--1'),
    video1 = thumbs1.querySelector(".header__link"),

    enunciado2 = document.querySelector('.header__enunciado--2'),
    thumbs2 = document.querySelector('.header__thumbs--2'),
    video2 = thumbs2.querySelector(".header__link"),

    enunciado3 = document.querySelector('.header__enunciado--3'),
    thumbs3 = document.querySelector('.header__thumbs--3'),
    video3 = thumbs3.querySelector(".header__link");


setInterval(() => {
    var dataAtual = new Date;
    if (dataAtual >= dataAlvo4) {
        // window.location = "--REDIRECT AQUI";
    }
    if (dataAtual >= dataAlvo3) {
        video3.setAttribute("style", "pointer-events: none; cursor: none;");
        enunciado3.setAttribute("style", "pointer-events: none; cursor: none;");
        thumbs3.setAttribute("style", "pointer-events: none; cursor: none;filter: saturate(100%)");
        thumbs3.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado3.querySelector(".enunciado__aviso").textContent = "Liberado";
        caixa.querySelector('img').setAttribute("style", "display: none");
        caixa.querySelector('.header__play').setAttribute("style", "display: none");
        video.setAttribute("style", "display: block");
        caixa.setAttribute("style", "filter: saturate(100%)");

    }
    if (dataAtual >= dataAlvo2) {
        thumbs2.setAttribute("style", "pointer-events: pointer; cursor: pointer;filter: saturate(100%)");
        thumbs2.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado2.querySelector(".enunciado__aviso").textContent = "Liberado";
        video2.setAttribute("href", "../cpl2-objetivo-mais-importante");
        enunciado2.setAttribute("href", "../cpl2-objetivo-mais-importante");

    }
    if (dataAtual >= dataAlvo1) {
        thumbs1.setAttribute("style", "pointer-events: pointer; cursor: pointer;filter: saturate(100%)");
        thumbs1.querySelector("i").setAttribute("class", "fas fa-play");
        enunciado1.querySelector(".enunciado__aviso").textContent = "Liberado";
        video1.setAttribute("href", "../cpl1-promessas-em-realizacoes");
        enunciado1.setAttribute("href", "../cpl1-promessas-em-realizacoes");
    }
}, 1);