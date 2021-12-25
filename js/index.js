var div =  document.getElementById("demo")   
var leftSide = 0
var topSide = 0 
var myF = document.getElementById("demo").src = "https://s3.amazonaws.com/cartoonsmartstreaming/wp-content/uploads/2014/12/05001234/plane_preview.png"


document.onkeydown = function(e){

    if(e.key == "ArrowRight"){
        div.style.left = leftSide+"px"
        leftSide += 50
    }

    if(e.key == "ArrowLeft"){
        div.style.left = leftSide+"px"
        leftSide -=50
    }


    if(e.key == "ArrowDown"){
        div.style.top = topSide+"px"
        topSide += 50
    }

    if(e.key == "ArrowUp"){
        div.style.top = topSide+"px"
        topSide -= 50
    }
}