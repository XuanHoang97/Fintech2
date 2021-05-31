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
                name: "XCH Pice (USD)",
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
                    `<div style="color:#fff; background:rgba(0, 0, 0, 0.8); padding: 6px 8px; font-size: 12px;
                    " class="arrow_box">` +
                    `<span>` + w.globals.categoryLabels[dataPointIndex] + 
                         
                         `<div style="display: flex; align-items: center ; margin-top: 4px;">`+`<div style="width: 8px;line-height: 15px; height:8px; margin-right:4px; background: #fff; border: 1px solid #12A334;">`+ `</div>`+ 
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
            <p class="title">Chia (XCH) Price</p>
            <p class="subtitle">The historic price of Chia (XCH) in USD.</p>
        </div>
    </div>

    <div class="chart_render">
        <div use:chart={options} />
    </div>
    
</div>