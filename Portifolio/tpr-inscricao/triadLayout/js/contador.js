var contadores = document.querySelectorAll('.countdown'),
    contadorDias = document.querySelectorAll('.dia'),
    contadorHoras = document.querySelectorAll('.hora'),
    contadorMinutos = document.querySelectorAll('.minuto'),
    contadorSegundos = document.querySelectorAll('.segundo'),
    dataEnunciado = document.querySelectorAll(".countdown__encerramento"),
    botao = document.querySelectorAll(".button__trigger"),
    dataAtual, tempo;

function contadorBasico(primeiroAlvo = "", reativaContador = "", segundoAlvo = "", botaoEncerrado = "", ativaContador = "") {
    var primeiroAlvo = new Date(primeiroAlvo),
        segundoAlvo = new Date(segundoAlvo),
        reativaContador = new Date(reativaContador);

    setInterval(() => {
        var dataAtual = new Date();

        if (ativaContador != "") {
            ativaContador = new Date(ativaContador);
            tempoAtiva = ativaContador - dataAtual;

            if (tempoAtiva <= 0) {
                contadores.forEach(e => {
                    e.setAttribute("style", "display:block;");
                });
                var tempoPrimeiro = primeiroAlvo - dataAtual;

                if (tempoPrimeiro >= 0) {
                    calculaTempo(tempoPrimeiro);
                    dataEnunciado.forEach(e => {
                        e.innerHTML = primeiroAlvo.toLocaleDateString();
                    });
                } else {
                    encerraContador(botaoEncerrado);
                    dataEnunciado.forEach(e => {
                        e.innerHTML = primeiroAlvo.toLocaleDateString();
                    });
                }
            }
        }

        if ((reativaContador != "") && (tempoPrimeiro <= 0)) {
            var tempoSegundo = segundoAlvo - dataAtual;

            if (tempoSegundo >= 0) {
                calculaTempo(tempoSegundo);
                dataEnunciado.forEach(e => {
                    e.innerHTML = segundoAlvo.toLocaleDateString();
                });
            } else {
                encerraContador(botaoEncerrado);
                dataEnunciado.forEach(e => {
                    e.innerHTML = segundoAlvo.toLocaleDateString();
                });
            }
        }
    }, 1000);
}

function calculaTempo(tempo) {
    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24)),
        horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60)),
        segundos = Math.floor((tempo % (1000 * 60)) / 1000);

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

function encerraContador(botaoEncerrado) {
    var botao = document.querySelectorAll(".button__trigger");
    contadorDias.textContent = "00";
    contadorHoras.textContent = "00";
    contadorMinutos.textContent = "00";
    contadorSegundos.textContent = "00";
    botao.forEach(e => {
        e.setAttribute("style", "filter: saturate(0);");
    });

    contadores.forEach(e => {
        e.setAttribute("style", "display:none;");
    });

    if (botaoEncerrado != "") {
        botao.forEach(e => {
            e.innerHTML = botaoEncerrado;
        });
    }
}