window.onload = function() {
  $(".drop").click(function() {
    $(".dropmenu").slideToggle("slow");
  });

  function resize() {
    if($(window).width() < 400) {
      $(".drop img").attr('src', 'img/dropdownv2.png');
    } else {
      $(".drop img").attr('src', 'img/dropdown.png');
    }
  }
  resize();
  $(window).on('resize', resize);
}
