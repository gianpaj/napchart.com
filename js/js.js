




/*
     FILE ARCHIVED ON 16:52:34 Aug 4, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 8:48:02 Sep 16, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){

window.whichSchedule=function(){
	cores=Object.keys(data.charlie).length;
	naps=Object.keys(data.delta).length;
	if(cores===1&&naps===0)
		return "monophasic";
	else if(cores===2&&naps===0)
		return "segmented";
	else if(cores===1&&naps===1)
		return "siesta";
	else if(cores===2&&naps===1)
		return "dualcore1";
	else if(cores===0&&naps===3)
		return "triphasic";
	else if(cores===1&&naps>=2)
		return "everyman";
	else if(cores===0&&naps===6)
		return "uberman";
	else
		return "none";
}
schedules=[
"monophasic",
"segmented",
"siesta",
"dualcore1",
"triphasic",
"everyman",
"uberman"
]
window.changeActiveSchedule=function(immidiateTo){
	if(typeof immidiateTo=="undefined"){
	currentActive=whichSchedule();	
		if(currentActive=="none"){
			$("#sampleScheduleActive").fadeOut();
			return;
		}
	}
	else{
currentActive=immidiateTo;}

	prevTop=document.getElementById("sampleSchedules").getBoundingClientRect().top;
	newTop=document.getElementById(currentActive).getBoundingClientRect().top;
	travelTop=newTop-prevTop;
	if(typeof immidiateTo!="undefined"){
		$("#sampleScheduleActive").css("top",travelTop);
		$("#sampleScheduleActive").css("display","default");
	}
	if($("#sampleScheduleActive").css("display")=="none"){
		$("#sampleScheduleActive").css("top",travelTop);
		$("#sampleScheduleActive").fadeIn();
	}else
	$("#sampleScheduleActive").animate({top:travelTop});
};


ZeroClipboard.config( { swfPath: "zeroclipboard/ZeroClipboard.swf" } );
	
copyLink=document.getElementById("copyLink");
saveURL=document.getElementById("saveURL");
	
var client = new ZeroClipboard( copyLink );

  client.on( 'ready', function(event) {
	 //console.log( 'movie is loaded' );

	client.on( 'copy', function(event) {
	  event.clipboardData.setData('text/plain',saveURL.value);
	} );

	client.on( 'aftercopy', function(event) {
		prevbg=saveURL.style.backgroundColor;
		saveURL.style.backgroundColor="#c0e49f";
		setTimeout(function(){
		saveURL.style.backgroundColor=prevbg;
		},300);
	  //console.log('Copied text to clipboard: ' + event.data['text/plain']);
	} );
  } );

  client.on( 'error', function(event) {
	 //console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
  } );

});














