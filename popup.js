let displayChartButton = document.getElementById('displayChartButton');

chrome.storage.sync.get('color', function(data) {
    displayChartButton.style.backgroundColor = data.color;
    displayChartButton.setAttribute('value', data.color);
});

displayChartButton.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
  