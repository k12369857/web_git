const menuOpen = document.getElementById('menu-open');
const container = document.querySelector('.container');
const sideBar = document.querySelector('.menu_left');
const sideBarItem = document.querySelector('.items');
const lastFoodBar = document.querySelector('.Food_bar:last-child');

menuOpen.addEventListener('click', () => {
    sideBar.style.display = 'block';
    sideBar.style.width = '45%';
    sideBarItem.style.display = 'block';
});

 document.addEventListener('click', function(event) {
   
    if (!sideBar.contains(event.target) && !menuOpen.contains(event.target)) {
      sideBar.style.width = '0%';
      sideBar.style.padding = '0px';
      sideBarItem.style.display = 'none';
    }
  });
container.addEventListener('scroll', function() {
      // Set menu_left height dynamically based on container's scroll position
      
      sideBar.style.width = '0%';
      sideBar.style.padding = '0px';
      sideBarItem.style.display = 'none';
  
    });