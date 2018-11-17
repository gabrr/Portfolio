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
           DarkeningBackground();
       }); 
});

    function parallax(){
    var Hwindow = $(window).scrollTop(); 
        //parallax on hero background image
        $(".hero").css("background-position", "center "+(Hwindow*0.80)+"px"); 
        
        //parallax on text box of the hero
        $(".hero-main-text").css("margin-top", (25+Hwindow*-0.3)+"vh");
        
        var WidthWindow = window.innerWidth;
        var midDevicesW = 1024;
        var SmallDevicesW = 768;
        
        //disable for devices with less than 1024 px;
        if(WidthWindow <= midDevicesW){
            $(".hero").css("background-position", "top");
        }
        
        //parallax for the picture on ABOUT section and the red ball.
        $("#about img").css("margin-left", (65+Hwindow*-0.023)+"%");
        $("#about .circle-graphic").css("left", (-36+Hwindow*0.022)+"%");
        
        //on wider screens it will have different values
        if(WidthWindow >= SmallDevicesW){
            $("#about img").css("margin-left", (86+Hwindow*-0.023)+"%");
            $("#about .circle-graphic").css("left", (-22+Hwindow*0.022)+"%");
        }
        
        //parallax for the SECTION PORTFOLIO, it will make the images rotate
        $("#portfolio-content .img-holder img").css("transform", "rotateY("+ 10+Hwindow*0.027 +"deg)");
        $("#portfolio-content .rogers-pic").css("margin-left", (-34+Hwindow*0.015)+"%");
        $("#portfolio-content .rogers-pic2").css("margin-left", (88+Hwindow*-0.013)+"%");
        
        
        //parallax for the PORTFOLIO SECTION the 2nd project for desktop version
        if(WidthWindow >= SmallDevicesW){
            $("#portfolio-content .rogers-pic").css("margin-left", ( -14+Hwindow*0.015)+"%");
            $("#portfolio-content .rogers-pic2").css("margin-left", (95+Hwindow*-0.013)+"%");
        }
        
        
        
        
       
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
    
        if(skillSection < triggleTop+200){
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

//Change the PORTFOLIO SECTION BACKGROUND
    function DarkeningBackground(){
        var triggleTop = $(document).scrollTop();
        var portfolioTop = document.getElementById("portfolio").offsetTop;
        var barsColorTransform = document.querySelector("#nav-toggle").children;
        
        if(triggleTop+200 > portfolioTop){
            $("#portfolio").css("background-color", "#000");
            $("#contact").css("background-color", "#000");
            
            $("#portfolio-content").css("opacity", "1");
            $("#portfolio-content").css("margin-left", "8%");
            $("#nav-toggle").css("background-color", "#dedede");
            $(barsColorTransform).css("background-color", "#666");
        } 
        else if(portfolioTop+100 > triggleTop) {
            $("#nav-toggle").css("background-color", "#ff8a7f");
            $(barsColorTransform).css("background-color", "#efefef");
        }
    }
    
//The hidden menu must be must close after click in the links
    $(document).ready(function(){
        $("#nav-with-links a").click(function(){
            $("#nav-with-links").toggleClass("nav-slide-left");
            if(window.innerWidth < 768){
                $("#nav-with-links li").fadeToggle(300);
            }    
            $("#nav-toggle").toggleClass("activated");
                
        });
    })

    