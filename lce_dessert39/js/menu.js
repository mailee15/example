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





})