$("#key-features").click(function(){
  $('html,body').animate({
    scrollTop: 1150 },'slow');
  });
$("#members").click(function(){
  $('html,body').animate({
    scrollTop: 1860 },'slow');
  });
$("#feedback").click(function(){
  $('html,body').animate({
    scrollTop: 2600 },'slow');
  });

$("#circle-one").click(function(){
  $('html,body').animate({
    scrollTop: 0},'slow');
  });
$("#circle-two").click(function(){
  $('html,body').animate({scrollTop: 1150},'slow');
  });
$("#circle-three").click(function(){
  $('html,body').animate({scrollTop: 1860},'slow');
  });
$("#circle-four").click(function(){
  $('html,body').animate({scrollTop: 2600},'slow');
  });
$(window).scroll(function(){
  var scrollVal=$(this).scrollTop();
  if(scrollVal<=600){
    $("#circle-one").css("content","url(picture/black-circle.png)");
    $("#circle-two").css("content","url(picture/black-side.png)");
    $("#circle-three").css("content","url(picture/black-side.png)");
    $("#circle-four").css("content","url(picture/black-side.png)");
  }
  if(scrollVal>=1150&&scrollVal<1500){
    $("#circle-one").css("content","url(picture/black-side.png)");
    $("#circle-two").css("content","url(picture/black-circle.png)");
    $("#circle-three").css("content","url(picture/black-side.png)");
    $("#circle-four").css("content","url(picture/black-side.png)");
  }
  if(scrollVal>=1860&&scrollVal<2300){
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
