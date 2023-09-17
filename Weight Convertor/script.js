const inputel=document.getElementById("input")
const errorel=document.getElementById("error")
const resultel=document.getElementById("result")

let errortime;

function updateresults(){
   if(inputel.value<0|| isNaN(inputel.value))
   {
        errorel.innerText="Please enter a valid number!"
        clearTimeout(errortime);
        errortime=setTimeout(()=>{
            errorel.innerText="";
          inputel.value="";
        },2000)
   }
   else
   {
    resultel.innerText=+(inputel.value / 2.2).toFixed(2)
    setTimeout(()=>{
        resultel.innerText="";
        inputel.value="";

    },10000)
   }
}


inputel.addEventListener("input",updateresults)