// this code it's going to make the toogle button's effect
function toggleAnimation(x) {
    x.classList.toggle('activated');
}
//this lines of codes it make the action on click make the links appear.
var toggleBtn = document.getElementById('nav-toggle');
var navWithLinks = document.getElementById('nav-with-links');
var navBar = document.getElementById('nav-bar'); 

$(document).ready(function(){
   $(toggleBtn).click(function(){
        $(navWithLinks).toggleClass("nav-slide-left");
        $(".navbar-links li").fadeToggle(300);
   }); 
});

//That function is going to call all other ones related to scroll event
$(document).ready(function(){
       $(window).scroll(function(){
           parallax();
           skillsBarsAnimation();
       }); 
    });
    function parallax(){
    var Hwindow = $(window).scrollTop(); 
        //parallax on hero background image
        $(".hero").css("background-position", "center "+(Hwindow*0.80)+"px"); 
        
        //parallax on text box of the hero
        $(".hero-main-text").css("margin-top", (25+Hwindow*-0.3)+"vh");
        
        var WidthWindow = window.innerWidth;
        var SmallDevicesW = 1024;
        
        //disable for devices with less than 1024 px;
        if(WidthWindow < SmallDevicesW){
            $(".hero").css("background-position", "top");
        }
        //parallax for the picture on about section and the red ball.
        $("#about img").css("margin-left", (65+Hwindow*-0.023)+"%");
        $("#about .circle-graphic").css("left", (-36+Hwindow*0.022)+"%");
        
        
    }

//Skills section animation ACCORDING TO THE USER SCROLLING EVENT

    function skillsBarsAnimation(){
    var triggleTop = $(document).scrollTop();
    var skillSection = document.querySelector(".skills-section").offsetTop;
    
    //THE BARS TO ANIMATE
        var progressBar1, progressBar2, progressBar3, progressBar4, progressBar5;
        progressBar1 = document.querySelector(".percentages-bar");
        progressBar2 = document.getElementsByClassName("percentages-bar")[1];
        progressBar3 = document.getElementsByClassName("percentages-bar")[2];
        progressBar4 = document.getElementsByClassName("percentages-bar")[3];
        progressBar5 = document.getElementsByClassName("percentages-bar")[4];
    
        if(skillSection < triggleTop){
        progressBar1.style = "width: 76%;"
        progressBar2.style = "width: 64%;"
        progressBar3.style = "width: 88%;"
        progressBar4.style = "width: 71%;"
        progressBar5.style = "width: 40%;"
        } else if(skillSection+100 > triggleTop){
        progressBar1.style = "width: 35%;"
        progressBar2.style = "width: 35%;"
        progressBar3.style = "width: 35%;"
        progressBar4.style = "width: 35%;"
        progressBar5.style = "width: 35%;"    
        }
}
    

    