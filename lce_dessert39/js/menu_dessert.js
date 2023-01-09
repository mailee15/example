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



  
//content영역 카테고리별 전환버튼
//display:block 아니고 flex로 해야함!
$(window).ready(function(){
  $("#select_area .select > li:nth-child(1)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(1), .content_title > .con_tit_bakery").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_bakery").css("display","flex");
  });
  
  $("#select_area .select > li:nth-child(2)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(2), .content_title > .con_tit_cake").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_cake").css("display","flex");
  });
  
  $("#select_area .select > li:nth-child(3)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(3), .content_title > .con_tit_parfait").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_parfait").css("display","flex");
  });
  
  $("#select_area .select > li:nth-child(4)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(4), .content_title > .con_tit_macaron").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_macaron").css("display","flex");
  });
  
  $("#select_area .select > li:nth-child(5)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(5), .content_title > .con_tit_cookie").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_cookie").css("display","flex");
  });
  
  $("#select_area .select > li:nth-child(6)").click(function(){
    $("#select_area .select > li, #content_area .content, #content_area .content_title > div").removeClass("on");
    $("#select_area .select > li:nth-child(6), .content_title > .con_tit_dokyoroll").addClass("on");
    $("#content_area .content").css("display","none");
    $("#content_area .con_dokyoroll").css("display","flex");
  });
})
//소제목부분 왜 안나오지
//엥 갑자기 됨 지금까진 왜안된거야
//버튼 두번째로 눌러볼떄부터 컨텐츠내용이 첫번째 누른 버튼 내용대로 고정되어있던 문제 해결
//display:flex(선택영역만 나타나기) 이전에  $("#content_area .content").css("display","none"); 를 넣어서 해결.





})