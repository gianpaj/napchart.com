




/*
     FILE ARCHIVED ON 16:03:04 Aug 4, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 8:48:02 Sep 16, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){
$(window).on('popstate', function(event) {
    var state = event.originalEvent.state;

    if (state) {
        selectColor( state.selectedColor );
    }
});

});