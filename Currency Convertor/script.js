const currencyfirstel=document.getElementById("currency-first")

const worthfirstel=document.getElementById("worth-first")

const currencysecondel=document.getElementById("currency-second")

const worthsecondel=document.getElementById("worth-second")

const exchangerateel=document.getElementById("exchange-rate")

updaterate()

function updaterate(){
    // console.log("Called");
    fetch(`https://v6.exchangerate-api.com/v6/59783571253092151c9250ee/latest/${currencyfirstel.value}`).then((res)=>res.json()).then((data)=>{const rate=data.conversion_rates[currencysecondel.value];    console.log(rate)
    exchangerateel.innerText=`1 ${currencyfirstel}=${rate + " " + currencysecondel.value}`;
    worthsecondel.value=(worthfirstel.value*rate).toFixed(4)
    });
}


currencyfirstel.addEventListener("change",updaterate)

currencysecondel.addEventListener("change",updaterate)

worthfirstel.addEventListener("input",updaterate)

worthsecondel.addEventListener("input",updaterate)