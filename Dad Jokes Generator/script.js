const btnelement=document.getElementById("btn")
const jokeelement=document.getElementById("joke")
const apikey="c2/FWUaom7ZCWTOJ6VfX1g==Rl1JlGWtSH1tfM9F"
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
}
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){
    try{
    jokeelement.innerText="Updating...";
    btnelement.disabled=true;
    btnelement.innerText="Loading..."
    const response=await fetch(apiurl,options);
    const data=await response.json();
    btnelement.disabled=false;
    btnelement.innerText="Tell me a joke"

    // console.log(data[0].joke);
    jokeelement.innerText=data[0].joke;
}
catch(error){
    jokeelement.innerText="An error happened, Try again later";
    btnelement.disabled=false;
    btnelement.innerText="Tell me a joke";
    console.log(error);
}
}


btnelement.addEventListener("click",getjoke);