$("#key-features").click(function(){
  $('html,body').animate({scrollTop:$('.page2').height()},'slow');});
$("#members").click(function(){
  $('html,body').animate({scrollTop:$('.page2').height() + $('.page3').height()},'slow');});
$("#feedback").click(function(){
  $('html,body').animate({scrollTop: 2600 },'slow');});

$("#circle-one").click(function(){$('html,body').animate({scrollTop: 0},'slow');});
$("#circle-two").click(function(){$('html,body').animate({scrollTop: $('.page2').height()},'slow');});
$("#circle-three").click(function(){$('html,body').animate({scrollTop: $('.page2').height() + $('.page3').height()},'slow');});
$("#circle-four").click(function(){$('html,body').animate({scrollTop: 2600},'slow');});
$(window).scroll(function(){
  var scrollVal=$(this).scrollTop();
  if(scrollVal<=50){
    $("#circle-one").css("content","url(picture/black-circle.png)");
    $("#circle-two").css("content","url(picture/black-side.png)");
    $("#circle-three").css("content","url(picture/black-side.png)");
    $("#circle-four").css("content","url(picture/black-side.png)");
  }
  if(scrollVal>=$('.page2').height()-20&& scrollVal< $('.page2').height()+ 20){
    $("#circle-one").css("content","url(picture/black-side.png)");
    $("#circle-two").css("content","url(picture/black-circle.png)");
    $("#circle-three").css("content","url(picture/black-side.png)");
    $("#circle-four").css("content","url(picture/black-side.png)");
  }
  if(scrollVal>=$('.page2').height() + $('.page3').height()-20 && scrollVal< $('.page2').height() + $('.page3').height()+20){
    $("#circle-one").css("content","url(picture/black-side.png)");
    $("#circle-two").css("content","url(picture/black-side.png)");
    $("#circle-three").css("content","url(picture/black-circle.png)");
    $("#circle-four").css("content","url(picture/black-side.png)");
  }
  if(scrollVal>=2600){
    $("#circle-one").css("content","url(picture/black-side.png)");
    $("#circle-two").css("content","url(picture/black-side.png)");
    $("#circle-three").css("content","url(picture/black-side.png)");
    $("#circle-four").css("content","url(picture/black-circle.png)");
  }
});
