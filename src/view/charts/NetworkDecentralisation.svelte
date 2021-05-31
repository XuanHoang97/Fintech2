<script>
    import ApexCharts from 'apexcharts';import { chart } from "svelte-apexcharts";
    var options = {
        chart: {
            height: "100%",
            width: "100%",
            type: "line",
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
        series: [
            {
                name: "Network decentralisation",
                data: [45, 52, 38, 45, 19, 33]
            }
        ],
        xaxis: {
            // type: 'datetime',
            categories: [
                "01 Jan",
                "02 Jan",
                "03 Jan",
                "04 Jan",
                "05 Jan",
                "06 Jan"
            ],
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff; background:rgba(0, 0, 0, 0.8); font-size: 12px;
                    padding: 4px 8px; " class="arrow_box">` +
                    `<span >` + w.globals.categoryLabels[dataPointIndex] + 
                         
                         `<div style="display: flex;margin-top: 4px; align-items: center">`+
                            `<div style="width: 8px; height:8px; background: #fff; border: 1px solid #12A334;">`+ `</div>`+ 
                        `<p style= "margin-left: 3px">`+ w.globals.seriesNames[0]+`</p>` + ": " +
                        series[seriesIndex][dataPointIndex] + `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
           
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
          width: 3
        },
        dataLabels: {
          enabled: false
        },
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
            <p class="title">Network decentralisation</p>
            <p class="subtitle">Decentralisation of the network is measured by counting unique pool public keys. Higher is better. Please observe the trend rather than the absolute number.</p>
        </div>
    </div>

    <div class="chart_render">
        <div use:chart={options} />
    </div>
    
</div>