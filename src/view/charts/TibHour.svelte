<script>
    import ApexCharts from 'apexcharts';import { chart } from "svelte-apexcharts";
    var options = {
        chart: {
            height: "100%",
            width: "100%",
            type: "line",
            background: "#fff",
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
                name: "XCH",
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
            ]
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff;font-size: 12px;
                    background:rgba(0, 0, 0, 0.8); padding: 6px 8px; " class="arrow_box">` +
                    `<span >` + w.globals.categoryLabels[dataPointIndex] + 
                         
                         `<div style="display: flex;margin-top: 4px; align-items: center">`+
                            `<div style="width: 8px; height:8px; background: #fff; margin-right:4px; border: 1px solid #12A334;">`+ `</div>`+ 
                        `<p>`+ w.globals.seriesNames[0]+`</p>` + ": " +
                        series[seriesIndex][dataPointIndex] + `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
          x: {
            format: 'MMMM dd, yyyy HH:mm',
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
            <p class="title">TiB Hour/XCH</p>
            <p class="subtitle">Expected number of hours to farm 1 XCH with 1 TiB.</p>
        </div>
    </div>

    <div class="chart_render">
        <div use:chart={options} />
    </div>
    
</div>