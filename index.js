$("#key-features").click(function(){
  $('html,body').animate({
    scrollTop: $(".second-text").offset().top},'slow');
  });
$("#key-features").mouseenter(function(){
  $(this).css("cursor","Pointer");
  });
$("#key-features").mouseleave(function(){
  $(this).css("cursor","default");
  });

