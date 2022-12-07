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


function Slide(){
  var now = $(".mainImgs > li").first();
  $(".mainImgs > li").css("display","block"); 
  //아래 좌우/닷버튼의 fadeIn&fadeOut에서 실행되는 li요소들의 display:none을 해결하기 위해 display:block을 줌
  $(".mainImgs > li .txt").css("display","block");


  $(".mainImgs").animate({"left":"-1635px"},1000,function(){
    $(this).append(now).css("left","0px");
  });
 };
 //5초에 한번씩 Slide 함수 실행
 var timer = setInterval(Slide,6000);

//.dots(닷버튼)에 마우스 올리면 슬라이드기능 멈춤
 $("#mainban .dots").mouseover(function(){
  clearInterval(timer);
 });
//.dots(닷버튼)에서 마우스가 떠나면 timer변수를 다시 할당하여 슬라이드 재실행
 $("#mainban .dots").mouseout(function(){
  timer = setInterval(Slide,6000);
 });
 //.pages(좌우화살표버튼)에 마우스 올리면 슬라이드기능 멈춤
 $("#mainban .pages").mouseover(function(){
  clearInterval(timer);
 });
 //.pages(좌우화살표버튼)에서 마우스가 떠나면 timer변수를 다시 할당하여 슬라이드 재실행
 $("#mainban .pages").mouseout(function(){
  timer = setInterval(Slide,6000);
 })



//prev, next, dot버튼 구현 (fadeIn/fadeOut)
var slideIndex = 1;  // 변수선언 먼저! 그 다음에 함수
showSlides(slideIndex);
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