function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('page');
}

function userClicked(userInfo) {
  var url = "https://docs.google.com/spreadsheets/d/1ybZdAjHePc6TmgZrZ3eU-YqXcR61WL6cHVqstJ1dPk4/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, new Date()]);

  // Logger.log(name + " clicked the button!")
}
