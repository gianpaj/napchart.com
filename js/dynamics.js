




/*
     FILE ARCHIVED ON 20:14:00 Dec 24, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 8:47:08 Sep 16, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function() {
window.removeInputBox=function(deleteObj,callback){
		console.log(JSON.stringify(deleteObj));
		target={};
		for(barHolderObj in deleteObj){
		target[barHolderObj]={}
		for(id in deleteObj[barHolderObj]){
		selector=barConvert(barHolderObj)+id;
		$("div#"+selector).remove();
		e=data[barHolderObj][id].end;
		s=data[barHolderObj][id].start;
		middlepoint=calc(((calc(e,-s))/2),s);
		target[barHolderObj][id]={start:middlepoint,end:middlepoint};
		}}
		animate(target,200,"quadraticEasingIn",function(){
		for(barHolderObj in deleteObj){
		for(id in deleteObj[barHolderObj]){
		delete data[barHolderObj][id];
		}
	  	}
		if(typeof callback!="undefined")
		callback();
		});
}
window.addInputBox=function(type,startval,endval){
	//Sleep Nap Work Activity

	if(type=="Sleep"){
		/*which id is free?*/
		for(i=0;i<200;i++){
			if($("#"+type+i).length==0){
				count=i;
				break;
			}
		}
		container="#inputContainerSleeps";
		contentToAdd='<div id="Sleep'+count+'" class="inputBox">Sleep:  <input class="clock sleep" sleepornap="Sleep"  maxlength="4" id="startSleep'+count+'" size="1" type="text"> - <input class="clock sleep" sleepornap="Sleep" id="endSleep'+count+'" maxlength="4" type="text"> <button class="remove" id="Sleep'+count+'">x</button></div>';

	if(typeof startval=="undefined"||typeof endval=="undefined")
	if($(container+"> .inputBox").length==0){//add default values
	startval=1410;
	endval=420;
	}else{
	for(i in data.charlie)
		id=i;
	startval=data.charlie[id].end+90;
	endval=data.charlie[id].end+180;
	}
	$(container).append(contentToAdd);
	$("#startSleep"+count).val(minutesToClock(startval));
	$("#endSleep"+count).val(minutesToClock(endval));

	currentEnd["charlie"]=endval;
	updateInputValues();

	}
	if(type=="Nap"){
		/*which id is free?*/
		for(i=0;i<200;i++){
			if($("#"+type+i).length==0){
				count=i;
				break;
			}
		}
		container="#inputContainerNaps";
		contentToAdd='<div id="Nap'+count+'" class="inputBox">Nap:  <input class="clock nap" sleepornap="Nap"  maxlength="4" id="startNap'+count+'" size="1" type="text"> - <input sleepornap="Nap" value="20" class="duration" id="durationNap'+count+'" maxlength="4" type="number" min="5" max="90"> <button class="remove" id="Nap'+count+'">x</button></div>';

	if(typeof startval=="undefined"||typeof endval=="undefined")
	if($(container+"> .inputBox").length==0){//add default values
	startval=960;
	}else{
	for(i in data.delta)
		id=i;
	startval=data.delta[id].end+90;

	}
	$(container).append(contentToAdd);
	$("#startNap"+count).val(minutesToClock(startval));
	//add default values
	updateInputValues();
	}
	if(type=="Work"){
		/*which id is free?*/
		for(i=0;i<200;i++){
			if($("#"+type+i).length==0){
				count=i;
				break;
			}
		}
		container="#inputContainerWorks";
		contentToAdd='<div id="Work'+count+'" class="inputBox"><div class="workSlider slider" id="Work'+count+'Slider"></div><input id="startWork'+count+'" class="work clock" type="text" /><input id="endWork'+count+'" class="work clock" type="text" /><button class="remove" id="Work'+count+'">x</button></div>';
	if(typeof startval=="undefined"||typeof endval=="undefined")
	if($(container+"> .inputBox").length==0){//add default values
	startval=540;
	endval=1020;
	}else if($(container+"> .inputBox").length==1){
	startval=1170;
	endval=1380;
	}else{
	for(i in data.alfa)
	id=i;
	if(data.alfa[id].end<=1320){
	startval=data.alfa[id].end+60+120;
	endval=data.alfa[id].end+180+120;
	}else{
	startval=60;
	endval=180;
	}
	}
	$(container).append(contentToAdd);
		$('#Work'+count+"Slider").noUiSlider({
					start: [ startval, endval ],
					connect: true,
					margin: 20,
					step:10,
					range: {
						'min': 0,
						'max': 1439
					}
				});
sliderUpdater("#Work"+count+"Slider");
	}
	if(type=="Activity"){
		/*which id is free?*/
		for(i=0;i<200;i++){
			if($("#"+type+i).length==0){
				count=i;
				break;
			}
		}
		container="#inputContainerActivities";
		contentToAdd='<div id="Activity'+count+'" class="inputBox"><div class="activitySlider slider" id="Activity'+count+'Slider"></div><input id="startActivity'+count+'" class="activity clock" type="text" /><input id="endActivity'+count+'" class="activity clock" type="text" /><button class="remove" id="Activity'+count+'">x</button>';
	if(typeof startval=="undefined"||typeof endval=="undefined"){
	if($(container+"> .inputBox").length==0){//add default values
		console.log("HORSE");
	startval=900;
	endval=1100;
	}else{
	for(i in data.bravo)
	id=i;
	if(data.bravo[id].end<=1320){
	startval=data.bravo[id].end+60+120;
	endval=data.bravo[id].end+180+120;
	}else{
	startval=60;
	endval=180;
	}
	}
	}
	$(container).append(contentToAdd);
		$('#Activity'+count+"Slider").noUiSlider({
					start: [ startval, endval ],
					connect: true,
					margin: 20,
					step:10,
					range: {
						'min': 0,
						'max': 1439
					}
				});
sliderUpdater("#Activity"+count+"Slider");
	}
	return (type+count);
	$("input.clock").ForceNumericOnly();
	}

});
