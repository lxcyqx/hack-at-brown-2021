// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };

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
  console.log("add website");
}

addWebsite();
  