// Get reference to the checkbox with id 'full-dark-mode' from the DOM
const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
// Get reference to the checkbox with id 'contained-dark-mode' from the DOM
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode');
// Get reference to the element with class 'container' (could be a div containing some content)
const container = document.querySelector('.container');


//local storage: It was first a string, then we used JSON.parse() to convert it into a Boolean value.
// Retrieve the saved value for full dark mode from local storage and convert it to a Boolean
const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'));
// Retrieve the saved value for contained dark mode from local storage and convert it to a Boolean
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'));


//these both fns we use basically so that when the page refresh it didnot change, just be what we select 
// If full dark mode was enabled last time, check the checkbox on page load
if (isFullDarkMode) {
    fullDarkModeCheckbox.checked = true;
}
// If contained dark mode was enabled last time, check the checkbox on page load
if (isContainedDarkMode) {
    containedDarkModeCheckbox.checked = true;
}
// Apply full dark mode styling (based on the checkbox state)
changeFullDarkMode();
// Apply contained dark mode styling (based on the checkbox state)
changeContainedDarkMode();


// Add an event listener to full dark mode checkbox that triggers when it's changed (checked or unchecked)
fullDarkModeCheckbox.addEventListener('change', () => {
    // When the checkbox is changed, update both full and contained dark mode settings
    changeFullDarkMode();
    changeContainedDarkMode();
});



// Function to enable or disable full dark mode across the entire page
function changeFullDarkMode() {
    // If the checkbox is checked, apply dark mode to the entire body
    if (fullDarkModeCheckbox.checked) {
        document.body.classList.add('dark'); // Add the 'dark' class to <body>
        localStorage.setItem('fullDarkModeCheckbox', true); // Save the state in local storage
    } else {
        document.body.classList.remove('dark'); // Remove the 'dark' class from <body>
        localStorage.setItem('fullDarkModeCheckbox', false); // Save the state in local storage
    }

    // Optional: you could sync the contained dark mode checkbox with this one
    // containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked;
}

// Function to enable or disable dark mode only within the container element
function changeContainedDarkMode() {
    // If the checkbox is checked, apply dark mode to the container only
    if (containedDarkModeCheckbox.checked) {
        container.classList.add('dark'); // Add the 'dark' class to the container
        localStorage.setItem('containedDarkModeCheckbox', true); // Save the state
    } else {
        container.classList.remove('dark'); // Remove the 'dark' class from the container
        localStorage.setItem('containedDarkModeCheckbox', false); // Save the state
    }
}


// Add an event listener to the contained dark mode checkbox
// This will trigger only the contained mode change (not full-page dark mode)
containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode);
