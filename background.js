chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

// Listener for current tab change. 
chrome.tabs.onHighlighted.addListener(onCurrentTabChange);

/*
 * This is called when the current tab changes.
 */
function onCurrentTabChange(highlightInfo) {
    // For some reason I can't call a helper function here...
    // So just copying the content of Lucy's get URL function
    chrome.tabs.getSelected(highlightInfo.windowId, function(tab) {
        var tablink = tab.url;
        const url = new URL(tablink);
        const cleanURL = url.hostname;
        //console.log(cleanURL);
        return cleanURL;
    });
}

function convertSecondsToString(seconds){
  var hour = Math.floor(seconds/60);
  var min = seconds % 60;
  return hour + " hr " + min + " min";
}