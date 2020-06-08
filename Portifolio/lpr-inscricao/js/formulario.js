    //Modal Para Formulário
    $("#modalForm").iziModal({
        width: 550,
        headerColor: '#0077FF',
    });
    $(document).on('click', '.button__target', function (event) {
        event.preventDefault();
        $('#modalForm').iziModal('open');
    });

    // Setando Formato
    function teclaTelefone() {
        var telefone = 0;
        var telddd = document.getElementById("ddd").value;
        var telnumero = document.getElementById("numero").value;
        telefone = telddd + telnumero;
        console.log(telefone);
        // telefone = telefone.replace("(","")
        // telefone = telefone.replace(")","")
        document.getElementById("telefone").value = telefone;
        console.log(document.getElementById("telefone").value);
    }

    function mascaraDdd(o, f) {
        v_obj = o
        v_fun = f
        setTimeout("execMascaraddd()", 1)
    }

    function mascaraNumero(o, f) {
        v_obj = o
        v_fun = f
        setTimeout("execMascaratel()", 1)
    }

    function execMascaratel() {
        v_obj.value = v_fun(v_obj.value);
    }

    function execMascaraddd() {
        v_obj.value = v_fun(v_obj.value);
    }

    function mddd(v) {
        var v = v.replace(/d/g, "");
        // console.log("Porra");
        //Remove tudo o que não é dígito
        if (v.length == 2) {
            v = `(${v})`;
            document.getElementById("numero").focus();
        }
        return v;
    }

    function mnum(v) {
        var v = v.replace(/d/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(d)(d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        // console.log("foi tel");
        // console.log(v);
        return v;

    }

    function id(el) {
        return document.getElementById(el);
    }
    window.onload = function () {
        id('ddd').onkeyup = function () {
            teclaTelefone(),
                mascaraDdd(this, mddd);
        }
        id('numero').onkeyup = function () {
            teclaTelefone(),
                mascaraNumero(this, mnum);
        }


    }