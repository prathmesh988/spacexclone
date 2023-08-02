console.log('hello world');
function print(data){
    console.log(data);
}

const body=document.querySelector('body');
const a = document.getElementById('mnuepage');
const b = document.getElementById('button1');
const c = document.getElementById('butt2');
const lis = document.querySelectorAll('.whomeliiii')
const ul = document.querySelector('#flex-item2');
const khalibox =  document.querySelector('#flex-item1');
const hr = document.querySelectorAll('hr');
b.addEventListener('click',()=>{
    // console.log(a.childNodes[3]);
    // console.log(lis);
    
    a.style.display='flex';
    
    a.style.flexDirection='row';
    khalibox.style.display = 'block';
    ul.style.display = 'block';
    for(let i=0; i<lis.length; i++) {
        lis[i].style.display = 'list-item';
    }
    for(let z=0; z<hr.length; z++) {
        hr[z].style.display = 'block';
    };
    print(khalibox.classList);
    ul.setAttribute('class','flex-item2cls');
    khalibox.setAttribute('class' , 'flex-item1cls')// ---> sets the attribute value that you specified attribute in the function

    ul.style.flexGrow = '2';
    ul.style.backgroundColor = 'black';
    a.style.position='absolute';
    a.style.zIndex = '9999';
    a.style.top = '0vh';
    a.style.right = '-0.2vh';
    
    
})

c.addEventListener('click',()=>{
    ul.style.display = 'none  ';
    for(let i=0; i<lis.length; i++) {
        lis[i].style.display = 'none';
    }
    a.style.display='none';
    
});
khalibox.addEventListener('click',()=>{
    khalibox.style.display = 'none';
    ul.style.display = 'none  ';
    for(let i=0; i<lis.length; i++) {
        lis[i].style.display = 'none';
    }
    a.style.display='none';
   
})

// the callback's not called when the scroll event is fired
khalibox.addEventListener('scroll',()=>{
    khalibox.style.display = 'none';
    ul.style.display = 'none  ';
    for(let i=0; i<lis.length; i++) {
        lis[i].style.display = 'none';
    }
    a.style.display='none';
   
})

//addEventListener arttaches the callback and its event to the WEBapi  or callbackqueue evnrioment and then  when the event get's fired then the function pushed into the call stack