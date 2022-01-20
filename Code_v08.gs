function doGet(e) {
  return HtmlService.createTemplateFromFile('page').evaluate();
}

function userClicked(userInfo) {
  var url = "YOUR_SHEET_URL";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, new Date()]);

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
