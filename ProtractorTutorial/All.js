describe('Protractor Element Demo',function() {

    it('Locators',function() {

      

        browser.get('http://juliemr.github.io/protractor-demo/')
        
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("5");
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("5");
        element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();

        element.all(by.repeater("result in memory")).count().then(function(text)
        {
            console.log(text);
        })
        element.all(by.repeater("result in memory")).each(function(item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {

                console.log(text);

            })

        })


        /*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        })*/
       
    })

})