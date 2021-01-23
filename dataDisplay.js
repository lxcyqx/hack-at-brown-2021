//import getTabTimeDict from './background.js';


function convertSecondsToString(seconds){
    var hour = Math.floor(seconds/60);
    var min = seconds % 60;
    return hour + " hr " + min + " min";
}

console.log(getTabTimeDict());
let colors = [
    '#4ECDC4',
    '#B8F2E6',
    '#9A7EAC',
    '#96A5C9',
    '#FFA69E'
]
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Google', 'Facebook', 'Amazon', 'Netflix', 'Hulu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: colors,
            data: [3,4,5, 10, 50],
        }]
    },
    

    // Configuration options go here
    options: {
        
    }
});