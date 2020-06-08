//  video Minificado
function videoMini() {
    var section = document.getElementById('caixaVideo').offsetTop + 200;
    var player = document.getElementById('videoPlayer');
    var local;
    window.setInterval(function () {
        local = window.pageYOffset;
        if (!player.classList.contains('is-sticky') && local >= section && !player.classList.contains('close')) {
            document.getElementById('videoPlayer').classList.add('stepDesaparece-1');
            document.getElementById('videoPlayer').classList.add('is-sticky');
            apareceVideo('videoPlayer');
        }
        if (player.classList.contains('is-sticky') && local <= section) {
            document.getElementById('videoPlayer').classList.remove('stepAparece-1');
            document.getElementById('videoPlayer').classList.remove('stepAparece-2');
            document.getElementById('videoPlayer').classList.remove('is-sticky');
            document.getElementById('videoPlayer').classList.remove('close');
            document.getElementById('videoClose').style.display = 'none';
        }
    }, 1);
}

videoMini()

function fechaMini() {
    document.getElementById('videoPlayer').classList.remove('is-sticky');
    document.getElementById('videoPlayer').classList.add('close');
    document.getElementById('videoClose').style.display = 'none';
}

function apareceVideo(item) {
    section = document.getElementById(item);

    setTimeout(function () {
        section.classList.add('stepAparece-1');
        section.classList.remove('stepDesaparece-2');
        section.classList.remove('stepDesaparece-1');

        setTimeout(function () {
            document.getElementById('videoClose').style.display = 'block';
            section.classList.add('stepAparece-2');
        }, 200);
    }, 100);

}

function desapareceVideo(item) {
    section = document.getElementById(item);

    setTimeout(function () {
        section.classList.remove('stepAparece-2');

        setTimeout(function () {
            document.getElementById('videoClose').style.display = 'block';
            section.classList.add('stepDesaparece-2');
            section.classList.remove('stepAparece-2');
            section.classList.remove('stepAparece-1');

        }, 200);
        section.classList.remove('stepDesaparece-2');

    }, 100);

}
var iframe = document.querySelector('#videoPlayerIframe');

var player = new Vimeo.Player(iframe);

player.on('play', function () {
    document.getElementById('videoClose').style.color = '#000';

});
