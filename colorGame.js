var numSquares=6;
var colors= generateColors(numSquares);

 var pickedColor = pickColor();             
            
  var squares=document.querySelectorAll(".square");    
  var colorDisplay=document.querySelector("#changes");   
  var messageDisplay=document.querySelector("#message");
  var resetButton=document.querySelector("#reset");
  var tablet=document.querySelector("#tablet");
  var easyBtn=document.querySelector("#easy");
  var hardBtn=document.querySelector("#hard");
  var h1=document.querySelector("h1");
  colorDisplay.textContent=pickedColor;   



   easyBtn.addEventListener("click",function(){
  	numSquares=3;
  	easyBtn.classList.add("styles");
  	hardBtn.classList.remove("styles");
  	colors= generateColors(numSquares);
  	pickedColor = pickColor(); 
    colorDisplay.textContent=pickedColor;
    h1.style.background="#38DCD1";
  		tablet.style.background="white";
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i]){
    	squares[i].style.background=colors[i];
    }
    else
    {
    	squares[i].style.display="none";
    }
}
 });
   hardBtn.addEventListener("click",function(){
   	numSquares=6;
  	hardBtn.classList.add("styles");
  	easyBtn.classList.remove("styles");
  	colors= generateColors(numSquares);
  	pickedColor = pickColor(); 
  	h1.style.background="#38DCD1";
  		tablet.style.background="white";
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	
    	squares[i].style.background=colors[i];

    	squares[i].style.display="block";
}
 });


  resetButton.addEventListener("click",function()
  	{
  		colors= generateColors(numSquares);
  		pickedColor = pickColor(); 
  		h1.style.background="#38DCD1";
  		tablet.style.background="white";
  		colorDisplay.textContent=pickedColor;
  		messageDisplay.textContent="    ";
  		resetButton.textContent="New Game";
  		for(var i=0;i<squares.length;i++)
  		{
  			squares[i].style.background=colors[i];
  		}
  	});



  for(var i=0;i<squares.length;i++)
  { 
  	squares[i].style.background=colors[i];
  	squares[i].addEventListener("click",function()
  		{
  			var clickedColor = this.style.background;
  			if(clickedColor===pickedColor)
  			{   
          tablet.style.background=clickedColor;
  				h1.style.background=clickedColor;
  				changeColor(pickedColor);
  				messageDisplay.textContent="CONGRATS";
  				resetButton.textContent="Wanna Play again?";
  			}
  			else{
  				   this.style.background="#232323";
  				   messageDisplay.textContent="TRY AGAIN";
  			}
  		});
  }
  function changeColor(color)
  {
  	for(var i=0;i<squares.length;i++)
  	{
  		squares[i].style.background=color;
  	}
  }
 function pickColor()
 {
 	var one= Math.floor(Math.random() * colors.length);
 	return colors[one];
 }
 
function generateColors(num)
{
	var arr = [];
    for(var i=0;i<num;i++)
    {
    	arr.push(generateRandomColors());
    }
    return arr;
}
function generateRandomColors()
{ 
   var r=Math.floor(Math.random() *256);
   var g=Math.floor(Math.random() *256);
   var b=Math.floor(Math.random() *256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
   
}