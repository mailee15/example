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
  

  
//메인베스트 화살표 넘기기 - 왼쪽화살표버튼
$("#mainBest .prev").click(function(){
  if($("#mainBest .colognes").is(":animated")) return false;
  var last = $("#mainBest .colognes > .box").last();
  $("#mainBest .colognes").prepend(last).css("left","-560px").animate({"left":"0px"},700);
});

//메인베스트 화살표 넘기기 - 오른쪽화살표버튼
$("#mainBest .next").click(function(){
  if($("#mainBest .colognes").is(":animated")) return false;
  var first = $("#mainBest .colognes > .box").first();
  $("#mainBest .colognes").animate({"left":"-560px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});


//시트러스 화살표 넘기기 - 왼쪽화살표
$(".citrus .prev").click(function(){
  if($(".citrus .innerarrow > .box").is(":animated")) return false;
  var last = $(".citrus .innerarrow .box > li").last();
  $(".citrus .innerarrow .box").prepend(last).css("left","-550px").animate({"left":"0px"},700);
});
//시트러스 화살표 넘기기 - 오른쪽화살표
$(".citrus .next").click(function(){
  if($(".citrus .right > .box").is(":animated")) return false;
  var first = $(".citrus .right .box > li").first();
  $(".citrus .right .box").animate({"left":"-550px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});

//프루티 화살표 넘기기 - 왼쪽화살표
$(".fruity .prev").click(function(){
  if($(".fruity .innerarrow > .box").is(":animated")) return false;
  var last = $(".fruity .innerarrow .box > li").last();
  $(".fruity .innerarrow .box").prepend(last).css("left","-550px").animate({"left":"0px"},700);
});
//프루티 화살표 넘기기 - 오른쪽화살표
$(".fruity .next").click(function(){
  if($(".fruity .right > .box").is(":animated")) return false;
  var first = $(".fruity .right .box > li").first();
  $(".fruity .right .box").animate({"left":"-550px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});

//플로럴 화살표 넘기기 - 왼쪽화살표
$(".floral .prev").click(function(){
  if($(".floral .innerarrow > .box").is(":animated")) return false;
  var last = $(".floral .innerarrow .box > li").last();
  $(".floral .innerarrow .box").prepend(last).css("left","-550px").animate({"left":"0px"},700);
});
//플로럴 화살표 넘기기 - 오른쪽화살표
$(".floral .next").click(function(){
  if($(".floral .right > .box").is(":animated")) return false;
  var first = $(".floral .right .box > li").first();
  $(".floral .right .box").animate({"left":"-550px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});

//스파이시 화살표 넘기기 - 왼쪽화살표
$(".spicy .prev").click(function(){
  if($(".spicy .innerarrow > .box").is(":animated")) return false;
  var last = $(".spicy .innerarrow .box > li").last();
  $(".spicy .innerarrow .box").prepend(last).css("left","-550px").animate({"left":"0px"},700);
});
//스파이시 화살표 넘기기 - 오른쪽화살표
$(".spicy .next").click(function(){
  if($(".spicy .right > .box").is(":animated")) return false;
  var first = $(".spicy .right .box > li").first();
  $(".spicy .right .box").animate({"left":"-550px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});

//우디 화살표 넘기기 - 왼쪽화살표
$(".woody .prev").click(function(){
  if($(".woody .innerarrow > .box").is(":animated")) return false;
  var last = $(".woody .innerarrow .box > li").last();
  $(".woody .innerarrow .box").prepend(last).css("left","-550px").animate({"left":"0px"},700);
});
//우디 화살표 넘기기 - 오른쪽화살표
$(".woody .next").click(function(){
  if($(".woody .right > .box").is(":animated")) return false;
  var first = $(".woody .right .box > li").first();
  $(".woody .right .box").animate({"left":"-550px"},700,function(){
    $(this).append(first).css("left","0px");
  });
});


});