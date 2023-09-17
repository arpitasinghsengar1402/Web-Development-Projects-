const btnEl=document.getElementById("btn")
const bmiinputel=document.getElementById("bmi-result")
 const weightconditionel=document.getElementById("weight-condition")


function calculateBMI(){
    const heightvalue=document.getElementById("height").value/100
    const weightvalue=document.getElementById("weight").value
    const bmivalue=weightvalue/(heightvalue*heightvalue)

    // console.log(bmivalue);

    bmiinputel.value=bmivalue
    if(bmivalue<18.5)
    {
        weightconditionel.innerText="UNDER-WEIGHT"
    }
    else  if (bmivalue>=18.5 && bmivalue<=24.9)
    {
        weightconditionel.innerText="NORMAL-WEIGHT"
    }
    else if(bmivalue>=25 && bmivalue<=29.9 )
    {
        weightconditionel.innerText="OVER-WEIGHT"
    }
    else if(bmivalue>=30)
    {
        weightconditionel.innerText="OBESITY"
    }

}


btnEl.addEventListener("click",calculateBMI)