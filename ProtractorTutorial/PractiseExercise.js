describe('Angular Website',function() {

    function selectItems(product)
    {
         element.all(by.tagName("app-card")).each(function(item)
            {
             item.element(by.css("h4 a")).getText().then(function(text)
              {
                  if(text==product)
                  {
                      item.element(by.css("button[class*='btn-info']")).click();

                  }

              })
             }) 
    }
    
    it('Practise Exercise',function() {

      browser.get("https://qaclickacademy.github.io/protocommerce/");
      browser.driver.manage().window().maximize();

      element(by.name("name")).sendKeys("Mystudents");
      element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
      element(by.id("exampleInputPassword1")).sendKeys("password2");
      element(by.css("input[type='checkbox']")).click();
      element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
      element.all(by.name("inlineRadioOptions")).first().click();
      element(by.buttonText("Submit")).click().then(function()
         {
        element(by.css("div[class*='success']")).getText().then(function(text)
           {
      console.log(text);
           })
         })
         
         // Error Handling example
      /*   element(by.name("name")).clear();
         element(by.name("name")).sendKeys("M").then(function()
         {
            element(by.css("div[class*='alert alert-danger']")).getText().then(function(text)
            {
                console.log(text);
             })
         }) */
         element(by.linkText("Shop")).click();
         selectItems("Samsung Note 8");
         selectItems("iphone X");

        /* element.all(by.tagName("app-card")).each(function(item)
            {
             item.element(by.css("h4 a")).getText().then(function(text)
              {
                  if(text=="Samsung Note 8")
                  {
                      item.element(by.css("button[class*='btn-info']")).click();

                  }

              })
             }) */
            element(by.partialLinkText("Checkout")).getText().then(function(text)
             {
                console.log(text);
                var res=text.split("(");
                expect(res[1].trim().charAt(0)).toBe("2");
             })
         
    })
  })