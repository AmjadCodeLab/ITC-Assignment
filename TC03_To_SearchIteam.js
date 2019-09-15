var ECommerce = require('\.MyStoreHomePage.js');
var Test = require('\.TestData.json');

describe('To Search Iteam in Home Page', function() {

    it('Test User can Search Iteam from Home Search',function(){
    ECommerce.OpenPage(Test.strURL);  
    ECommerce.HomeSearch(Test.strItem);
    });

    });