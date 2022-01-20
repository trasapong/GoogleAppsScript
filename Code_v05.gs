function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('page');
}

function userClicked(name) {
  var url = "YOUR_SHEET_URL";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([name]);

  // Logger.log(name + " clicked the button!")
}
