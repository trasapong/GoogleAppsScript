function doGet(e) {
  return HtmlService.createTemplateFromFile('page').evaluate();
}

function userClicked(userInfo) {
  var url = "https://docs.google.com/spreadsheets/d/1ybZdAjHePc6TmgZrZ3eU-YqXcR61WL6cHVqstJ1dPk4/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, new Date()]);

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
