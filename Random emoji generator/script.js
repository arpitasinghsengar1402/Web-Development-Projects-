const btnel=document.getElementById("btn")
constemojinameel=document.getElementById("emoji_name")

const emoji=[]

async function getemoji(){
    let response=await fetch("https://emoji-api.com/emojis?access_key=e636af24ff41b0694c8d364ec39a36f1579545e7")
    data=await response.json()
    // console.log(data)
    for(let i=0;i<1500;i++)
    {
        emoji.push({
            emojiname:data[i].character,
            emojicode:data[i].unicodeName

        })
    }
}
getemoji()
// console.log(emoji)
btnel.addEventListener("click",()=>{
    // console.log("clicked");
    const random=Math.floor(Math.random()*emoji.length)
    console.log(random);
    btnel.innerText=emoji[random].emojiname
    emojinameel.innerText=emoji[random].emojicode;
})