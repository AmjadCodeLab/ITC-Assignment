var MyStorehomepage = function(){
    global.width = 1260; 
    global.height = 800;
    global.tempObject =  	{};
    global.protractor = protractor;
      
    // Function or Method to Open URL
    this.OpenPage = function(strURL){
    browser.get(strURL);
    expect(browser.getCurrentUr()).toContain(strURL);
    browser.sleep(2000);
    };
    //Function To click on SignIn option
    this.SignInOption = function(){
        var SignBtn = element(by.className("login"));
        expect(SignBtn.isDisplayed()).toBe(true);
        browser.sleep(800);
        SignBtn.click();
    }
    // Function for Authentic the email id
    this.AuthenticationPage = function(strEmail){
        // Validate the Authentic Page
        var Authintication = element(by.cssContainingText('[class="page-heading"]','Authentication'));
        Authintication.getText().then(function(txt){
         if(txt == "Authentication"){
             // Enter Email Address
             var EmailId = element(by.id("email_create"));
             expect(EmailId.isPresent()).toBe(true);
             EmailId.sendKeys(strEmail);
             browser.sleep(800);
             //Click Create Account Button
             element(by.xpath('//*[@class="icon-user left"]')).click();
             browser.sleep(800);
         }
         else{
             throw "Exception - Emailid Not Found";
         }
        })
    }
    // Function to Create Account 
    this.AccountCreation = function(){
        //Validate the Create Page
        var CreatePage = element(by.xpath('//*[@id="noSlide"]/h1'));
        CreatePage.getText().then(function(txt){
        if(txt=="Create an account"){
            //Call PersonalDetail Function
            this.PersonalDetails(strTitle,strFirstName,strLastName,strEmail,strPassword,strDay,strMonth,strYear);
            // Call Address Function
            this.AddressDetails(strCompany,strAddress,strCity,strSate,strPostNumber,strCountry,strPNumber,strRefernce);
            // Click On REgister Button
            element(by.name('submitAccount')).click();
            browser.sleep(800);
            //Verify Account Page
            var SuccessAccount = element(by.className('class="page-heading"'));
            expect(SuccessAccount.getText()).toBe('My account');
        }
        else{
            throw "Excpetion - Invalid Details Eneter in Account creation"
        }
        });
        
    }
    // Function for Home Search Option
    this.HomeSearch = function(strItem){
        var SearcBox = element(by.name('search_query'));
        SearcBox.isPresent().then(function(txt){
            if(txt==true){
                SearcBox.sendKeys(strItem);
                browser.sleep(800);
                // Submit Search iteam
                element(by.name('submit_search')).click();
                browser.sleep(800);
                // Verify Search Result Page
                var verifySearch=element(by.cssContainingText('[class="navigation_page"]','Search'));
                expect(verifySearch.isPresent()).toBe(true);

            }
            else{
                throw "Exception - Not able to search"
            }
        })
    }

    // Function to Select item from List
    this.SelectIteam = function(strItemName){
        var ItemName = element(by.cssContainingText('[class="product-name"]',strItemName));
        browser.sleep(1000);
        ItemName.click();
        browser.sleep(1000);
        // Verify Iteam Page
        var ItemPage = element(by.cssContainingText('[class="navigation-pipe"]',strItemName));
        ItemName.getText().then(function(txt){
            if(txt==strItemName){
                console.log("***Correct Item Selected****");
            }
            else{
                throw "Exception - Correct Item not selected";
            }
        })
    }
   // Function to add the item in cart
   this.AddtoCart = function(){
       element(by.cssContainingText('[type="submit"]','Add to cart')).click();
       browser.sleep(800);
       // Verify Success Message
       var SucessMessage = element(by.cssContainingText('[class="icon-ok"]','Product successfully added to your shopping cart'));
       expect(SucessMessage.isDisplayed()).toBe(true);
   }
// Function for Checkout
this.ItemChekout = function(strPayment){
    // Click on Procceed to Chekout option
    var ProccedBtn=element(by.css('[title="Proceed to checkout"]')).click();
    browser.sleep(800);
    // Verify the Shipping Page
    var VerifyShipPage = element(by.cssContainingText('[class="navigation_page"]','Your shopping cart'));
    expect(VerifyShipPage.isPresent()).toBe(true);
    // Verify Item is in Stock
    var InStock = element(by.cssContainingText('[class="label label-success"]','In stock'));
    expect(InStock.isDisplayed()).toBe(true);
    // Click Proceed Iteam Again
    ProccedBtn.click();
    browser.sleep(800);
    ProccedBtn.click();
    browser.sleep(800);
    element(by.id('uniform-cgv')).click();
    browser.sleep(800);
    ProccedBtn.click();
    browser.sleep(800);
    element(by.cssContainingText('[class="payment_module"]',strPayment)).click();
    browser.sleep(800);
    element(by.className('button btn btn-default button-medium')).click();
    browser.sleep(800);
    //Verify Success message
    var SuccessShip = element(by.cssContainingText('[class="alert alert-success"]','Your order on My Store is complete.'));
    expect(SuccessShip.isPresent()).toBe(true);
    browser.sleep(800);

}
    // Function to add Personal Details
    this.PersonalDetails = function (strTitle,strFirstName,strLastName,strEmail,strPassword,strDay,strMonth,strYear){
        // Enter Title
        var Tile = element(by.cssContainingText('[class="radio-inline"]',strTitle));
        Tile.click();
        browser.sleep(800);
        // Eneter First Name
        element(by.name('customer_firstname')).sendKeys(strFirstName);
        browser.sleep(800);
        //Enter Last Name
        element(by.name('customer_lastname')).sendKeys(strLastName);
        browser.sleep(800);
        // Email Validation
        var email = element(by.id('email'));
        email.getText().then(function(txt){
            if(txt==strEmail){
                console.log("**Email Already Present");
            }
            else{
                email.sendKeys(strEmail);
                browser.sleep(800);
            }
        })
        // Enter PassWord
        var Password = element(by.name('passwd'));
        Password.sendKeys(strPassword);
        browser.sleep(800);
        if(strPassword.length()<=4){
            throw "Exception - Eneter 5digit Password"
        }
        // Eneter Date of Birth
      element(by.name('days')).element(by.cssContainingText('option', strDay)).click();
      browser.sleep(800);
      element(by.name('months')).element(by.cssContainingText('option', strMonth)).click();
      browser.sleep(800);
      element(by.name('years')).element(by.cssContainingText('option', strYear)).click();
      browser.sleep(800);
    }

    // Function for Address 
this.AddressDetails = function(strCompany,strAddress,strCity,strState,strPostNumber,strCountry,strPNumber,strRefernce){
     element(by.name('company')).sendKeys(strCompany);
     browser.sleep(800);
     element(by.name('address1')).sendKeys(strAddress);
     browser.sleep(800);
     element(by.name('city')).sendKeys(strCity);
     browser.sleep(800);
     element(by.name('id_state')).element(by.cssContainingText('option', strState)).click();
      browser.sleep(800);
      element(by.id('postcode')).sendKeys(strPostNumber);
      browser.sleep(800);
      element(by.name('id_country')).element(by.cssContainingText('option', strCountry)).click();
      browser.sleep(800);
    element(by.name('phone_mobile')).sendKeys(strPNumber);
    browser.sleep(800);
    element(by.name('alias')).sendKeys(strRefernce);
    browser.sleep(800);
}
                                            
    }
                    
    module.exports = new MyStoreHomePage();
    
             
    