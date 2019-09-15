var ECommerce = require('\.MyStoreHomePage.js');
var Test = require('\.TestData.json');

describe('To Place Order', function() {

    it('Test User can Select and Place Order',function(){
    ECommerce.OpenPage(Test.strURL);  
    ECommerce.HomeSearch(Test.strItem);
    ECommerce.SelectIteam(Test.strItemName);
    ECommerce.AddtoCart();
    ECommerce.ItemChekout(This.strPayment);
    });

    });