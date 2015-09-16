




/*
     FILE ARCHIVED ON 15:59:08 Aug 4, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 8:48:02 Sep 16, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){
	
window.statistics = function(){

//totalSleep
totalSleep=0;
$.each(countOverlappingExcluder(['charlie','delta']),function(i,v){
	if(v.end<v.start)
	totalSleep+=((1440-v.start)+v.end);
	else{
	totalSleep+=v.end-v.start;
	}
});
hm=minutesToStatistics(totalSleep);
$("span.totalSleep").html(hm[0]+"h "+hm[1]+"m");

//totalAwake
totalAwake=1440-totalSleep;
hm=minutesToStatistics(totalAwake);
$("span.totalAwake").html(hm[0]+"h "+hm[1]+"m");
	
//timeSaved and timeSavedYear
timeSaved=480-totalSleep;
if(timeSaved>0){
hm=minutesToStatistics(timeSaved);
$("span.timeSaved").html(hm[0]+"h "+hm[1]+"m");

timeSavedYear=timeSaved*365;
hm=minutesToStatistics(timeSavedYear);
$("span.timeSavedYear").html(hm[0]+"h");

} else{
	$("span.timeSaved").html("0h 0m");
	$("span.timeSavedYear").html("0h 0m");
}

//busyTime
busyTime=0;
$.each(countOverlappingExcluder(true,true,true,true),function(i,v){
	if(v.end<v.start)
	busyTime+=((1440-v.start)+v.end);
	else{
	busyTime+=v.end-v.start;
	}
});

hm=minutesToStatistics(busyTime);
$("span.busyTime").html(hm[0]+"h "+hm[1]+"m");

//freeTime
freeTime=1440-busyTime;
hm=minutesToStatistics(freeTime);
$("span.freeTime").html(hm[0]+"h "+hm[1]+"m");

//totalWork
totalWork=0;
$.each(countOverlappingExcluder(true,false,false,false),function(i,v){
	totalWork+=range(v.start,v.end);
});
hm=minutesToStatistics(totalWork);
$("span.totalWork").html(hm[0]+"h "+hm[1]+"m");
	
};
});