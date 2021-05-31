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
                name: "Difficulty",
                data: [45, 52, 38, 45, 19, 33]
            }
        ],
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div style="color:#fff;font-size: 12px;
                    background:rgba(0, 0, 0, 0.8); padding: 6px 8px; " class="arrow_box">` +
                    `<span>` + w.globals.categoryLabels[dataPointIndex] + 
                         
                        `<div style="display: flex;margin-top: 4px;align-items: center">`+
                            `<p style="width: 8px; height:8px; margin-right:4px; background: #fff; border: 1px solid #12A334;">`+ `</p>`+ 
                            `<p>`+ w.globals.seriesNames[0]+`</p>` + ": " +
                             series[seriesIndex][dataPointIndex] + 
                        `</div>` +
                    `</span>` +
                    `</div>`
                );
            },
            x: {
                format: 'MMMM dd, yyyy HH:mm',
            },
        },
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
          curve: 'stepline',
          width: 3
        },
        dataLabels: {
          enabled: false
        }
    };

    let time = '24 hours';
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
            <p class="title">Difficulty</p>
            <p class="subtitle" >Difficulty is a constant factor that can increase or decrease the number of iterations required for the proof of time. If blocks are faster or slower than expected in the previous epoch the difficulty is adjusted based on the formula in the Chia greenpaper. This is used in order to target 32 blocks created every 10 minutes.</p>
        </div>
    </div>

    <div class="stepline-chart_render">
        <div use:chart={options} />
    </div>
    <div class="setting_time-mobile">
        <button class="time" class:active={time === '24 hours'} on:click={()=>{ time = '24 hours'}}>24h</button>
        <button class="time" class:active={time === '1 week'} on:click={()=>{ time = '1 week'}}>1w</button>
        <button class="time" class:active={time === '2 weeks'} on:click={()=>{ time = '2 weeks'}}>2w</button>
        <button class="time" class:active={time === '1 month'} on:click={()=>{ time = '1 month'}}>1m</button>
        <button class="time" class:active={time === '3 months'} on:click={()=>{ time = '3 months'}}>3m</button>
    </div>
    <div class="setting_time">
        <button class="time" class:active={time === '24 hours'} on:click={()=>{ time = '24 hours'}}>24 hours</button>
        <button class="time" class:active={time === '1 week'} on:click={()=>{ time = '1 week'}}>1 week</button>
        <button class="time" class:active={time === '2 weeks'} on:click={()=>{ time = '2 weeks'}}>2 weeks</button>
        <button class="time" class:active={time === '1 month'} on:click={()=>{ time = '1 month'}}>1 month</button>
        <button class="time" class:active={time === '3 months'} on:click={()=>{ time = '3 months'}}>3 months</button>
    </div>
</div>