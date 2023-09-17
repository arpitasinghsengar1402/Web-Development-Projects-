const btnel=document.getElementById("btn")
const quoteel=document.getElementById("quote")
const authorel=document.getElementById("author")
const apiurl="http://api.quotable.io/random";

async function getquote(){
    try {
        btnel.innerText="Loading...";
        btnel.disabled=true;
        quoteel.innerText="Updating";
        authorel.innerText="Updating";
        const response=await fetch(apiurl)
        const data=await response.json()
        const quotecontent=data.content;
        const quoteauthor=data.author;
        quoteel.innerText=quotecontent;
        authorel.innerText="~" + quoteauthor;
        btnel.innerText="Get a quote";
        btnel.disabled=false;
        console.log(data);
    }
    catch (error) {
       console.log(error);
       quoteel.innerText="An error happened , try again later";
       authorel.innerText="An error happened , try again later";
       btnel.innerText="Get a quote";
       btnel.disabled=false;
    }
}

getquote()

btnel.addEventListener("click",getquote)