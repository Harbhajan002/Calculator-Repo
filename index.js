const btns =  document.querySelectorAll("button");
// querySelectorAll always give node list 
// console.log(btns);
const input = document.getElementById("input_screen");
const clear = document.getElementsByClassName("clear");

btns.forEach(btn =>{
    btn.addEventListener("click",  ()=>{
        // console.log(btn.textContent);

       const btnValue = btn.textContent;

        if (btnValue === "C") {
            input.value = "";
        }else if(btnValue === "="){
            calculateResult()
        }
        else{
            input.value += btnValue;

        }
    })
})

function calculateResult(){
  input.value = eval(input.value)
}

