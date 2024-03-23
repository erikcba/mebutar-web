
////////BTN-SINTOMAS
$("#js-sintoOpen, #js-sintoOpen-menu").click(function(){
   $("#js-seleAcc,#js-prevencion,#js-tratamiento").hide().css("transition","0.2s");
   $("#js-sintomas").show();
});
$("#js-prevOpen, #js-prevOpen-menu").click(function(){
   $("#js-seleAcc,#js-sintomas,#js-tratamiento").hide().css("transition","0.2s");
   $("#js-prevencion").show();
});

$("#js-trataOpen, #js-trataOpen-menu").click(function(){
   $("#js-seleAcc,#js-prevencion,#js-sintomas").hide().css("transition","0.2s");
   $("#js-tratamiento").show();
});
////////BTN-VOLVER
$(".btnVolver").click(function(){
   $("#js-sintomas,#js-prevencion,#js-tratamiento").hide().css("transition","0.2s");
   $("#js-seleAcc").show().css("transition","0.2s");
});


////////VIDEOS-PARASITOSIS

 //document.getElementById("video1").style.display = "none";
 //document.getElementById("video2").style.display = "none";
 //document.getElementById("video3").style.display = "none";
 //document.getElementById("video4").style.display = "none";
 //document.getElementById("video5").style.display = "none";


$("#js-vidOpen-01").click(function(){
   $("#js-ModVid01").show(500);
   $("#video1").show();
   $("#video1").get(0).play();
   $("#js-tituModal").text('Qué es la parasitosis intestinal');
});
$("#js-vidOpen-02").click(function(){
   $("#js-ModVid01").show();
   $("#video2").show();
   $("#video2").get(0).play();
   $("#js-tituModal").text('Cómo se contagia la parasitosis');
});

$("#js-vidOpen-03").click(function(){
   $("#js-ModVid02").show(500);
   $("#video3").show();
   $("#video3").get(0).play();
   $(".sect05").addClass("js-padVidAcciones").css("transition","0.2s");
   $("#js-tituModal-Acc").text('Campaña de higiene activa');
});
$("#js-vidOpen-04").click(function(){
   $("#js-ModVid02").show();
   $("#video4").show();
   $("#video4").get(0).play();
   $(".sect05").addClass("js-padVidAcciones").css("transition","0.2s");
   $("#js-tituModal-Acc").text('Campaña de higiene activa');
});
$("#js-vidOpen-05").click(function(){
   $("#js-ModVid02").show();
   $("#video5").show();
   $("#video5").get(0).play();
   $(".sect05").addClass("js-padVidAcciones").css("transition","0.2s");
   $("#js-tituModal-Acc").text('Campaña de higiene activa');
});

$("#js-btnCerrar").click(function(){
   $("#js-ModVid01,#js-ModVid02").hide();
   $("#video1,#video2").css("display","none");
   $("#video1").get(0).pause();
   $("#video1").get(0).currentTime = 0;
   $("#video2").get(0).pause();
   $("#video2").get(0).currentTime = 0;
});

$("#js-btnCerrar02").click(function(){
   $("#js-ModVid01,#js-ModVid02").hide();
   $("#video3,#video4,#video5").css("display","none");
   $(".sect05").removeClass("js-padVidAcciones").css("transition","0.2s");
   $("#video3").get(0).pause();
   $("#video3").get(0).currentTime = 0;
   $("#video4").get(0).pause();
   $("#video4").get(0).currentTime = 0;
   $("#video5").get(0).pause();
   $("#video5").get(0).currentTime = 0;
});

