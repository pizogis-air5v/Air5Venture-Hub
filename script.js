const dialogueText = document.getElementById("dialogueText");
const nextButton = document.getElementById("nextButton");
const sorcererImg = document.getElementById("sorcererImg");

const dialogues = [
    "Greetings, adventurer! What brings you to seek my wisdom?",
    "Ah, a quest for knowledge. How noble!",
    "Tell me, what troubles your mind?",
    "Ah, I see you seek the secrets of the arcane. Allow me to share a glimpse into the future. In the realm of Air5Venture's next game, a hero shall emerge, embarking on a quest filled with mystery and wonder. But beware, for darkness lurks in unexpected places.",
    "Ah, the allure of nostalgia! Many seek the comfort of familiar tales and the charm of bygone eras. In Air5Venture's next creation, players will journey through a world steeped in the essence of times long past, where every pixel tells a story and every melody evokes a memory.",
    "Ah, the curiosity of the small yet mighty! In Air5Venture's upcoming adventure, players will meet a protagonist unlike any other. Though diminutive in stature, this hero's passion for numbers knows no bounds, unlocking secrets and overcoming challenges with each calculated step."
];

let currentDialogueIndex = 0;

// Function to display current dialogue
function displayDialogue() {
    dialogueText.textContent = dialogues[currentDialogueIndex];
    // Show sorcerer image only for relevant dialogues
    sorcererImg.style.display = (currentDialogueIndex < 3) ? "block" : "none";
}

// Event listener for next button click
nextButton.addEventListener("click", function() {
    currentDialogueIndex++;
    if (currentDialogueIndex < dialogues.length) {
        displayDialogue();
    } else {
        // End of dialogue
        dialogueText.textContent = "Farewell, adventurer. May your journey be fruitful!";
        nextButton.style.display = "none"; // Hide next button
    }
});

// Initial display of dialogue
displayDialogue();
