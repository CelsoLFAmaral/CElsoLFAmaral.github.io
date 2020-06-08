// videos comentarios
function ExibeDarkRoom(srcdarkroom) {
    document.getElementById('darkRoom__iframe').src = srcdarkroom;
    apareceVideo('darkRoom');

}

function EscondeDarkRoom() {
    desapareceVideo('darkRoom')
    document.getElementById('darkRoom__iframe').src = "";

}