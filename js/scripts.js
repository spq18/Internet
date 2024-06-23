function togglePlay(button, streamId) {
    var audio = document.getElementById(streamId);
    if (audio.paused) {
        audio.play();
        button.innerHTML = '<span>&#9208;</span>'; // símbolo de pause
        button.style.backgroundColor = '#28a745'; // mudar a cor para verde quando está tocando
    } else {
        audio.pause();
        button.innerHTML = '<span>&#9658;</span>'; // símbolo de play
        button.style.backgroundColor = '#dc3545'; // mudar de volta para vermelho quando está pausado
    }
}
