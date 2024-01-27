const menuOpen = document.getElementById('menu-open');
const sideBar = document.querySelector('.menu_left');

menuOpen.addEventListener('click', () => {
    sideBar.style.width = '45%';
});

 document.addEventListener('click', function(event) {
   
    if (!sideBar.contains(event.target) && !menuOpen.contains(event.target)) {
  
      sideBar.style.width = '0%';
    }
  });