$(document).ready(function(){

  // data-alt 연결하기
  
  $('.header-menu-left li').mouseenter(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    // 탭 본인에게 attr 속성으로 data-alt 적힌친구들 연결해줌
    const result = $(this).attr('data-alt');
    $('.sub-menu-box').addClass('active');

    $('.sub-menu-box .sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');
    
  
  });
  // 서브메뉴박스에서 마우스 나갔을때 액티브 제거
  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');
    $('.header-menu-left li').removeClass('active');
    $('#hamburger span').removeClass('active');

    // 서브메뉴박스에서 마우스 나갔을때 배너 글씨부분 지워주기
    $('.banner-left p').toggleClass('active');
    $('.banner-go-now').toggleClass('active');
  });


    // 햄버거버튼 액티브 추가해주기
    $('#hamburger').click(function(){
      $('#hamburger span').toggleClass("active");
      $(".header-menu-left").toggleClass("active");

      $('.header-menu-left li').addClass('active');
    
      // 배너 글씨들 지워주기
      $('.banner-left p').toggleClass('active');
      $('.banner-go-now').toggleClass('active');

      $('.sub-menu.menu2').toggleClass('active');
    });

    // .menu2 액티브 추가해주기(다하고 햄버거버튼에 추가해서 넣어주기)

      $('.sub-btn').click(function(){
        $(this).parent('.tab').siblings().removeClass('active');
        $(this).parent().toggleClass('active');
      
      });

   

    // sec-1 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        loop:"true",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay:{
            delay:2000,
            disableOnInteraction:false,
        },
      
      });



     // sec-5 스와이퍼
     var swiper = new Swiper(".sec-Swiper", {
         direction: "vertical",
         slidesPerView:"auto",
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         },
         loop:true,
         speed:1500,
         autoplay:{
          disableOnInteraction:false,
          delay:2500,

         }
       });
    
     // footer-top 스와이퍼

    var swiper = new Swiper(".thd-Swiper", {
      slidesPerView:"auto",
      loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay:{
          disableOnInteraction:false,
          delay:2500,
        }
      });




      // 750px에서 footer 모바일 탭메뉴 on클래스 추가
      $('.btn').click(function(){
        //   btn을 클릭했을때 .bottom에게 온클래스 붙게 해줘
        $('.bottom').siblings().removeClass('on')
        $(this).parent().addClass('on')
        
      });

      


    // 미디어쿼리 1000이상일때 풀페이지 담기
    let ww = $(window).width();
    
    layout();

    function layout(){
    if(ww >= 1000 ){
        
      // 윈도우 너비가 1000이상일때 풀페이지 담아주기
      new fullpage('#wrap', {
        anchors:["anchors1","anchors2","anchors3","anchors4","anchors5","anchors6"],
        scrollBar:true,
        normalScrollElements: ".sec-5,.footer",
        fitToSection:false,
        responsiveWidth: 1000,
        // 그냥 풀페이지 리사이즈가 안먹을 경우 이 코드를 한줄 넣어주기
        licenseKey: 'YOUR_KEY_HERE'
      });
    }else{

    }
  }

    $(window).resize(function(){
      // 리사이즈
      ww = $(window).width();
      layout();

    });
    


    // top-btn
    let btn = $('.top-btn');

    $(window).scroll(function(){
    const sct = $(window).scrollTop();
    console.log(sct);

      if(sct >= 300){
        btn.fadeIn();
      }else{
        btn.fadeOut();
      }
    });
    $(btn).click(function(){
      $('html,body').animate({
        scrollTop:0
      },1000);
    });
});//end