if($(window).width() < 800) {
  $(".tri #span").addClass("menuToggle");
  $(".tri ul").addClass("menu");
  $(".menuToggle #span").css("display","block");
  $("#span").click(function(){
    $("#span").toggleClass("clicked");
    $(".menu").toggle("slow");
  });
}
