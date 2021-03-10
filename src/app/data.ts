import { IData} from './hero'

export const pieChartData: any = {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'red',
                'yellow',
                'blue',
            ],
        }],
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    options: {
        responsive: true
    }
};

export const lineChartData: any = {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
            label: '數量',
            data: [10, 20, 15, 5, 13],
            pointStyle: 'circle',
        }
        ]
    },
    options:
    {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

export const barChartData: any = {
    type: 'bar',
    data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

export const pieD3Date:IData[] = [
    {
        label:"data1",
        value:1
    },
    {
        label:"data2",
        value:2
    },
    {
        label:"data3",
        value:3
    },
    {
        label:"data4",
        value:4
    },
]