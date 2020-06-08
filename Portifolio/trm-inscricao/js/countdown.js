function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = "data=" + d.toUTCString() + ";" + expires + ";path=/";
    console.log(document.cookie);

}

function checkCookie() {
    var expires = getCookie("data");
    
    if (expires != "") {
        console.log('foi');
        
        return expires;
    } else {
        setCookie(4);
        var d = new Date();
        console.log('n foi');
        return d.setTime(d.getTime() + (4 * 24 * 60 * 60 * 1000));

    }
}

var dataAtualContador = new Date();

var dataAlvoContador = new Date(checkCookie());
console.log(dataAlvoContador);

var x = setInterval(function () {
    var dataAtualContador = new Date().getTime();
    var distance = dataAlvoContador - dataAtualContador;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    mostradorDia = document.querySelectorAll(".dias");
    mostradorHora = document.querySelectorAll(".horas");
    mostradorMinuto = document.querySelectorAll(".minutos");
    mostradorSegundo = document.querySelectorAll(".segundos");
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

    mostradorDia.forEach(function (e){
        e.innerHTML = days;
    });
    mostradorHora.forEach(function (e){
        e.innerHTML = hours;
    });
    mostradorMinuto.forEach(function (e){
        e.innerHTML = minutes;
    });
    mostradorSegundo.forEach(function (e){
        e.innerHTML = seconds;
    });

    if (dataAtualContador > dataAlvoContador) {
        var botao = document.querySelectorAll('.button');
        for (let i = 1; i < botao.length; i++) {
            botao[i].innerHTML = "INSCRICÕES ENCERRADAS";
            botao[i].classList.add('encerrado');
        }
        mostradorDia.forEach(function (e){
            e.innerHTML = 0;
        });
        mostradorDia.forEach(function (e){
            e.innerHTML = 0;
        });
        mostradorDia.forEach(function (e){
            e.innerHTML = 0;
        });
        mostradorDia.forEach(function (e){
            e.innerHTML = 0;
        });
    }
}, 1000);