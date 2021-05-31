<script>
    import Header from "../layout/Header.svelte";
    import Footer from "../layout/Footer.svelte";
    import { chart } from "svelte-apexcharts";
    var optionPie = {
          series: [12.5, 12.5, 12.5, 62.5],
          chart: {
          width: 457,
          height: 457,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D'],
        dataLabels: {
          enabled: false
        },
        legend: {
            show: false
        },
        colors: ['#60A728','#0B621F','#18CC68', '#12A334'],
        plotOptions: {
        pie: {
        expandOnClick: false
    }
  }
    };
    var optionDonut = {
          series: [15, 15, 70],
          chart: {
          width: 457,
          height: 457,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            startAngle: -320,
            endAngle: 40
          }
        },
        colors: ['#1E7D35', '#4DBA67', '#12A334'],
        legend: {
            show: false
        },
        dataLabels: {
          enabled: false
        },
        
    }
    var optionStep = {
          series: [{
          data: [2.5, 2.5, 15, 15, 20, 25, 35, 35, 40, 45, 45, 60, 60, 60, 70, 70]
        }],
        
          chart: {
          type: 'line',
          height: 654,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: true,
            tools: {
            download: false
            }
        }
        },
        stroke: {
          curve: 'stepline',
        },
        colors: ['#12A334'],
        };
        var optionBar = {
        chart: {
            type: 'bar',
            toolbar: {
            show: false,
            tools: {
            download: false
            }
        }
        },
        dataLabels: {
          enabled: false
        },
        series: [{
            name: 'sales',
            data: [9,4,7,5,8,6,9,5.5,4.5,5.5,6.5,5]
        }],
        colors:['#12A334'],
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec' ],
        },
       
        yaxis: {
            
            min: 0,
            max: 10,

            decimalsInFloat: 0,
        },
               
}
    let changeMenu = false;

</script>


<div class="wrapper">
    <div class="container">
        <!-- slidebar -->
        <div class="slidebar">
            <div class="tesst">
                <div class="logo">
                    <img src="assets/img/logo-1.png" alt="" />
                    <img class="icon" src="assets/img/img_02.png" alt="" />
                </div>
                <h2>Navigation</h2>
            </div>
            <div class="nav--block" on:click={() => {
                changeMenu = !changeMenu;}}>
                <div class="nav__block">
                    <img src="assets/img/img_03.png" alt="">
                    <p>Blockchain explorer</p>
                    <img src="assets/img/img_up.png" alt="">
                </div>
            </div>
            <div class="nav"  class:nav--active={changeMenu}>
                <div class="item"><img src="assets/img/Ellipse1.png" alt="">Search</div>
                <div class="item"><img src="assets/img/Ellipse1.png" alt="">Search</div>
                <div class="item"><img src="assets/img/Ellipse1.png" alt="">Search</div>
                <div class="item"><img src="assets/img/Ellipse1.png" alt="">Search</div>
                <div class="item"><img src="assets/img/Ellipse1.png" alt="">Search</div>
            </div>

        </div>

        <!-- Page Content -->
        <div class="content">
            <div class="content__first">
                <img src="assets/img/img_03.png" alt="" />
                <p>Interested in joining a pool?</p>
                <h4>Fill out the Chia community pooling survey</h4>
            </div>
            <div class="content__center">
                <div class="chart-pie" use:chart={optionPie}>
                </div>
                <div class="chart-donut" use:chart={optionDonut}>
                </div>
                <div class="chart-step" use:chart={optionStep}></div>
                <div class="chart-bar" use:chart={optionBar}></div>
            </div>
            <div class="content__final" />
        </div>
    </div>
</div>


<style lang="scss">
    @import "../styles/chart.scss";
</style>
