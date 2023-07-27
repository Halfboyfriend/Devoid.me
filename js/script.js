const btn = document.getElementById('bg__btn');
const section = document.getElementsByName('section');
let isColorChanged = false;

btn.addEventListener('click', function() {
    if (isColorChanged) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeTextColors(0,0,0,0.8);
        
       
      } else {
        document.body.style.backgroundColor = "rgb(0,0,0,0.9)"; // Change background color here
        document.body.style.color = "white"; // Change text color here
        changeTextColors(255,255,255,0.8);
       
      }
    
      isColorChanged = !isColorChanged;
   
});

function changeTextColors(r, g, b, opacity) {
    const elementsToChange = document.querySelectorAll(".reset__bg");
  
    elementsToChange.forEach((element) => {
      element.style.color = `rgb(${r}, ${g}, ${b}, ${opacity})`;
    });
  }