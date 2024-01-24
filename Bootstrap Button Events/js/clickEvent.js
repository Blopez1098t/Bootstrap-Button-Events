let btnOne = document.getElementById('click')
btnOne.addEventListener("click", function(event){
    event.target.style.background = "#a0b96b"
});

let btnTwo = document.getElementById('dblclick');
btnTwo.addEventListener('dblclick', function(e){
    e.target.style.background = "red";
})

let btnThree = document.getElementById('onmouseover');
btnThree.addEventListener("mouseover", function(ev){
    ev.target.style.background = "orange";
})

let btnFour = document.getElementById('onmouseup');
btnFour.addEventListener("mouseup", function(eve){
    eve.target.style.background = "blue";
})