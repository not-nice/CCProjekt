// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Code that depends on the DOM being fully loaded goes here.

    // Example: Alert a message when the button is clicked.
    const clickMeButton = document.getElementById('clickMeButton');
    clickMeButton.addEventListener('click', function () {
        alert('Button clicked!');
    });
});
