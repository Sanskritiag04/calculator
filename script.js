
 let screen=document.querySelector("h2");
 let numbers=document.querySelectorAll(".circle");

const clear=()=>
{
    console.log(screen.innerText);
    screen.innerText="";
}

let string="";
let arr=Array.from(numbers);
arr.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText== '=')
        {
            string=eval(string);
            screen.innerText=string;
        }
        else if(e.target.innerText== 'CE'){
            string=string.substring(0,string.length-1);
            screen.innerText=string;
        }
        else if(e.target.innerText== 'AC'){
            string="";
            clear();
        }
        else{
        string+=e.target.innerHTML;
        screen.innerText=string;
        }
    })
})

