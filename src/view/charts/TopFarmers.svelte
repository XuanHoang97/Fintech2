<script>
    import ApexCharts from 'apexcharts';
    import { chart } from "svelte-apexcharts";
    var options = {
        series: [20, 15, 65],
        chart: {
            width: 600,
            type: 'donut',
            zoom: {
            enabled: false
          },
          toolbar: {
            show: false,
            tools: {
            download: false
            }
        }
        },
        stroke: {
          width: 0,
        },
        labels: ['Apple', 'Mango', 'Orange'],
        dataLabels: {
          enabled: false
        },
        
        fill: {
            colors: [ '#1E7D35', '#4DBA67', '#12A334' ]
        },
        legend: {
            show: false
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            startAngle: -320,
            endAngle: 40,
            donut: {
              size: '55%'
            }
          }
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff;font-size: 12px;
                    background:rgba(0, 0, 0, 0.8); padding: 6px 8px; position: relative" class="arrow_box">` +
                    `<span style="display: flex;margin-top: 4px; align-items: center">` + 
                      `<div style="width: 8px; height:8px; background: #fff; margin-right:4px; border: 1px solid #12A334;">`+ `</div>`+ 
                        w.globals.labels[seriesIndex] +
                         ": " +
                        series[seriesIndex] + `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
        },
        responsive: [{
          breakpoint: 376,
          options: {
            chart: {
              width: 400,
              background: "#F3F4FC",

            }
          }
        }]
    };

</script>
<style lang="scss">
    @import '../../styles/chart';
</style>

<div class="chart">
    <div class="chart_header">
        <div class="chart_icon">
            <img src="./assets/img/chart.svg" alt="">
        </div>
        
        <div class="chart_title">
            <p class="title">Top farmer addresses</p>
            <p class="subtitle">Addresses that won the most blocks in the last 10,000 blocks. </p>
        </div>
    </div>

    <div class="pie-chart_render">
        <div use:chart={options} />
    </div>
    
</div>