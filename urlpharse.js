$(document).ready(function() {
    // Get the current URL from the address bar
    const url = window.location.href;

    // Extract the name part from the URL
    const namePart = url.split('/').pop(); // Gets 'First%20Second%20Name'
    const decodedName = decodeURIComponent(namePart); // Decodes '%20' to space

    // Display the name in the div
    $('#namaTamuDigivite').text(decodedName);
});
