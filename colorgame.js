// alert("hello");
var squarenum = 6;
var colors = generatecolors(squarenum);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor(colors.length);
var rgbdiplay = document.querySelector(".rgbdisplay");
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

rgbdiplay.textContent = pickedcolor.toUpperCase();

easy.addEventListener("click",function(){
    //alert(":3");
    message.textContent = "";
    squarenum = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generatecolors(squarenum);
    pickedcolor = pickcolor(colors.length);
    rgbdiplay.textContent = pickedcolor.toUpperCase();
     h1.style.backgroundColor = "rgb(58, 153, 190)";
    for(var i = 0;i<squares.length;i++)
    {   
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "None";
    }
});

hard.addEventListener("click",function(){
    //alert(":3");
    message.textContent = "";
    squarenum = 6;
    easy.classList.remove("selected");
    hard.classList.add("selected");
    colors = generatecolors(squarenum);
    pickedcolor = pickcolor(colors.length);
    rgbdiplay.textContent = pickedcolor.toUpperCase();
     h1.style.backgroundColor = "rgb(58, 153, 190)";
    for(var i = 0;i<squares.length;i++)
    {   
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

reset.addEventListener("click",function(){
    //alert("Clicked");
    message.textContent = "";
    this.textContent = "New Colors";
    colors = generatecolors(squarenum);
    pickedcolor = pickcolor(colors.length);
    rgbdiplay.textContent = pickedcolor.toUpperCase();
    h1.style.backgroundColor = "rgb(58, 153, 190)";
    for(var i = 0;i<squares.length;i++)
    {
        
        squares[i].style.backgroundColor = colors[i];
    }
});

for(var i = 0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        //alert("Clicked");
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor===pickedcolor){
            message.textContent = "Correct";
            changecolors(clickedcolor);
            h1.style.backgroundColor = pickedcolor;
            reset.textContent = "Play Again ?";
        }
        else{
            this.style.backgroundColor = "rgb(39, 39, 39)";
            message.textContent = "Try Again";
        }
    });
};


function changecolors( color ){
    for(var i = 0;i<colors.length;i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickcolor(n){
    var num = Math.floor(Math.random()*n);
    return colors[num];
};

function generatecolors(n){
    var arr = [];
    for(var i = 0;i<n;i++)
    {
        arr[i] = randomcolors();
    }
    return arr;

}

function randomcolors(){
    var red = Math.ceil(Math.random()*255);
    var green = Math.ceil(Math.random()*255);
    var blue = Math.ceil(Math.random()*255);

    return "rgb("+red+", "+green+", "+blue+")";
}