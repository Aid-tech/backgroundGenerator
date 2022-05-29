let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');

color1.addEventListener('input', ()=>{
    color ();
});

color2.addEventListener('input', ()=>{
    color ();
});

function color (){
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}