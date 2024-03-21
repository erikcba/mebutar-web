$(window).scroll(function(){
    
   if ($(this).scrollTop() > 360){
      $("#js-fiters").addClass("js-posFixed");
   } else {
      $("#js-fiters").removeClass("js-posFixed", 200);
   }
});
   
////////RRSS

$("#js-shareOpen,#js-shareOpen-mob").click(function(){
   $("#js-share").toggle("slow");
});


/*NavBar*/
$(document).ready(function(){
   $("#js-btnMenu, .js-btnsub").click(function(){
       if (screen.width < 1030) {
           $("#js-menu").toggle("slow");}
   })
}); 
/*NavBarFin*/



