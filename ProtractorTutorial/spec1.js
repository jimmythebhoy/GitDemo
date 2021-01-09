describe('Protractor Baby Steps',function() {

    it('Open Angular js website',function() {

      //  browser.waitForAngularEnabled(false);

        browser.get("https://angularjs.org");

        browser.get('http://juliemr.github.io/protractor-demo/').then(function()
        {
          console.log("I am the last step to execute");
        })
        
    })

})