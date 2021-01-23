chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      //console.log('The color is green.');
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


let currentTabURL;
// Set up the current tab URL when the browser is first opened.
chrome.tabs.getSelected(null, function(tab) {
    var tablink = tab.url;
    const url = new URL(tablink);
    const cleanURL = url.hostname;
    currentTabURL = cleanURL;
});

let tabTimeDict = {}; 
let startTime = new Date();
let endTime;


// Listener for current tab change. 
chrome.tabs.onHighlighted.addListener(onCurrentTabChange);

/*
 * This is called when the current tab changes.
 */
function onCurrentTabChange(highlightInfo) {
    // Save info from previous URL's timer, 
    // and then start a new timer.
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var timeDiffSeconds = Math.round(timeDiff);
    //console.log(timeDiffSeconds  + " seconds");

    if (! (currentTabURL in tabTimeDict)) {
        tabTimeDict[currentTabURL] = 0.0;
    }
    tabTimeDict[currentTabURL] += timeDiffSeconds;
    
    // Get the current tab's URL
    // For some reason I can't call a helper function here...
    // So just copying the content of Lucy's get URL function
    chrome.tabs.getSelected(highlightInfo.windowId, function(tab) {
        var tablink = tab.url;
        const url = new URL(tablink);
        const cleanURL = url.hostname;
        currentTabURL = cleanURL; 
        //console.log("new current url: " + currentTabURL);
    });

    // Restart the timer. 
    startTime = new Date();
}