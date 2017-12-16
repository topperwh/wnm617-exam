$(document).ready(function() {
                var chart1;
                chart1 = new Highcharts.Chart({
                chart: {
                    renderTo:'chartholder',
                    type: 'bar'              
                },
                title: {
                    text: 'Box Office Collection Comparison (in Millions)'
                },
                xAxis: {
                    categories: ['Martian','Interstellar']
                },
                yAxis: {
                    title: {
                        text: 'Total (in Millions)'
                    }
                },
			    legend: {
			        reversed: true
			    },
			    plotOptions: {
			        series: {
			            stacking: 'normal'
			        }
			    },
                series: [
                {
                    name: '1',
                    data: [77.4,80.5]
                },
                {
                    name: '4',
                    data: [54.5,57.2]
                },
                {
                    name: '8',
                    data: [36.4,35.6]
                },
                {
                    name: '12',
                    data: [23.7,28.5]
                },
                {
                    name: '16',
                    data: [12.8,11.9]
                },
                {
                    name: '24',
                    data: [8.5,4.3]
                },
                {
                    name: '28',
                    data: [2.8,2.2]
                }

                
            ]
                
            });
        })