chrome.tabs.query({}, function(tabs) {
    for(var i = 0; i < tabs.length; i++){
        chrome.tabs.executeScript( tabs[i].id, {file: 'js/click-count-logic.js'}, function(){} );
    }
});
chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.executeScript( tab.id, {file: 'js/click-count-logic.js'}, function(){} );
});
chrome.tabs.onUpdated.addListener(function(tab) {
    chrome.tabs.executeScript( tab.id, {file: 'js/click-count-logic.js'}, function(){} );
});