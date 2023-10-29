// document.addEventListener('DOMContentLoaded', function() {
//     // Get all "Read More" buttons
//     const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
//     readMoreBtns.forEach((btn) => {
//       btn.addEventListener('click', function() {
//         const longText = this.previousElementSibling; // .long
//         const shortText = longText.previousElementSibling; // .short
        
//         // Toggle text visibility
//         longText.style.display = (longText.style.display === 'none' || longText.style.display === '') ? 'block' : 'none';
//         shortText.style.display = (shortText.style.display === 'none' || shortText.style.display === '') ? 'block' : 'none';
        
//         // Change button text
//         this.textContent = (this.textContent === 'Read More') ? 'Read Less' : 'Read More';
//       });
//     });
//   });
  

document.addEventListener('click', function(e) {
if (e.target.classList.contains('more-info')) {
    let id = e.target.getAttribute('data-id');
    // Show a popup with the corresponding information based on the ID
}
});
  