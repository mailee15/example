$(function(){

// 닷버튼 구현 ...근데안됨
  $("#mainban .dots > li").click(function mainImgSlide(){
    $("#mainban .dots > li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();
    var pos = i*-1635;
    $("#mainban .mainImgs").stop().animate({"left":pos+"px"},1000,"easeInCubic");
  });


  //메인 슬라이드 구현... 되려나
  $(function(){
    setInterval(function(){
      count++;
      if(count >= $("#mainban .dots > li").length){count=0;}
      $("#mainban .dots > li").removeClass("on").eq(count).addClass("on");
      var fir = $("#mainban .mainImgs > li:first");
      $("#mainban .mainImgs").animate({"left":"-100%"},1800,function(){
        $(this).append(fir).css("left","0px");)
    )}
  })

})