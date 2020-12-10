$(function () {
    $("#nav-toggle").on("click", function () {
      $("body").toggleClass("open");
    });
  });


  $(function () {
    const $window = $(window);
  
    $window.on("scroll", function () {
      $(".js-fade").each(function () {
        $target = $(this);
        $targetOffsetTop = $target.offset().top;
        if ($window.scrollTop() + $window.height() > $targetOffsetTop) {
          $(this).addClass("active");
        } 
      });
    });
  });


