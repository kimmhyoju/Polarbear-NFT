// main.js

// Sample data, replace this with your actual data
const hourlyLabels = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
                      '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

const weatherData = [-3, -2, -2, -2, -2, -2, -3, -2, -2, -2, -2, -2,
                     -3, -2, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1]; 

const priceData = [0.21, 0.2, 0.22, 0.28, 0.2, 0.19, 0.19, 0.23, 0.24, 0.25, 0.24, 0.22, 0.33, 0.34, 0.38, 0.38, 0.4, 0.39, 0.37, 0.25, 0.28, 0.27, 0.28, 0.27]; 

const lastYearWeatherData = [-8, -7, -6, -4, -6, -8, -11, -8, -8, -4, -6, -4,
                             -3, 5, 5, 5, 6, 6, 3, -3, 1, -3, 1, 1]; 


const ctx = document.getElementById('priceChart').getContext('2d');


const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: hourlyLabels, 
        datasets: [{
            label: 'Price',
            data: priceData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132)',
            yAxisID: 'y-axis-price',
        }, {
            label: 'This Year Temperature',
            data: weatherData,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192)',
            yAxisID: 'y-axis-temp',
        }, {
            label: 'Last Year Temperature',
            data: lastYearWeatherData,
            borderColor: 'rgb(160, 150, 180)', 
            backgroundColor: 'rgba(160, 150, 180)',
            yAxisID: 'y-axis-temp',
        }],
    },
    options: {
        scales: {
            y: [{
                id: 'y-axis-price',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: true,
                },
            }, {
                id: 'y-axis-temp',
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    },
});
