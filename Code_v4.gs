function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('page');
}

function userClicked(name) {
  Logger.log(name + " clicked the button!")
}
