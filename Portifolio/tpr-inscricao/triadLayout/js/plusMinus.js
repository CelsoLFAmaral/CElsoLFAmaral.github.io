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