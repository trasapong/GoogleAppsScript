function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('page');
}

function userClicked() {
  Logger.log("Someone clicked the button!")
}
