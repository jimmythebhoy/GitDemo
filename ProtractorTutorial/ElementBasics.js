const { ExpectedConditions } = require("protractor");

describe('Protractor Element Demo',function() {

    var obj= require("./pageObjects/Calculator.js");
    var data= require("./datadriven.js");
    var using= require('jasmine-data-provider');

    beforeEach(function() {
        obj.getURL();
    //    browser.driver.manage().window().maximize(); 
    });
    using (data.Datadriven, function (data, description) 
    {

        it('Calculator'+description,function() {

            //  browser.waitForAngularEnabled(false);
      
              //browser.get('http://juliemr.github.io/protractor-demo/')
           //   obj.getURL();
          //    browser.driver.manage().window().maximize();
             // element(by.model("first")).sendKeys("5");
             // element(by.model("second")).sendKeys("3");
            //  element(by.id("gobutton")).click();
      
            //obj.firstinput.sendKeys("5");
           // obj.secondinput.sendKeys("3");
          //  obj.gobutton.click();
      
            obj.firstinput.sendKeys(data.firstinput);
            obj.secondinput.sendKeys(data.secondinput);
            obj.gobutton.click();
      
              //tagname[attribute='value']
      
              expect(obj.result.getText()).toBe(data.result);
                  obj.result.getText().then(function(text){
                      console.log(text);
              })
             
          })

    });
    

})