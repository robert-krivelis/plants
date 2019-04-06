
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var cm = globalmoist.percent;
console.log('Current Value:');
console.log(cm);


var speedData = {
  labels: [-5, -4, -3, -2, -1, 0],
  datasets: [{
    label: "Moisture Percentage",
    data: [cm, cm, cm, cm, cm, cm, cm, cm, cm],
    lineTension: 0.5,
    fill: true,
    
    borderColor: 'blue',
    backgroundColor: 'transparent',
    
    pointBorderColor: 'blue',
    pointBackgroundColor: 'blue',
    pointRadius: 3,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  }]
};

var chartOptions = {
  legend: {
    display: false,
    position: 'top',
    labels: {
      boxWidth: 30,
      fontColor: 'black'
    }
  },
  scales: {
    yAxes: [{
      display: true,
      gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
      ticks: {
        suggestedMin: cm,    // minimum will be 0, unless there is a lower value.
        // OR //
        suggestedMax: cm ,
        beginAtZero: false   // minimum value will be 0.
      }
    }],
    xAxes: [{
      display: true,
      gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
      ticks: {
        suggestedMin: 5,    // minimum will be 0, unless there is a lower value.
        min: -5,
        
        beginAtZero: false   // minimum value will be 0.
        }
    }]
  },
  
  title: {
    display:false,
    fontColor: 'black',
    text: "Moistness",
    position: 'top'
  }
};
var cnt = 0;
setInterval(adddata,1000)
function adddata(){
  var newdata = Math.floor(Math.random()*(75-65)+65);
	lineChart.data.datasets[0].data.shift();
	lineChart.data.datasets[0].data.push(globalmoist.percent);
  console.log(globalmoist.percent)
 	lineChart.update();
 	cnt++;
}


var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
