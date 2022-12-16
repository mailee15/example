$(function(){

  //우측하단 Top버튼 구현 (부드럽게)
  $("#topBtn").click(function(){
    // window.scrollTo({top:0, behavior:'smooth'});
    $("html, body").animate({scrollTop:0},400);
    return false;
  });
  

 //우측하단 fixed된 top버튼들이 특정 위치부터 나타나게 하기
 $(function(){
  $(window).scroll(function(){
    var scroll_height = $(document).scrollTop();
    if(600 <= scroll_height){
      $(".Btn").fadeIn();
    }
    else{
      $(".Btn").fadeOut();
    }
  });
 });


// max-width:1050px시
  // 메뉴 토글버튼 슬라이드업다운
  $(".headAll .toggle").click(function(){
    $(".headAll .gnb").stop().slideToggle("fast");
  });

 $(window).resize(function(){
    var winWd = $(window).width();
    if(winWd >= 1050){
      $(".headAll .gnb").css("display","flex");
    }else{
      $(".headAll .gnb").css("display","none");
    }
  });


//max-width:860px시
  //#or부분 슬라이드바 생성
    $(".menu_scrollBar .bar").draggable({
      axis : "x",
      containment:'parent',
      drag:function(){
        var barWd = $(".menu_scrollBar").width() - $(".menu_scrollBar .bar").width();
        console.log(barWd);

        var min = 0;
        // var max = -140;
        var max =  $(".sel_sec").width() - $(".sel_sec .select > li").innerWidth() * $(".sel_sec .select > li").length;
        console.log(max)
        var barLeft = $("#select_area .bar").css("left");
        barLeft = parseInt(barLeft);
        var pos = (barLeft * (max-min))/(barWd*0.9)+min;

        $(".sel_sec .select").css("margin-left",pos);
    
      }
    });
  // console.log(barWd);
  

  
//전체사이즈
  //메뉴 위 like버튼(하트) 클릭시 빨간색 하트 보이게, 다시 클릭시 원래의 빈하트로 변경(찜 버튼)
  $("#content > li .like").click(function(){
    $(this).css("display","none");
    $(this).next().toggle();
  });
  $("#content > li .like_red").click(function(){
    $(this).css("display","none");
    $(this).prev().css("display","block");
  });


})