$(function(){

  $("#topBtn").click(function(){
    // window.scrollTo({top:0, behavior:'smooth'});
    $("html, body").animate({scrollTop:0},400);
    return false;
  });

// 닷버튼 구현 ...근데좀이상
  // $("#mainban .dots > li").click(function mainImgSlide(){
  //   $("#mainban .dots > li").removeClass("on");
  //   $(this).addClass("on");

  //   var i = $(this).index();
  //   var pos = i*-1635;
  //   $("#mainban .mainImgs").stop().animate({"left":pos+"px"},1000,"easeInCubic");
  // });


  //메인 슬라이드 구현
  //ul위치인 .mainImgs에 position:relative 주면 슬라이드되듯 넘어감!

//   setInterval(function(){
//   var now = $(".mainImgs > li").first();
//   $(".mainImgs").animate({"left":"-1635px"},1000,function(){
//     $(this).append(now).css("left","0px");
//   });
//  },5000);

 var slideIndex = 1;  // 변수선언 먼저! 그 다음에 함수
 showSlides(slideIndex);
 //5초에 한번씩 Slide 함수 실행
 var timer = setInterval(slide,5000);            //

//.dots(닷버튼), 좌우화살표버튼에 마우스 올리면 슬라이드기능 멈춤
 $("#mainban .dots, #mainban .pages").mouseover(function(){
  clearInterval(timer);
 });
//.dots(닷버튼), 좌우화살표버튼에서 마우스가 떠나면 timer변수를 다시 할당하여 슬라이드 재실행
 $("#mainban .dots, #mainban .pages").mouseout(function(){
  timer = setInterval(slide,5000);
 });

// ***
 function slide(){
  var slides = $(".mainImgs > li");
  var dots = $(".dots > li");
  slideIndex++;

  if(slideIndex > slides.length){slideIndex = 1}
  slides.css("display","none");
  dots.removeClass("active");
  slides.eq(slideIndex-1).css("display","block");
  dots.eq(slideIndex-1).addClass("active");
 }


//prev, next, dot버튼 구현 (fadeIn/fadeOut)
$(".pages .prev").click(function(){
  showSlides(slideIndex -= 1);
});
$(".pages .next").click(function(){
  showSlides(slideIndex += 1);
});
$(".dots > li").click(function(){
  var i = $(this).index()+1;
  showSlides(slideIndex = i);
});

function showSlides(n){
  var slides = $(".mainImgs > li");
  var dots = $(".dots > li");

  if(n > slides.length){slideIndex = 1}
  if(n < 1){slideIndex = slides.length}
  slides.css("display","none");
  dots.removeClass("active");
  slides.eq(slideIndex-1).css("display","block");
  dots.eq(slideIndex-1).addClass("active");
}

//  $(".pages .next").click(Slide);
//  $(".pages .prev").click(function(){
//   var last = $(".mainImgs > li:last");
//   $(".mainImgs").prepend(last);
//   // $(".mainImgs").prepend(last).animate();
//  });
 // *** 왼쪽버튼 부드럽게 넘어가는걸 못하겠다//////


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

//  $(".nature_wrap .arrow_btn").click(function(){
//   if($(".nature_imgGroup").is(":animated")) return false;
//   var last = $(".nature_imgGroup > li").last();
//   $(".nature_imgGroup").animated({"left":"0px"},200,function(){
//     $(this).prepend(last).css("left","-500px");
//   });
//  });




// 1.nature - prev버튼클릭시
$("#fir_nature .arrow_btn .prev").click(function(){
  $(".nature_imgGroup").prepend($(".nature_imgGroup > li:last"));
});
$("#fir_nature .arrow_btn .next").click(function(){
  $(".nature_imgGroup").append($(".nature_imgGroup > li:first"));
});


//3. bestseller - dessert/beverage 전환버튼
$("#thr_bestseller .title_area .btns .btn_des").click(function(){
  $("#thr_bestseller .title_area .btns .btn_bev").removeClass("on");
  $("#thr_bestseller .title_area .btns .btn_des").addClass("on");
  $("#thr_bestseller .bestcontent.bev").css("display","none");
  $("#thr_bestseller .bestcontent.des").css("display","block");
});
$("#thr_bestseller .title_area .btns .btn_bev").click(function(){
  $("#thr_bestseller .title_area .btns .btn_des").removeClass("on");
  $("#thr_bestseller .title_area .btns .btn_bev").addClass("on");
  $("#thr_bestseller .bestcontent.des").css("display","none");
  $("#thr_bestseller .bestcontent.bev").css("display","block");
});



//3. bestseller - 좌우버튼 슬라이드 -  1-dessert
$("#thr_bestseller .des .arrow_btn .prev").click(function(){
  $(".bestDes").prepend($(".bestDes > li:last"));
});
$("#thr_bestseller .des .arrow_btn .next").click(function(){
  $(".bestDes").append($(".bestDes > li:first"));
});

//3. bestseller - 좌우버튼 슬라이드 -  2-beverage
$("#thr_bestseller .bev .arrow_btn .prev").click(function(){
  $(".bestBev").prepend($(".bestBev > li:last"));
});
$("#thr_bestseller .bev .arrow_btn .next").click(function(){
  $(".bestBev").append($(".bestBev > li:first"));
});



//5. interior - 이미지목록 fadeIn & fadeOut

// setInterval = (interiorSlide, 1000);

// function interiorSlide(){
//   $("#fif_interior .inter_Group").prepend($(".inter_Group > li:last"));
//   $("fif_interior .inter_Group").append($(".inter_Group > li:first"));
// }


// function showSlide(n){
//   var slides = $(".inter_Group > li");

//   if(n > slides.length){slideIndex = 1}
//   if(n < 1){slideIndex = slides.length}
//   slides.css("display","none");
//   slides.eq(slideIndex-1).css("display","block");
// }

setInterval(fadeInOut,3000);

function fadeInOut(){
  $("#fif_interior .inter_Group").prepend($(".inter_Group > li:last").fadeIn());
  $("fif_interior .inter_Group").append($(".inter_Group > li:first"));
}
   
 
  // 

  //   ㅠㅠㅠㅠㅠㅠ



 

//  메뉴 토글버튼 > .sub 아코디언메뉴
  // $(".headAll .gnb > li").click(function(){
  //   $(this).children().slideToggle("fast");
  // })
  $(".headAll .toggle").click(function(){
    $(".headAll .gnb").slideToggle("fast");
  })


  // $(".gnb > li > a").click(function(){
  //   console.log($(this).next().css("display"))
  //   if($(this).next(".sub").css("display") == "none"){
  //     $(".sub").slideUp();
  //   }
  //   $(this).next().slideDown();
  // })


  // var winWd = $(window).width();

  //윈도우크기 줄어들면 gnb메뉴가 flex되어 상단표출
  $(window).resize(function(){
    var winWidth = $(window).width();

    if(winWidth > 1600){
      $(".headAll .gnb").css("display","block");
    }else if(winWidth > 1050){
      $(".headAll .gnb").css("display","flex");
    }else{
      $(".headAll .gnb").css("display","none");
  }}
  //여기를 } 로 닫아야하는데 닫으면 메인배너 높이가 1000px이 되어버리고 안닫으면 다시 height:auto;대로 창 크기 맞춰 메인배너이미지 사이즈 조정됨. 대체 왜지... 그렇다고 이 코드를 지우면 또 1000px이 됨...... 왜.... 넌 메인배너 아니고 헤더잖아.... 
  //안닫으면 메인배너 슬라이드도 안돌아감ㅎㅎ 난리났네 아
);


  
  


  //화면 처음 실행시 1200px(실제 1184px)이하이면
  //윈도우크기 변경 없어도 (3,5영역)타이틀/컨텐츠 순서 바꾸기.
  // if(winWd <= 1184){
  //   $("#thr_bestseller .title_area").insertAfter("#thr_bestseller .bestMenu_area");
  //   $("#fif_interior .title_area").insertAfter("#fif_interior .interior_area");
  //   }else{
  //   $("#thr_bestseller .bestMenu_area").insertAfter("#thr_bestseller .title_area");
  //   $("#fif_interior .interior_area").insertAfter("#fif_interior .title_area");
  // }


  
  // 여기서부터 적용안됨... 원래는 됐는데 오ㅐ!!!


  //윈도우크기 줄어들면 (=1200이하)  (3,5영역)타이틀/컨텐츠 순서 바꾸기.

  // ***
  // $(window).resize(function(){
  //   var winWd = $(window).width();
  //   if(winWd >= 1184){
  //     $("#thr_bestseller .title_area").insertAfter("#thr_bestseller .bestMenu_area");
  //   }else{
  //     $("#thr_bestseller .bestMenu_area").insertAfter("#thr_bestseller .title_area");
  //   }
  // });

  // $(window).resize(function(){
  //   var winWd = $(window).width();
  //   if(winWd >= 1184){
  //     $("#fif_interior .title_area").insertAfter("#fif_interior .interior_area");
  //   }else{
  //     $("#fif_interior .interior_area").insertAfter("#fif_interior .title_area");
  //   }
  // });


  
//1184px(1200)이하일때 3, 5영역의 타이틀 영역을 각각 컨텐츠 영역 앞으로 오게 순서 바꿔주는 함수 선언
  function areaChangeThr(){
    var winWd = $(window).width();
    if(winWd >= 1184){
      $("#thr_bestseller .title_area").insertAfter("#thr_bestseller .bestMenu_area");
    }else{
      $("#thr_bestseller .bestMenu_area").insertAfter("#thr_bestseller .title_area");
    }
  };
  function areaChangefIf(){
    var winWd = $(window).width();
    if(winWd >= 1184){
      $("#fif_interior .title_area").insertAfter("#fif_interior .interior_area");
    }else{
      $("#fif_interior .interior_area").insertAfter("#fif_interior .title_area");
    }
  };

  
  $(window).resize(function(){
    areaChangeThr();
    areaChangefIf();
  });

  // window.onload(
  //   areaChangeThr + areaChangefIf;
  // )   //적용안됨

  $(document).ready(function(){
    areaChangeThr();
    areaChangefIf();
  }); // 헉 이걸로 드디어 맨 처음 페이지 로드시에도 윈도우사이즈 감지해서 3,5영역의 제목/컨텐츠영역 순서 바꿔주는 함수 실행 성공! resize 안한 처음상태에선 안됐었는데ㅠㅠㅠ 드디어 성공 window.onload 나 body에 onload 넣는거 알아보고 이것저것 해봤었는데ㅠㅠ 이렇게 간단했을줄은...
  








  

  //혼자 해본것
  // var winWd = $(window).width();

  // function resizethr(){
  //   if(winWd >= 1184){
  //     $("#thr_bestseller .title_area").insertAfter("#thr_bestseller .bestMenu_area");
  //   }else{
  //     $("#thr_bestseller .bestMenu_area").insertAfter("#thr_bestseller .title_area");
  //  }
  // };

  // function resizefif(){
  //   if(winWd >= 1184){
  //     $("#fif_interior .title_area").insertAfter("#fif_interior .interior_area");
  //   }else{
  //     $("#fif_interior .interior_area").insertAfter("#fif_interior .title_area");
  //   }
  // }

  // location.reload(
  //   resizethr();
  //   resizefif();
  // )

  // $(window).resize(function(){
  //   resizethr();
  //   resizefif();
  // });
})