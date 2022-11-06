const sounds = ['applause', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const button = document.createElement('button');
    button.classList.add('btn');

    button.innerHTML = sound;

    button.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
    })

    document.querySelector('#buttons').appendChild(button);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}