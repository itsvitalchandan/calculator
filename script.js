let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.innerHTML = string;

        }else if(e.target.innerHTML == "AC"){
            string = "";
            display.innerHTML = string;
        }else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
        }
        else{
            string += e.target.innerHTML;
            display.innerHTML = string;
        }
    })
})
console.log(display);