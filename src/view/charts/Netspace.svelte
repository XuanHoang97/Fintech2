<script>
    import ApexCharts from 'apexcharts';import { chart } from "svelte-apexcharts";
    var options = {
        chart: {
            height: "100%",
            width: "100%",
            type: "area",
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
        
        xaxis: {
            // type: 'datetime',
            categories: ["Jan", "Feb", "Mar", "Dec"],
        },
        
        series: [{
            name: 'Netspace (PiB)',
            data: [1,2,3,4]
        }],
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff; background:rgba(0, 0, 0, 0.8); font-size: 12px;
                    padding: 6px 8px; " class="arrow_box">` +
                    `<span >` + w.globals.categoryLabels[dataPointIndex] + 
                         
                         `<div style="display: flex;margin-top: 4px; align-items: center">`+
                            `<div style="width: 8px; height:8px; background: #fff; border: 1px solid #12A334;">`+ `</div>`+ 
                        `<p style= "margin-left: 3px">`+ w.globals.seriesNames[0]+`</p>` + ": " +
                        series[seriesIndex][dataPointIndex] + `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
            // x: {
            //     format: 'MMMM dd, yyyy HH:mm',
            // },
            
         
        },
        
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            }, 
        },
        colors: ['#28A745'],

        stroke: {
          curve: 'smooth',
          colors: ['#28A745'],
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
            colors: ['#9CD6AB']
        },
        
    };

</script>


<div class="chart">
    <div class="chart_header">
        <div class="chart_icon">
            <img src="./assets/img/chart.svg" alt="">
        </div>
        
        <div class="chart_title">
            <p class="title">Netspace (PiB)</p>
            <p class="subtitle">Space allocated to Chia network™</p>
        </div>
    </div>

    <div class="chart_render">
        <div use:chart={options} />
    </div>
    
</div>
<style lang="scss">
    @import '../../styles/chart';
</style>