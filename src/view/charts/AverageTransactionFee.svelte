<script>
    import ApexCharts from 'apexcharts';import { chart } from "svelte-apexcharts";
    var options = {
          series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 70, 50]
        }],
          chart: {
          type: 'bar',
          height: "100%",
          fontFamily: 'Inter, sans-serif',
          foreColor: '#9CA3AF',
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
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          labels: {
            formatter: function (val){
              return "$" + val + "K"
            }
          }
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff;font-size: 12px;
                    background:rgba(0, 0, 0, 0.8); padding: 6px 8px; " class="arrow_box">` +
                    `<span >` + w.globals.labels[dataPointIndex] +
                         
                         `<div style="display: flex;margin-top: 4px; align-items: center">`+
                          `<div style="width: 8px; height:8px;margin-right: 4px; background: #fff; border: 1px solid #12A334;">`+ `</div>` + 
                        `<p style= "margin-left: 3px">`+ w.globals.seriesNames[0]+`</p>` + ": " +
                        "$"+series[seriesIndex][dataPointIndex]+"K" + `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
        },
        fill: {
          opacity: 1,
          colors: ['#12A334']
        },
        grid: {
          strokeDashArray: 5,
        },
        responsive: [{
          breakpoint: 1440,
          options: {
            chart: {
              background: "#F4F5FD",
              
            },
            grid: {
              show: false,
            }
          },
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

            <p class="title">Average transaction fee</p>
            <p class="subtitle">Fee per coin addition/removal over 192 blocks (~1 hour). Coinbase rewards are not included. Related but not an exact mapping to fees paid for transactions.</p>
        </div>
    </div>

    <div class="chart_render">
        <div use:chart={options} />
    </div>
    
</div>