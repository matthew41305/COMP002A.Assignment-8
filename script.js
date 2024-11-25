// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


// Function to apply user preferences from localStorage
function applyPreferences() {// Retrieve preferences from localStorage
    const userName = localStorage.getItem('userName'); // Get the stored user name from localStorage
    const bgColor = localStorage.getItem('bgColor');   // Get the stored background color from localStorage
    const textColor = localStorage.getItem('textColor'); // Get the stored text color from localStorage

    // Apply preferences if they are available
    if (userName) {
        // If a username exists is found, then update the greeting text with the stored name
        document.getElementById('greeting').textContent = 'Welcome, ${username}!';
    }
    if(bgColor) {
        // If a background color is found, then apply it to the body's background
        document.body.style.backgroundcolor = bgColor;

    }
    if (textColor) {
        // if a text color is found, then apply it to the body's text color
        document.body.style.color = textColor;
    }
}

// Function to hanble the form submission
function savePreferences(event) {
    event.preventDefault(); // prevents default form submission - prevents page refresh

    // capture the user input from the form
    const userName = document.getElementbyID('name').value // get the name entered in the form
    const bgColor = document.getElementById('bgColor').value; // Get the selected background color
    const textColor = document.getElementById('textColor').value; // Get the selected text color

     // Apply preferences immediately
     applyPreferences(); // Call the function to update the page with the new preferences
    
    // notifies the user that the preferences have been saved
    alert('Preferences saved successfully!'); // Show a confirmation alert to the user
}

// Add event listener for form submission
document.getElementById('preferencesForm').addEventListener('submit', savePreferences); 
// Attach the savePreferences function to the form's submit event

// Apply preferences on page load
window.addEventListener('load', applyPreferences); 
// Ensure saved preferences are applied when the page is loaded