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

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([userInfo.firstname, userInfo.lastname, userInfo.option, new Date()]);

}

function getCost(postalCode) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Estimate");
  var data = ws.getDataRange().getValues();

  var postalCodeList = data.map(function(r) {return r[0]; });
  var costList = data.map(function(r) {return r[1]; });
  
  var position = postalCodeList.indexOf(postalCode);
  if (position > -1) {
    return costList[position];
  } else {
    return 'Unavailable';
  }

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
