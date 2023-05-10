$(function(){
    var firstmenu = $('nav > ul');
    var header = $('header');

    firstmenu.mouseover(function(){
        header.stop().animate({height:'240px'},200);
    })
              .mouseout(function(){
        header.stop().animate({height:'90px'},200)
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween:0,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $('.drop').on('click',function(){
        $('.drop_down').toggleClass('active');
      });

      $('.button').on('click',function(){
        $('.mobile_menu').slideToggle()
      })
})