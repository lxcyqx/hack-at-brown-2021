


function convertSecondsToString(seconds){
    var hour = Math.floor(seconds/3600);
    var min = Math.floor((seconds - hour * 3600)/60);
    return hour + " hr " + min + " min";
}

  function addWebsite(websiteName, websiteTimeSecond){
    let container = document.getElementById('website-container');
    let websiteInfo = document.createElement('div');
    websiteInfo.setAttribute("class", "website-info");
  
    let websiteNameContainer = document.createElement('div');
    websiteNameContainer.setAttribute("class", "website-name");
    websiteNameContainer.innerHTML = websiteName;
    websiteInfo.appendChild(websiteNameContainer);
  
    let numHoursContainer = document.createElement('div');
    numHoursContainer.innerHTML = convertSecondsToString(websiteTimeSecond);
    numHoursContainer.setAttribute("class", "num-hours");
    websiteInfo.appendChild(numHoursContainer);
  
    container.appendChild(websiteInfo);
    container.appendChild(document.createElement("br"));
  }

  function emptyWebsiteInfoContainer() {
    document.getElementById('website-container').innerHTML = '';
  }

  
  function getTopWebsites(dict){
    let items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    })
  
    items.sort(function(first, second) {
      return second[1] - first[1];
    })
    //console.log(items.slice(0, 5));
    return items.slice(0,5);
  }


let colors = [
    '#4ECDC4',
    '#B8F2E6',
    '#9A7EAC',
    '#96A5C9',
    '#FFA69E'
]
var ctx = document.getElementById('myChart').getContext('2d');

let currentTabTimeDict; 

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        emptyWebsiteInfoContainer()
        
      currentTabTimeDict = request.currentTabTimeDict; 
      const currentTopFiveWebsites = getTopWebsites(currentTabTimeDict);
      
      let websiteLabels = [];
      let websiteWeights = [];
      for (var i = 0; i < currentTopFiveWebsites.length; i++) {
          websiteLabels.push(currentTopFiveWebsites[i][0]);
          websiteWeights.push(currentTopFiveWebsites[i][1]);
          addWebsite(currentTopFiveWebsites[i][0], currentTopFiveWebsites[i][1]);
      }

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
    
        // The data for our dataset
        data: {
            labels: websiteLabels,
            datasets: [{
                label: 'Top websites',
                backgroundColor: colors,
                data: websiteWeights,
            }]
        },
        
        // Configuration options go here
        options: {
            
        }
    });
    }
  );
