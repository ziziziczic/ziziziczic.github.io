$(function(){
    $('.bg-holder').parallaxScroll({
        friction:0.3
    });

    // $('.bxslider').bxSlider({
    //     slideWidth:1000,
    //     speed:300,
    //     captions:true,
    //     auto:true,
    //     stopAutoOnClick:true,
    //     adaptiveHeight:true,
    //     autoHover:true
    //   });

    $('.owl-carousel').owlCarousel({
        items:2,
        margin:10,  // 항목간 간격
        loop:true,  
        autoplay:true,  
        autoplayTimeout: 2000,
        autoplayHoverPause:true, // 항목위에 마우스 올라오면 일시멈춤
        nav:true,
        navText:['PRE' , 'NEXT']

    });
    
});