$(function(){
  //스크롤 내리면 fixed된 최상단 로고영역이 사라지고 스크롤 올리면 다시 보이게 하기
  //https://webdir.tistory.com/481 참고

  var didScroll;
  // 스크롤시에 사용자가 스크롤했다는 것을 알림
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header .logo").outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });
  // hadScrolled()를 실행하고 didScroll 상태를 재설정

  setInterval(function(){
    if(didScroll){
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    //동작을 구현
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    if(st > lastScrollTop && st > navbarHeight){
      $("header .logo").removeClass("nav-down").addClass("nav-up");
    }else{
      if(st + $(window).height() < $(document).height()){
        $("header .logo").removeClass("nav-up").addClass("nav-down");
      }
    }
    lastScrollTop = st;
  };


  //주메뉴 마우스오버 이벤트 발생
  $(".gnb .menu > li").mouseover(function(){
    $(".menu .wrap").stop().slideDown(300);
  });
  //주메뉴 마우스아웃 이벤트 발생
  $(".gnb .menu li").mouseout(function(){
    $(".menu .wrap").stop().slideUp(300);
  });


  //페이지 로딩되면 mainFlower 영역 서서히 나타내기

  $("#pink_bg .mainFlower").css("display","none");
  $("#pink_bg .mainFlower").fadeIn(2000);
  $("#pink_bg .mainFlower .hover").delay(500).fadeIn(2500);


  //bg2 요소들 천천히 제자리에서 나타나기
  

  $(".bg2 .con1").css("display","none");
  $(".bg2 .con2").css("display","none");
  $(".bg2 .con3").css("display","none");
  $(".bg3 .txtbox, .bg3 .imgbox").css("display","none");
  $(".bg4 .txt").css("display","none");
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var containTop = $("#contain").offset().top;
    if(scroll > containTop){
      $(".bg2 .con1").delay(300).fadeIn(2000);
    }
    //var wrapTop = $("#pink_bg #wrap").offset().top;
    if(scroll > "700"){
      $(".bg2 .con2").delay(700).fadeIn(2000);
    }
    if(scroll > "900"){
      $(".bg2 .con3").delay(1100).fadeIn(2000);
    }
    //var con3Top = $(".bg2 .con3").offset().top;
    if(scroll > "1800"){
      $(".bg3 .txtbox, .bg3 .imgbox").delay(300).fadeIn(1000);
    }
    var bg3Top = $(".bg3").offset().top;
    if(scroll > bg3Top){
      $(".bg4 .txt").delay(700).fadeIn(1000);
    }
    
  });
  
  
});

  
