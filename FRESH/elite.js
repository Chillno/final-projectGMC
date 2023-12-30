 // Check user's preference from localStorage
 const prefersDarkMode = localStorage.getItem('prefersDarkMode') === 'true';

 // Set initial mode based on user's preference
 document.body.classList.toggle('dark-mode', prefersDarkMode);

 function toggleMode() {
   // Toggle dark mode
   const isDarkMode = document.body.classList.toggle('dark-mode');

   // Save user's preference to localStorage
   localStorage.setItem('prefersDarkMode', isDarkMode);
}
 
