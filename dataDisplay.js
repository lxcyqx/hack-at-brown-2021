//import {getTabTimeDict} from './modules/background.js';


function convertSecondsToString(seconds){
    var hour = Math.floor(seconds/60);
    var min = seconds % 60;
    return hour + " hr " + min + " min";
}

//console.log(getTabTimeDict());

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Google', 'Facebook', 'Amazon'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [3,4,5]
        }]
    },

    // Configuration options go here
    options: {}
});