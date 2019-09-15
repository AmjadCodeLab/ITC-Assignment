var ECommerce = require('\.MyStoreHomePage.js');
var Test = require('\.TestData.json');

describe('To Add Iteam in Cart', function() {

    it('Test User can Select and add iteam in cart',function(){
    ECommerce.OpenPage(Test.strURL);  
    ECommerce.HomeSearch(Test.strItem);
    ECommerce.SelectIteam(Test.strItemName);
    ECommerce.AddtoCart();
    });

    });