var url = "https://docs.google.com/spreadsheets/d/1ybZdAjHePc6TmgZrZ3eU-YqXcR61WL6cHVqstJ1dPk4/edit#gid=0";

function doGet(e) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws.getDataRange().getValues();
  var tmp = HtmlService.createTemplateFromFile('page');
  tmp.title = "My Title";
  tmp.list = list.map(function(r) {return r[0]; });
  var output = HtmlService.createHtmlOutput(tmp.evaluate());
  output.addMetaTag('viewport','width=device-width,initial-scale=1');
  return output;
}

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, new Date()]);

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
