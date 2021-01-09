describe('Protractor Alert steps',function() {  


    it('Open NonAngular js website Alerts',function() {

        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();

       // browser.switchTo().alert().dismiss().then(function()
       browser.switchTo().alert().accept().then(function()

         {
        //10sec
            browser.sleep(5000);
        })

    })
})