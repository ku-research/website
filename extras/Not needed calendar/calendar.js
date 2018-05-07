// Begin

// NOTE: For calendar fonts and colors edit the template CSS file




// USE ONLY lowercase FOR ALL OPTIONS


var showcalendar	 = "yes"		// SHOW CALENDAR | yes | no |

var curntmonth		 = "yes"		// SHOW CURRENT MONTH | yes | no |

var calyear		 = "2015"		// YEAR TO SHOW IF "no" IS SET ABOVE

var calmonth		 = "2"			// MONTH TO SHOW IF "no" IS SET ABOVE

var CalendarLink	 = "calendar.htm"	// LINK FOR CALENDAR NUMBERS

var calendarAlign	 = "center"		// ALIGN CALENDAR | left | center | right |




// COPYRIGHT 2015 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



   if (showcalendar == "yes") {

var DayOfWeek = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

var Calendar = new Date();

   if (curntmonth == "no") {
Calendar.setFullYear(calyear)
Calendar.setMonth(calmonth-1)
Calendar.setDate("1")
}
var year = Calendar.getFullYear();
var month = Calendar.getMonth();
var today = Calendar.getDate();
var weekday = Calendar.getDay();


var DaysOfWEEK = 7;
var DaysOfMonth = 31;
var WriteCal = '';

Calendar.setDate(1);
Calendar.setMonth(month);



var TrStart = '<tr>';
var TrEnd = '</tr>';

   if (curntmonth == "no") {
var highlight_start = '<td class="caldates calspace">';
}
else {
var highlight_start = '<td class="calhilite calspace">';
}

var highlight_end   = '</td>';

var TdStart = '<td class="caldates calspace">&nbsp;';
var TdEnd = '</td>';

WriteCal =  '<table class="calendar '+calendarAlign+'-div"><tr><td>';
WriteCal += '<table class="calendarinner"><tr>';
WriteCal += '<td colspan="' + DaysOfWEEK + '" class="calendartitle">';
WriteCal += month_of_year[month]  + '   ' + year + ' ' + TdEnd + TrEnd;
WriteCal += TrStart;

for(index=0; index < DaysOfWEEK; index++)
{

if(weekday == index)
WriteCal += '<td class="calday calspace">' + DayOfWeek[index] + '</span>' + TdEnd;

else
WriteCal += '<td class="caldays calspace">' + DayOfWeek[index] + TdEnd;
}

WriteCal += TdEnd + TrEnd;
WriteCal += TrStart;

for(index=0; index < Calendar.getDay(); index++)
WriteCal += TdStart + '  ' + TdEnd;

for(index=0; index < DaysOfMonth; index++)
{
if( Calendar.getDate() > index )
{

  week_day =Calendar.getDay();

  if(week_day == 0)
  WriteCal += TrStart;

  if(week_day != DaysOfWEEK)
  {

  var day  = Calendar.getDate();

  if( today==Calendar.getDate() )
  WriteCal += highlight_start +'<a href="'+CalendarLink+'#'+day+'">'+ day + '</a>' + highlight_end + TdEnd;

  else
  WriteCal += '<td bgcolor="#FFFFFF" align="center" class="caldates"><a href="'+CalendarLink+'#'+day+'">' + day + '</a>' + TdEnd;
  }

  if(week_day == DaysOfWEEK)
  WriteCal += TrEnd;
  }

  Calendar.setDate(Calendar.getDate()+1);

}

WriteCal += '</td></tr></table>';

document.write(WriteCal);

document.write('</td></tr></table>');

}
