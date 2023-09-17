const ratingelements=document.querySelectorAll(".rating")
const btnelement=document.getElementById("btn")
const containerelement=document.getElementById("container")
let selectedrating="";

ratingelements.forEach((ratingelements)=>{
    ratingelements.addEventListener("click",(event)=>{
        removeActive()
        selectedrating=event.target.innerText || event.target.parentNode.innerText;

       event.target.classList.add("active")
       event.target.parentNode.classList.add("active")
    })
})

btnelement.addEventListener("click",()=>{
    if(selectedrating!=="")
    {
        containerelement.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedrating}
        </strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    }
})

function removeActive(){
    ratingelements.forEach((ratingelements)=>{
        ratingelements.classList.remove("active")
    })
}