describe('Protractor Dropdown field',function() {
    function Calc(a,b,c) {

        element(by.model("first")).sendKeys(a);
    element.all(by.tagName("option")).each(function(item) {


        item.getAttribute("value").then(function(values) {

          if(values==c) {
                item.click();
         }
        })
    })

        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();

    }

    it('Dropdown',function() {


        browser.get('http://juliemr.github.io/protractor-demo/')
        
        Calc(2,3,"MULTIPLICATION");
        Calc(18,3,"DIVISION");
        Calc(15,3,"SUBTRACTION");
        Calc(20,100,"MODULO");
        Calc(2,3,"ADDITION");

        element.all(by.repeater("result in memory")).each(function(item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                
                console.log(text);

            })

        })
       
    })

})