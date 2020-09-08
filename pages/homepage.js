let homepage = function () {
  let firstNum = element(by.model("first"));
  let secondNum = element(by.model("second"));
  let goButton = element(by.css('[ng-click="doAddition()"]'));
  this.get = function (url) {
    browser.get(url);
  };

  this.addValue = function (firstNo, secondNo) {
    firstNum.sendKeys(firstNo);
    secondNum.sendKeys(secondNo);
    goButton.click();
  };

  this.verifyResult = function(expResult) {
    let result = element(by.cssContainingText(".ng-binding", expResult));
    expect(result.getText()).toEqual(expResult);
   };
};

module.exports = new homepage();
