const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        chooseSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    chooseSound(event.key);
    buttonAnimation(event.key);
});

function chooseSound(key)
{
    switch (key)
        {
            case "w":
                playAudio("sounds/tom-1.mp3");
                break;
            
            case "a":
                playAudio("sounds/tom-2.mp3");
                break;
            
            case "s":
                playAudio("sounds/tom-3.mp3");
                break;
            
            case "d":
                playAudio("sounds/tom-4.mp3");
                break;
            
            case "j":
                playAudio("sounds/snare.mp3");
                break;
            
            case "k":
                playAudio("sounds/crash.mp3");
                break;
            
            case "l":
                playAudio("sounds/kick-bass.mp3");
                break;
            
            default:
                console.log(key);
        }

}

function buttonAnimation(key)
{
    var activeButton = document.querySelector(`.${key}`);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

function playAudio(audioLocation)
{
    var audio = new Audio(audioLocation);
    audio.play();
}