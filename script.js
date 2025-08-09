let pianoContainer = document.getElementsByClassName("piano-container");

const volumeControl = document.getElementById('volume-control');
let volume = parseFloat(volumeControl.value);

volumeControl.addEventListener('input',()=>{
    volume= parseFloat(volumeControl.value); ;
}
)
const keys = document.querySelectorAll('.key-white, .key-black');

function playS(pianoKey){
    if(!pianoKey) return;

    const sound = pianoKey.dataset.sound;
    const audio = new Audio(`audio/${sound}.mp3`);
    audio.volume = volume;
    audio.play()
    
    pianoKey.classList.add('active');
    
    setTimeout(() => {
        pianoKey.classList.remove('active');
    }, 200);

    
}

keys.forEach( key => {
    key.addEventListener('click',() => {
        playS(key)
        
    })
})

document.addEventListener('keydown', (e) => {
    const keyMap = {
        'KeyA': 'a',
        'KeyW': 'w',
        'KeyS': 's',
        'KeyE': 'e',
        'KeyD': 'd',
        'KeyF': 'f',
        'KeyT': 't',
        'KeyG': 'g',
        'KeyY': 'y',
        'KeyH': 'h',
        'KeyU': 'u',
        'KeyJ': 'j',
    };

    const logicalKey = keyMap[e.code];
    if (!logicalKey) return;

    const pianoKey = document.querySelector(`[data-key="${logicalKey}"]`);
    playS(pianoKey);
});
