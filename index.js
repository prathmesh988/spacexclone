console.log('hello world');
const a = document.getElementById('mnuepage');
const b = document.getElementById('button1');
const c = document.getElementById('butt2');
const lis = document.querySelectorAll('.whomeliiii')
const ul = document.querySelector('#flex-item2');
const khalibox =  document.querySelector('#flex-item1');
const hr = document.querySelector('hr');
b.addEventListener('click',()=>{
    // console.log(a.childNodes[3]);
    // console.log(lis);

    a.style.display='inline-flex';

    a.style.flexDirection='row-reverse';
    khalibox.style.display = 'block';
    ul.style.display = 'block';
    for(let i=0; i<lis.length; i++) {
        lis[i].style.display = 'list-item';
    }
    hr.style.display = 'block';
    khalibox.style.flexGrow='2.5';
    ul.style.flexGrow = '2';
    ul.style.backgroundColor = 'black';
    a.style.position='absolute';
    a.style.zIndex = '9999';
    a.style.top = '5vh';
    a.style.right = '5vh';
    
    
})
c.addEventListener('click',()=>{
     ul.style.display = 'none  ';
  for(let i=0; i<lis.length; i++) {
    lis[i].style.display = 'none';
  }
    a.style.display='none';

});
