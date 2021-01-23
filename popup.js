function addWebsite(){
  let container = document.getElementById('website-container');
  let websiteInfo = document.createElement('div');

  let websiteName = document.createElement('span');
  websiteName.setAttribute("class", "website-name");
  websiteName.innerHTML = "Google.com";
  websiteInfo.appendChild(websiteName);

  let numHours = document.createElement('span');
  numHours.innerHTML = "1hr 30min";
  numHours.setAttribute("class", "num-hours");
  websiteInfo.appendChild(numHours);

  container.appendChild(websiteInfo);
}

addWebsite();

function getTopWebsites(dict){
  let items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  })

  items.sort(function(first, second) {
    return second[1] - first[1];
  })
  console.log(items.slice(0, 5));
  return items.slice(0,5);
}

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
  