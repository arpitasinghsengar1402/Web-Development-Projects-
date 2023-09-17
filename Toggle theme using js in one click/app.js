const tooglebtm=document.querySelector(".toggle-theme")
const body=document.body

function toogletheme(){
    if(body.classList.contains("datk-mode"))
    {
        body.classList.remove("dark-mode")
        tooglebtm.textContent="Dark Mode";
    }
    else
    {
        body.classList.add("dark-mode")
        tooglebtm.textContent="Light Mode"
    }
}


tooglebtm.addEventListener("click",toogletheme)