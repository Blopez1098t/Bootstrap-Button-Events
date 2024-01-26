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

let tx1 = document.getElementById('text1');
tx1.addEventListener("keydown", function(even){
    even.target.style.background = "red";
});

let tx2 = document.getElementById('text2');
tx2.addEventListener("keyup", function(eventt){
    eventt.target.style.background = "green";
});

let tx3 = document.getElementById('text3');
tx3.addEventListener("keypress", function(eventtt){
    eventtt.target.style.background = "purple";
});

const tx4s = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const tx4t = {
    duration: 500,
    iterations: 1,
  };
  
  const tx4 = document.getElementById("text4");
  
  tx4.addEventListener("keypress", () => {
    tx4.animate(tx4s, tx4t);})