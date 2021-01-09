describe('Protractor Element Demo',function() {
    function Add(a,b) {

        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();

    }

    it('Locators',function() {


        browser.get('http://juliemr.github.io/protractor-demo/')
        
        Add(2,3);
        Add(7,8);
        Add(10,23);
        Add(5,6);
        Add(9,4);

        element.all(by.repeater("result in memory")).each(function(item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                
                console.log(text);

            })

        })
       
    })

})