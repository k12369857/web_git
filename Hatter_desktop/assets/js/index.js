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

/*Screen Carousel*/

const doms = {
  Carousel_img: document.querySelector('.item_imgs'),
   arrowRight: document.querySelector('.right'),
   arrowLeft: document.querySelector('.left'),
   imgcount: document.querySelectorAll('.item_imgs img'),
   setindexs: document.querySelector('.setindexs'),
 };
 const count = doms.imgcount.length; //輪播圖數量
 let curindex = 0;
 
 for(let i = 0; i < count ; i++){
   const indicator = document.createElement('button')
   indicator.classList.add('setindex')
   // 为每个指示器按钮添加点击事件处理程序
   indicator.onclick = () => moveTo(i)
   doms.setindexs.append(indicator)
 };
 
 function createAuto() {
   return setInterval(() => {
       if(curindex === count-1){
     doms.Carousel_img.style.transform = `translateX(100%)`;
     doms.Carousel_img.style.transition = "none";
     doms.Carousel_img.clientHeight;
     moveTo(0)
   }else{
       moveTo(curindex+1)
   
   }
   }, 3000);
 }
 
 let autoTime = createAuto();
 
 function moveTo(index) {
  doms.Carousel_img.style.transform = `translateX(-${index}00%)`;
   doms.Carousel_img.style.transition = '.5s';
   
    let Isetindex = document.querySelectorAll('.setindex');
  
   for (let i = 0; i < Isetindex.length ; i++) {
     if (i === index ) {
       Isetindex[i].style.opacity=1;
     } else {
       Isetindex[i].style.opacity=0.3;
     }
   }
 curindex = index;
 }
 
  function init(){
   const firstClone = doms.Carousel_img.firstElementChild.cloneNode(true);
    const lastClone = doms.Carousel_img.lastElementChild.cloneNode(true);
    lastClone.style.marginLeft = '-100%';
     doms.Carousel_img.appendChild(firstClone)
    doms.Carousel_img.insertBefore(lastClone,doms.Carousel_img.firstElementChild)
 }
   
   init();
 
 function moveLeft(){
   if(curindex === 0){
     doms.Carousel_img.style.transform = `translateX(-${count}00%)`;
     doms.Carousel_img.style.transition = "none";
     doms.Carousel_img.clientHeight;
     moveTo(count-1)
   }else{
       moveTo(curindex-1)
   
   }
   clearInterval(autoTime);
     autoTime = createAuto();
 }
 function moveRight(){
   if(curindex === count-1){
     doms.Carousel_img.style.transform = `translateX(100%)`;
     doms.Carousel_img.style.transition = "none";
     doms.Carousel_img.clientHeight;
     moveTo(0)
      
 
   }else{
       moveTo(curindex+1)
   
   }
   clearInterval(autoTime);
   autoTime = createAuto();
 }
 
 doms.arrowLeft.onclick = moveLeft;
 doms.arrowRight.onclick = moveRight;