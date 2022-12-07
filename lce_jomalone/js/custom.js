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
  

  //메인이미지 닷버튼 구현
  //[이미지갤러리(닷버튼활용)] 파일 참고
  $(".mainImgs .dot > li").click(function mainImgSlide(){
    $(".mainImgs .dot > li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();
    var pos = i*-1920;
    $(".mainImgs > .imgs").stop().animate({"left":pos+"px"},1000,"easeInCubic");
  });




  var count = 0;
  //메인이미지 자동슬라이드 구현
  //[자동슬라이드ex] 파일 참고
  $(function(){
    setInterval(function(){
      count++;
      if(count >= $(".mainImgs .dot > li").length){count=0;}
      $(".mainImgs .dot > li").removeClass("on").eq(count).addClass("on");
      var fir = $(".mainImgs .imgs > li:first");
      $(".mainImgs .imgs").animate({"left":"-100%"},1800,function(){
        $(this).append(fir).css("left","0px");//대체...
      })
    },5000);
  });
  


  //아이템영역 > 화살표로 아이템 한칸씩 넘기는 기능 구현
  //왼쪽화살표버튼
  $(".prev").click(function(){
    if($(".itemGroup .item").is(":animated")) return false;
    var last = $(".itemGroup .item > li").last();
    $(".item").prepend(last).css("left","-280px").animate({"left":"0px"},700);
  });

  //오른쪽화살표버튼
  $(".next").click(function(){
    if($(".itemGroup .item").is(":animated")) return false;
    var first = $(".itemGroup .item > li").first();
    $(".item").animate({"left":"-280px"},700,function(){
      $(this).append(first).css("left","0px")
    });
  });
  //position값 줘야 천천히 슬라이드되듯 넘어가는거 구현됨


  //더블이미지 자동슬라이드 구현
  $(function(){
    setInterval(function(){
      var first = $("#doubleImgs > .wrap > div:first");
      $("#doubleImgs > .wrap").animate({"left":"-100%"},1500,function(){
        $(this).append(first).css("left","0px");
      })
    },6000);
  });


  //banner_sec 닷버튼 구현 (더블이미지 아래)
  $(".banner_sec_area .dot > li").click(function(){
    $(".banner_sec_area .dot > li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();
    var pos = i*-1920;
    $(".banner_sec").stop().animate({"left":pos+"px"},2000,"easeOutCubic");
  });


  //nightEd까지 스크롤 내리면 요소가 슬라이드되는 이벤트 발생
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var bannerthrTop = $(".banner_thr").offset().top;
    //console.log(nightEdTop);
    if(scroll > bannerthrTop){
      $(".night_fir").addClass("on");
    }else{
      $(".night_fir").removeClass("on");
    }
    var nightThrTop = $("#nightEd .night_thr").offset().top;
    if(scroll > nightThrTop){
      $(".night_thr").addClass("on");
    }else{
      $(".night_thr").removeClass("on");
    }
  });

});