var ECommerce = require('\.MyStoreHomePage.js');
var Test = require('\.TestData.json');
Test.strURL;

describe('To Open URL', function() {

    it('Test User can Access the URL',function(){
    ECommerce.OpenPage(Test.strURL);  
    });

    });