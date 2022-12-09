$(function(){

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


})