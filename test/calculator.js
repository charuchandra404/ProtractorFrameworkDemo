let homepage = require('../pages/homepage');
describe('demo calculator test', function(){
    it('addition test', function(){
        homepage.get("http://juliemr.github.io/protractor-demo/");
        homepage.addValue('5','6');
        homepage.verifyResult('11');
        // element(by.model('first')).sendKeys('5');
        // element(by.model('second')).sendKeys('4');
        // element(by.css('[ng-click="doAddition()"]')).click();
        // let result =  element(by.cssContainingText('.ng-binding','9'));
        // expect(result.getText()).toEqual('9');
        browser.sleep(3000);     
        
    });
    it('substraction', function(){

    });
});