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
  