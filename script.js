const btn = document.querySelector('.btn');
const bcg = document.querySelector('body');
let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',getColor);
const hex = document.querySelector('.hexColor')

function getColor(){
    let hexCol ="#";
    for(var i=0;i<6;i++){
        let random= Math.floor(Math.random()*colors.length);
        
        hexCol+= colors[random];
        
        
        
    }
    bcg.style.backgroundColor=hexCol;
    hex.innerHTML=hexCol;
    
}
