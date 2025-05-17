const btns = document.querySelectorAll(".btn");
const allClear = document.querySelector(".ac");
const del = document.querySelector(".del");
const display = document.querySelector(".display");
const equalButton = document.querySelector(".equal");

btns.forEach(button => {
  button.addEventListener('click',(event) =>
  {
    if(button !== allClear && button !== equalButton && button !== del)
    {
      display.value += event.target.textContent;
    }
  });
});

allClear.addEventListener('click', () => {
  display.value = "";
});

del.addEventListener('click',() => {
  display.value = display.value.slice(0,-1);
})

equalButton.addEventListener('click',(event) =>{
  try{
    display.value = eval(display.value);
  }catch(error)
  {
    display.value = "Error";
  }
})

