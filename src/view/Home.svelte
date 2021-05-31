<script>

    import Header from '../layout/Header.svelte';
    import Footer from '../layout/Footer.svelte';
    
    import { chart } from "svelte-apexcharts";
   
</script>

<!-- chart -->


<Header></Header>
<div class="wrapper">
    <div class="container-wrapper">
        <div class="intro container">
            <h1>Discover the future of cryptocurrency</h1>
            <p>Browse and search the Chia blockchain™ with historic data charts.</p>
            <div class="btn-ex">
                <h4>Blockchain explorer</h4>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
        <div class="chart container">
            <div class="chart__item">
                <div class="chart--contents">
                    <h4>Netspace</h4>
                    <p>Space allocated to Chia network™</p>
                    <h2>2.75EiB<span class="red">-8.39%</span></h2>
                </div>
                <div class="chart--child">
                    <img src="assets/img/chart1.png" alt="">
                </div>
                
            </div>
            <div class="chart__item">
                <div class="chart--contents">
                    <h4>Unique address count</h4>
                    <p>Addresses that have received XCH</p>
                    <h2>87,105<span>+5.67%</span></h2>
                </div>
                
                <div class="chart--child">
                    <img src="assets/img/chart2.png" alt="">
                </div>
            </div>
            <div class="chart__item">
                <div class="chart--contents">
                    <h4>XCH Price</h4>
                    <p>Current price of Chia™ in USD</p>
                    <h2>$1,067.33<span >+7.53%</span></h2>
                </div>
                <div class="chart--child">
                    <img src="assets/img/chart3.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="unique">
        <div class="unique__day">
            <div class="day">
                <div class="day__key">
                    <h3>XCH/TiB Day</h3>
                    <p>Expected daily farmed XCH per TiB.</p>
                </div>
                <h4>0.0033 XCH</h4>
            </div>
            <div class="day">
                <div class="day__key">
                    <h3>TiB Hour/XCH</h3>
                    <p>Expected time to farm 1 XCH with 1 TiB.</p>
                </div>
                <h4>305 days 11 hours 17 minutes 11.4 seconds</h4>
            </div>
            <div class="day">
                <div class="day__key">
                    <h3>Total XCH</h3>
                    <p>Total XCH including the prefarm</p>
                </div>
                <h4>21,525,006XCH ($22.97b)</h4>
            </div>
            <div class="day">
                <div class="day__key">
                    <h3>Farmed XCH</h3>
                    <p>Number of Chia coins that have been farmed</p>
                </div>
                <h4>525,006($560.35m)</h4>
            </div>
            <div class="day">
                <div class="day__key">
                    <h3>Unique address count</h3>
                    <p>Number of addresses that have received Chia</p>
                </div>
                <h4>87,105</h4>
            </div>
        </div>
        
    </div>
</div>
<Footer></Footer>

<style lang="scss">
    @import "../styles/main.scss";
</style>