//  window.addEventListener('load' , function(){
//     document.querySelector('.btn').addEventListener('click',function(e){
//         e.preventDefault();
//         var divNav = document.querySelector('#cont_nav');
//         if(divNav.style.display === 'block'){
//             divNav.style.display = 'none';
//         }else{
//             divNav.style.display = 'block';
//         }
//         this.classList.toggle('on');
//     });
//  });
 
$(function(){
    // total menu
    $('.btn').click(function(e){
        e.preventDefault();
        // $('#cont_nav').css('display','block');
        // $('#cont_nav').show();
        // $('#cont_nav').fadeIn();
        // $('#cont_nav').slideDown();
        // $('#cont_nav').toggle();
        // $('#cont_nav').fadeToggle();
        $('#cont_nav').slideToggle(200);
        $(this).toggleClass('on');
    });

    // moving banner
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
      });

    //   tabmenu
    var $tabMenu = $('.tab_menu');
    $tabMenu.find('ul ul').hide();
    $tabMenu.find('ul > li.active ul').show();

    function tabSelected(e){
        e.preventDefault();
        var $this = $(this);
        $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    }

    $tabMenu.find('ul > li > a').click(tabSelected).focus();
});

