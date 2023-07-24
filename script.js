const completed_button = document.getElementById('completed')


function msg(){
    alert("So sweet of you, little charm!...Keep learning..")

}

completed_button.addEventListener('click',msg)




// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", sound)


function sound() {
    // Get all elements with the class "alphabet_button"
    const alphabet_buttons = document.getElementsByClassName('alphabet_button');

    // Function to play the audio for each button
    function playAudio(event) {
        const button = event.target;
        const letter = button.textContent;

        // Create an audio element
        const audio = new Audio();

        // Set the source of the audio file based on the letter
        audio.src = "sounds/" + letter.toLowerCase() + ".mp3";

        // Play the audio
        audio.play();
    }

    // Loop through all alphabet buttons and attach the event listener
    for (const button of alphabet_buttons) {
        button.addEventListener('click', playAudio);
    }
};



