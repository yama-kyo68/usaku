$(function() {
    var h = $(window).height();
     $('#wrapper').css('display','none');
     $('#loading').height(h).css('display','block');
    });
   

   
    $(function(){
     setTimeout('stopload()',5000);
     });
   
     function stopload(){
        $("#loading").fadeOut("slow",function () {
            $("#wrapper").stop(true).fadeIn("slow");
          });
    }
