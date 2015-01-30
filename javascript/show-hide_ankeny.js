function hideStuff(id) {
	document.getElementById(id).style.display = 'none';
}
// that's a universal hiding function - sweet!

/*

main menu (per room) is "mainTop";

Naming conventions:
_tc = toggle controls
_mc = menu controls
_fz = focus/zoom
_ks = keystone
_ls = lens shift

*/


// initialize vars so we don't
// have to use quotes:

var mainTop = 'mainTop';

// Worship Center:
var wcMainScreen = 'wcMainScreen';
var wcFoldbackScreen = 'wcFoldbackScreen';
var wcMainScreen_tc = 'wcMainScreen_tc';
var wcMainScreen_mc = 'wcMainScreen_mc';
var wcMainScreen_fz = 'wcMainScreen_fz';
var wcMainScreen_ls = 'wcMainScreen_ls';
var wcFoldbackScreen_tc = 'wcFoldbackScreen_tc';
var wcFoldbackScreen_mc = 'wcFoldbackScreen_mc';
var wcFoldbackScreen_fz = 'wcFoldbackScreen_fz';
var wcFoldbackScreen_ls = 'wcFoldbackScreen_ls';




function showWC(id) {
	hideStuff(mainTop);
	hideWC(id);
	document.getElementById(id).style.display = 'block';
}



/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "WC"
function hideWC(id) {
	hideStuff(wcMainScreen);
	hideStuff(wcFoldbackScreen);
	hideStuff(wcMainScreen_tc);
	hideStuff(wcMainScreen_mc);
	hideStuff(wcMainScreen_fz);
	hideStuff(wcMainScreen_ls);
	hideStuff(wcFoldbackScreen_tc);
	hideStuff(wcFoldbackScreen_mc);
	hideStuff(wcFoldbackScreen_fz);
	hideStuff(wcFoldbackScreen_ls);
}
// end of "WC"

// done - at least for now...;
