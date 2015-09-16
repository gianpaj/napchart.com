




/*
     FILE ARCHIVED ON 16:30:47 Aug 4, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 8:48:01 Sep 16, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){
window.canvas = document.getElementById("myCanvas");
window.ctx = canvas.getContext("2d");
window.currentActive="none";
window.clockCanvas = document.getElementById("clockCanvas");
window.cctx = clockCanvas.getContext("2d");
window.keys=["alfa","charlie","delta"];
window.color={
	alfa:"#1f1f1f",
	charlie:"#c70e0e",
	delta:"#c70e0e"
}
window.debugging=false;
//variables
window.canvasbgcolor="#F4F4F4";
window.currentEnd={
	alfa:0,charlie:0,delta:0};
window.resetData=function(){
window.data={
	alfa:{},
	charlie:{},
	delta:{}
};
}
resetData();
window.startend=["start","end"];
window.markers=[];
window.sleepTemp=[];
window.napTemp=[];
window.workTemp=[];
window.dx=0;
window.dy=0;

 window.requestNextAnimationFrame =
   (function () {
      return window.requestAnimationFrame   ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         window.msRequestAnimationFrame     ||

         function (callback, element) { // Assume element is visible
            var self = this,
                start,
                finish;

            window.setTimeout( function () {
               start = +new Date();
               callback(start);
               finish = +new Date();

               self.timeout = 1000 / 60 - (finish - start);

            }, self.timeout);
         };
      }
   )
();

$("#canvasWrapper").css("background-color",canvasbgcolor);








});

