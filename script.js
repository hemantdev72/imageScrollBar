let scrollContainer=document.getElementById('gallery');
let backBtn=document.getElementById('backBtn');
let nextBtn=document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel',(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft +=e.deltaY;
    scrollContainer.style.scrollBehavior='auto';
})

backBtn.addEventListener('click',(e)=>{
    scrollContainer.scrollLeft-=900;
    scrollContainer.style.scrollBehavior='smooth';
})

nextBtn.addEventListener('click',()=>{
    scrollContainer.scrollLeft+=900;
    scrollContainer.style.scrollBehavior='smooth';
})

