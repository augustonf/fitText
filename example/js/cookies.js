/* Cookie functions for data persistency */

/* Cookie Setter */

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* Cookie Getter */

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/* Cookie Isset */

function issetCookie(cname) {
	var cookie = getCookie(cname);
	if (cookie != "") {
		return true;
	} 
	return false;
}

/* Clear Cookie */
function clrCookies(cname){
	setCookie(cname,"",0);
}
