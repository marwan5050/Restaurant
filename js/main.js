
$(document).ready(function(){

    // nav section

    $(".nav-icon").click(function(){

        $(".full-nav").addClass("open");

        // stop scroll
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
       
    });

    $(".nav-close").click(function(){

        $(".full-nav").removeClass("open");

        // make scroll auto
        $('html, body').css({
            overflow: 'auto',
            overflowX: 'auto',
            height: 'auto'
        });
        
    });

    $(window).scroll(function(){

        let windowHight = $(window).scrollTop();

        if(windowHight > 100 ){

            $(".nav-list").addClass("sticky");
        } else{

            $(".nav-list").removeClass("sticky");
        }
    })

    // video slider
    
    $('.video-show').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:19000,
        slideSpeed:1000,
        paginationSpeed:1000,
        goToFirstSpeed:1000,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        videoWidth:true,
        lazyLoad:true,
        center:true,
        dots:false,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            }
        }
    });


    // about slider

    $('.about-slider').owlCarousel({
        
        autoplay:true,
        autoplayTimeout:8000,
        slideSpeed:1000,
        paginationSpeed:1000,
        goToFirstSpeed:1000,
        merge:true,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


    // start chef section

    $("#slider").owlCarousel({

        loop:true,
        dots:false,
        center:true,
        autoplay:5000,
        autoplayHoverPause:true,
        responsive:{

            0:{
                items:1,
            },
            767:{
                items:2,
            },
            1200:{
                items:3,
            },
        }
    });

    $("#arrow-l").click(function(){
        $("#slider").trigger("prev.owl.carousel");
    });
    $("#arrow-r").click(function(){
        $("#slider").trigger("next.owl.carousel");
    });


    // shuffle meal section

    // intialize mixitup
    let mixer = mixitup('#container');


    // remove and add class selcted from lists on click
    $('.shuffle li').click(function(){

        $(this).addClass("selcted").siblings().removeClass("selcted");
    })
    

    // count section

    $('.counter').counterUp({
        delay:5,
    time: 2000
    });


    // partner section slider

    $('.partner-slider').owlCarousel({
        
        autoplay:true,
        autoplayTimeout:4000,
        slideSpeed:1000,
        paginationSpeed:1000,
        goToFirstSpeed:1000,
        merge:true,
        loop:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


});



// start pop up dish section

let myImages =Array.from( document.querySelectorAll(".img-item img"));
let displayDish = document.querySelector(".dish-overlay"); 
let changImg = document.querySelector(".dish-icon");
let closeBut = document.querySelector("#close");
let nextBut = document.querySelector("#next");
let prevtBut = document.querySelector("#prev");
let currentIndex = 0;



for(let i = 0; i < myImages.length; i++){

    myImages[i].addEventListener("click" , function(e){

        currentIndex =  myImages.indexOf(e.target);
        console.log(currentIndex);

        let imgSrc = e.target.getAttribute("src");

        displayDish.style.display  = "block";

        changImg.style.backgroundImage = `url(${imgSrc})`;
       
    });
};


function next(){

    currentIndex++;

    if(currentIndex == myImages.length){

        currentIndex = 0;
    }

    imgSrc = myImages[currentIndex].getAttribute("src");

    changImg.style.backgroundImage = `url(${imgSrc})`;
};


function prev(){

    currentIndex--;

    if(currentIndex == -1){

        currentIndex = myImages.length - 1;
    }

    imgSrc = myImages[currentIndex].getAttribute("src");

    changImg.style.backgroundImage = `url(${imgSrc})`;
}

function closePopup(){

    displayDish.style.display  = "none";
}

closeBut.addEventListener("click" , closePopup);

nextBut.addEventListener("click" , next);

prevtBut.addEventListener("click" , prev);

// control with keyboard keys

document.addEventListener("keydown" , function(e){

    if(e.key == "ArrowRight"){

        next();

    } else if(e.key == "ArrowLeft"){

        prev();

    } else if(e.key == "Escape"){

        closePopup();
    }
});

