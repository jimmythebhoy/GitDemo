describe('Protractor Element Demo',function() {

    it('Locators',function() {

      //  browser.waitForAngularEnabled(false);

        browser.get('http://juliemr.github.io/protractor-demo/')
        //Repeater, chain locators and css for identical tags
        element(by.model("first")).sendKeys("5");
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        })
       
    })

})