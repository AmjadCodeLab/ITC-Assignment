var ECommerce = require('\.MyStoreHomePage.js');
var Test = require('\.TestData.json');

describe('To Create New Account', function() {

    it('Test User can Create New Acount',function(){
    ECommerce.OpenPage(Test.strURL);  
    ECommerce.SignInOption();
    ECommerce.AuthenticationPage(Test.strEmail);
    ECommerce.AccountCreation(Test)
    });

    });