   // Get the URL parameters
   const urlParams = new URLSearchParams(window.location.search);
   const name = urlParams.get('name'); // Get the 'name' parameter

   // Display the name in the div
   if (name) {
       $('#namaTamuDigivite').text(decodeURIComponent(name));
   } else {
       $('#namaTamuDigivite').text('No name provided.');
   }