// HEADER

// USE lowercase FOR ALL OPTIONS



var logotext	= "Your Website Title"	// TEXT LOGO TEXT
var logotype	= "graphic"		// LOGO TYPE | graphic | text |
var logolink	= "index.html"		// LINK FOR LOGO



// COPYRIGHT 2015 © All web
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// LOGO


document.write('<div id="headerdiv" class="headercolor">');

   if (logotype == "graphic") {
document.write('<a href="'+logolink+'"><img src="picts/logo.jpg" class="logo-respond"></a>');
}
   if (logotype == "text") {
document.write('<div class="center-div td-middle">');
document.write('<div OnSelectStart=\'return false;\' class="td-center td-middle"><a href="'+logolink+'" class="textlogo">'+logotext+'</a></div>');
document.write('</div>');
}

document.write('</div>');
