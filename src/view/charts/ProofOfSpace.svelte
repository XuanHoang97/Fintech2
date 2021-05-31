<script>
    import ApexCharts from 'apexcharts';import { chart } from "svelte-apexcharts";
    var options = {
        series: [ 20, 15, 65],
        chart: {
            width: 600,
            type: 'pie',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0,
          colors: undefined
        },
        labels: ['Apple', 'Mango', 'Orange'],

        fill: {
            colors: [ '#1E7D35', '#4DBA67', '#12A334' ]
        },
        legend: {
            show: false
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff; font-size: 12px;
                    background:rgba(0, 0, 0, 0.8); padding: 6px 8px; position: relative" class="arrow_box">` +
                    `<span style="display:flex;margin-top: 4px; align-items:center">` + 
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
          breakpoint: 1440,
          options: {
            chart: {
              width: 400
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
            <p class="title">Proof of space size</p>
            <p class="subtitle">Size of proofs of space in the last 10,000 blocks.</p>
        </div>
    </div>

    <div class="pie-chart_render">
        <div use:chart={options} />
    </div>
    
</div>