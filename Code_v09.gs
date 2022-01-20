function doGet(e) {
  var tmp = HtmlService.createTemplateFromFile('page').evaluate();
  var output = HtmlService.createHtmlOutput(tmp);
  output.addMetaTag('viewport','width=device-width,initial-scale=1');
  return output;
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
