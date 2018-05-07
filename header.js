// HEADER

// USE lowercase FOR ALL OPTIONS



var logotext	= "Your Website Title"	// TEXT LOGO TEXT
var logotype	= "graphic"		// LOGO TYPE | graphic | text |
var logolink	= "index.html"		// LINK FOR LOGO



// COPYRIGHT 2015 Allwebco Design 
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




// SEARCH DESKTOP

document.write('<div class="ss-header">');
document.write('<form method="get" action="http://www.google.com/search" class="ss-margin" target="_top">');
document.write('<input type="hidden" name="ie" value="UTF-8">');
document.write('<input type="hidden" name="oe" value="UTF-8">');
document.write('<input type="hidden" name="domains" value="kuresearch.org">');
document.write('<input type="hidden" name="sitesearch" value="kuresearch.org">');

document.write('<table class="ss-box-header"><tr><td colspan="2">');

document.write('<input type="text" name="q" size="15" maxlength="255" class="ss-form">');

document.write('</td><td>');

document.write('<input name="ss-button" type="image" src="picts/sbbutton-off.png" class="ss-button" onmouseover="this.src=\'picts/sbbutton-on.png\'" onmouseout="this.src=\'picts/sbbutton-off.png\'" alt="Search Site"><br>');

document.write('</td></tr></table>');

document.write('</form>');
document.write('</div>');


// SEARCH MOBILE

document.write('<div class="ss-header-mobile">');
document.write('<a href="site_map.htm"><img src="picts/sbbutton-off.png" class="ss-button-mobile" onmouseover="this.src=\'picts/sbbutton-on.png\'" onmouseout="this.src=\'picts/sbbutton-off.png\'" alt="Search Site"></a><br>');
document.write('</div>');



