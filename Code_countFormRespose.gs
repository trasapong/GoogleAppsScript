function doGet() {
  var tmp = HtmlService.createTemplateFromFile('page');
  var ss = SpreadsheetApp.openById('1Yj8zg2C-IMdELaw3HZB_68uZJT5BTEx1eS6dHl_rre0');
  var ws = ss.getActiveSheet();
  var list = ws.getRange(2,1,ws.getLastRow()-1,2).getValues();
  Logger.log(list);
  var list1 = list.map(function(r) {return r[1]});
  Logger.log(list1);
  var count = [];
  var slots = ['9-10','10-11','11-12'];
  slots.forEach(function(a) {count.push(list1.filter(function(i) {return(i===a)}).length)});
  Logger.log(count);
  tmp.count = count;
  return HtmlService.createHtmlOutput(tmp.evaluate());
}
