// Select all nav items
const navItems = document.querySelectorAll('.nav-item');

// Add event listener to each nav item for click event
navItems.forEach(item => {
  item.addEventListener('click', function() {
        alert(`Hope you enjoy our website`);
     });
});
