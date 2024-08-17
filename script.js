// Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

// UP Button
// up button
const backToTopButton = document.querySelector('.bx');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) { // Menampilkan tombol saat scroll lebih dari 100px
    backToTopButton.style.opacity = '1';
    backToTopButton.style.pointerEvents = 'auto';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.pointerEvents = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Menggulir ke atas dengan halus
    });
  });

  // Portfolio nav
  const menuItems = document.querySelectorAll('.port-nav li a');
  const portfolioItems = document.querySelectorAll('.port-project .project');
  let currentCategory = 'all';
  
  menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
          // Remove active class from all menu items
          menuItems.forEach(item => item.classList.remove('active'));
  
          // Add active class to the clicked menu item
          event.target.parentElement.classList.add('active');
  
          // Get the category from the clicked menu item
          const category = event.target.dataset.category;
  
          // Filter portfolio items based on the category
          portfolioItems.forEach(item => {
              if (category === 'all' || item.dataset.category === category) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  
