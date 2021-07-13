//element selector


// functions

//event handlers
window.addEventListener('keydown', function(e)
{   
    const audio = this.document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) // stop the null keys to play
    {
        return;
    }

    audio.currentTime = 0; // to run the 
    audio.play();

    key.classList.add('playing');
}
);

function removeTransition(e)
{
    if(e.propertyName != 'transform')
    {
        return;
    }
    this.classList.remove('playing');
}

// selecting all the keys
const keys = document.querySelectorAll('.key');

// listening to each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
