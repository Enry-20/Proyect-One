let fire = document.getElementsByClassName("fas fa-fire")
$(fire).mousemove(function () {
    $(fire).css("color", "red")
})

$(fire).mouseout(function () {
    $(fire).css("color", "black")
})

let badges= document.getElementById("topics")


$(fire).mousemove(function(){
    if(badges!==active){
        $(badges).hover("display", "none")
    }
    
})