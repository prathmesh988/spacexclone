console.log('hello world');
const a = document.getElementById('mnuepage');
const b = document.getElementById('butt');
const c = document.getElementById('butt2');
// const lis = document.querySelectorAll('.whomeliiii')

b.addEventListener('click',()=>{
    // console.log(a.childNodes[3]);
    // console.log(lis);
   
    
    a.style.display='flex';

    
    
    
})
c.addEventListener('click',()=>{
    a.style.display='none';
});
