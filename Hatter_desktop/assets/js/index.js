const menuOpen = document.getElementById('open_menu');
const sideBar = document.querySelector('.Menu');

menuOpen.addEventListener('click', () => {
  
    sideBar.style.left = '10px';
});
document.addEventListener('click', function(event) {
   
    if (!sideBar.contains(event.target) && !menuOpen.contains(event.target)) {
      sideBar.style.left = '-50%';
    }
  });

