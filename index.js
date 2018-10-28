$("#key-features").click(function(){
  $('html,body').animate({
    scrollTop: 1150 },'slow');
  });
$("#circle-one").click(function(){
  $(this).css("content","url(picture/black-circle.png)");
  $("#circle-two").css("content","url(picture/black-side.png)");
  $("#circle-three").css("content","url(picture/black-side.png)");
  $("#circle-four").css("content","url(picture/black-side.png)");
  $('html,body').animate({
    scrollTop: 0},'slow');
  });
$("#circle-two").click(function(){
  $(this).css("content","url(picture/black-circle.png)");
  $("#circle-one").css("content","url(picture/black-side.png)");
  $("#circle-three").css("content","url(picture/black-side.png)");
  $("#circle-four").css("content","url(picture/black-side.png)");
  $('html,body').animate({scrollTop: 1150}.'slow');
  });
$("#circle-three").click(function(){
  $(this).css("content","url(picture/black-circle.png)");
  $("#circle-two").css("content","url(picture/black-side.png)");
  $("#circle-one").css("content","url(picture/black-side.png)");
  $("#circle-four").css("content","url(picture/black-side.png)");
  });
$("#circle-four").click(function(){
  $(this).css("content","url(picture/black-circle.png)");
  $("#circle-two").css("content","url(picture/black-side.png)");
  $("#circle-three").css("content","url(picture/black-side.png)");
  $("#circle-one").css("content","url(picture/black-side.png)");
  });
