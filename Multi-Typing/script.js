// Select the first <span> element in the document and store it in a variable called 'span'
const span = document.querySelector('span')

// Define a list of words that will be typed out one by one
const wordsList = ['Developer.', 'Coder.', 'Teacher.', 'YouTuber.']

// This function will handle the typing and deleting effect
function autoType(){

    //Start with the first word in the list
    let wordIndex = 0

    //Start with the first character of the word
    let characterIndex = 0;

    //This variable will be used to switch between typing and deleting mode
    let reverseType = false

    //This variable adds a delay or "pause" after typing or deleting
    let skipUpdate = 0

    //Use setInterval to repeat a block of code every 100 milliseconds (0.1 second)
    const intervalId = setInterval(() => {

        //If skipUpdate is more than 0, reduce it and skip the current loop iteration
        if(skipUpdate){
            skipUpdate--
            return
        }

        // If we are in typing mode (not deleting)
        if(!reverseType){
            // Add a small delay after typing each character
            skipUpdate = 2

            // Add the next character of the current word to the <span>
            span.innerText = span.innerText + wordsList[wordIndex][characterIndex]

            // Move to the next character for the next loop
            characterIndex++;
        } else {
            // If we are in deleting mode, remove the last character from the <span>
            span.innerText = span.innerText.slice(0, span.innerText.length - 1)

            //Move backward in the character index
            characterIndex--
        }

        // If we've typed the whole word, start the deleting process after a small delay
        if(characterIndex === wordsList[wordIndex].length){
            skipUpdate = 6   // delay before deleting starts
            reverseType = true  // switch to deleting mode
        }

        // If the word has been completely deleted (no characters left in <span>)
        if(span.innerText.length === 0 && reverseType){
            reverseType = false  // switch back to typing mode
            wordIndex++          // move to the next word in the list
        }

        // If we’ve reached the end of the word list, start again from the beginning
        if(wordIndex === wordsList.length){
            wordIndex = 0
        }

    }, 100) // end of setInterval function, runs every 100 milliseconds

}

// Call the function to start typing effect
autoType();
