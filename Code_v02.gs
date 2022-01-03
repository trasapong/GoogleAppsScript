function doGet(e) {
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile('page');
}
