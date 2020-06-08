//Modal Para Formulário
var larguraTela = window.innerWidth;

if (larguraTela > 600) {
    $("#modalForm").iziModal({
        radius: 30,
        width: 800
    });
} else {
    $("#modalForm").iziModal({
        // radius: 30,
        width: 800
    });
}

$(document).on('click', '.button__trigger', function (event) {
    event.preventDefault();
    $('#modalForm').iziModal('open');
});

//validação

// Nome
if (document.querySelector(".formulario__nome")) {
    var nome = document.querySelector('.formulario__nome'),
        mascaraNome = document.querySelector('.mascaraNome');

    nome.addEventListener("blur", () => {
        let texto = nome.value;

        if ((nome.checkValidity()) && (texto.length > 3)) {
            valido(nome, mascaraNome);
        } else {
            invalido(nome, mascaraNome);
        }
    });

    nome.addEventListener("input", () => {
        let texto = nome.value;

        if (nome.checkValidity()) {
            if (texto.length > 3) {
                valido(nome, mascaraNome);
            }
        } else {
            invalido(nome, mascaraNome);
        }
    });
}

// Email
if (document.querySelector(".formulario__email")) {
    var email = document.querySelector('.formulario__email'),
        mascaraEmail = document.querySelector('.mascaraEmail');

    email.addEventListener("blur", () => {
        let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

        if ((email.checkValidity()) && (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            valido(email, mascaraEmail);
        } else {
            invalido(email, mascaraEmail);
        }
    });

    email.addEventListener("input", () => {
        let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

        if ((email.checkValidity()) && (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            valido(email, mascaraEmail);
        }
    });
}

// Selects
selects(".formulario__interesse");
selects(".formulario__cargo");
selects(".formulario__tamanho");

function selects(select) {
    if (document.querySelector(select)) {
        selectValido = document.querySelector(select);
        let mascara = selectValido.parentNode;
        selectValido.addEventListener("change", () => {
            if (selectValido.checkValidity()) {
                valido(selectValido, mascara);
            } else {
                invalido(selectValido, mascara);
            }
        });
    }
}

//Geral
var botao = document.querySelector(".formulario__button");

botao.addEventListener("click", () => {

    if (!nome.checkValidity()) {
        invalido(nome, mascaraNome);
    }
    if (!email.checkValidity()) {
        invalido(email, mascaraEmail);
    }
    validaselect(".formulario__interesse");
    validaselect(".formulario__vargo");
    validaselect(".formulario__tamanho");
});

function validaselect(select) {
    if (document.querySelector(select)) {
        let selectAlvo = document.querySelector(".formulario__interesse"),
            mascara = selectAlvo.parentNode;

        if (selectAlvo.selectedIndex == 0) {
            invalido(selectAlvo, mascara);
        }
    }
}

function valido(input, mascara) {
    let icone = mascara.querySelector("i");
    input.setAttribute("style", "border-color: #04E2AD!important; color:#04E2AD!important; transition: 0.3s;");

    icone.classList.remove("fa-times-circle");
    icone.classList.add("fa-check-circle");
    icone.setAttribute("style", "color:#04E2AD; opacity:1; transition: 0.3s;");
}

function invalido(input, mascara) {
    let icone = mascara.querySelector("i");

    input.reportValidity();
    input.setAttribute("style", "border-color: #FF1A41!important;color: #FF1A41!important; transition: 0.3s;");

    icone.classList.remove("fa-check-circle");
    icone.classList.add("fa-times-circle");
    icone.setAttribute("style", "color:#FF1A41; opacity:1; transition: 0.3s;");
}

//Telefone

//Adiciona no telefone para o infusion
if (document.querySelector("#ddd")) {
    var ddd = document.querySelector("#ddd");

    ddd.addEventListener("keyup", () => {
        var mascara = ddd.parentNode;

        teclaTelefone();
        mascaraDdd(ddd, mDdd);

        if (ddd.checkValidity()) {
            valido(mascara,mascara)
        }else{
            invalido(mascara,mascara)
        }
    });
}

if (document.querySelector("#numero")) {
    var numero = document.querySelector("#numero");

    numero.addEventListener("keyup", () => {
        var mascara = numero.parentNode;
        
        teclaTelefone();
        mascaraTel(numero, mTel);

        if (numero.checkValidity()) {
            valido(mascara,mascara)
        }else{
            invalido(mascara,mascara)
        }
    });
}

function teclaTelefone() {
    var telefone;

    telefone = ddd.value + numero.value;
    document.getElementById("telefone").value = telefone;
}

//Mascara
function mascaraTel(o, f) { 
    v_obj = o,
        v_fun = f;

    setTimeout("execmascara()", 1)
}

function mascaraDdd(o, f) {
    v_obj = o,
        v_fun = f;

    setTimeout("execmascara()", 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function mTel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos

    return v;
}

function mDdd(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito

    return v;
}