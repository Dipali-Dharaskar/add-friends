var istatus = document.querySelector("h5")

var card = document.querySelector(".card")
var btn = document.querySelector(".btn")
var flag =0
btn.addEventListener("click", function(){
    if(flag==0){
        istatus.innerHTML ="Friends"
        istatus.style.color = "green"
        flag =1
        btn.innerHTML ="Remove"
        btn.style.backgroundColor = "gray"
        // card.style.backgroundColor = "pink"
        
        
    }
    else{
        istatus.innerHTML ="Stranger"
        istatus.style.color = "red"
        flag =0
        btn.innerHTML ="Add Friend"
        btn.style.backgroundColor = "seagreen"
        // card.style.backgroundColor = "wheat"

    }
})