var url = "YOUR_SHEET_URL";

function doGet(e) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws.getDataRange().getValues();
  var htmlListArray = list.map(function(r){return '<option>'+r[0]+'</option>';}).join('');
  Logger.log(htmlListArray);
  var tmp = HtmlService.createTemplateFromFile('page');
  tmp.title = "My Title";
  tmp.list = htmlListArray;
  var output = HtmlService.createHtmlOutput(tmp.evaluate());
  output.addMetaTag('viewport','width=device-width,initial-scale=1');
  return output;
}

function getCalendarBusyDays() {
  var startDate = new Date();
  var endDate = new Date();
  endDate.setYear(startDate.getFullYear()+1);

  var calendar = CalendarApp.getCalendarById('YOUR_CALENDAR_ID');
  var events = calendar.getEvents(startDate, endDate);
  var days = events.map(function(e) { return new Date(Utilities.formatDate(e.getStartTime(), calendar.getTimeZone(), "MM-dd-yyyy") + " GMT+7").valueOf() });
  
  var uniqueDays = [];

  days.forEach(function(d) {
    if (uniqueDays.indexOf(d) === -1) {
      uniqueDays.push(d)
    }
  });

  Logger.log(uniqueDays);
  return(uniqueDays);
}

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, userInfo.pc, userInfo.est, userInfo.date, new Date()]);

}

function getCost(postalCode) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Estimate");
  var data = ws.getDataRange().getValues();

  var postalCodeList = data.map(function(r) {return r[0]; });
  var costList = data.map(function(r) {return r[1]; });
  
  var position = postalCodeList.indexOf(postalCode);
  if (position > -1) {
    return "$" + costList[position].toFixed(2);
  } else {
    return 'Unavailable';
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
