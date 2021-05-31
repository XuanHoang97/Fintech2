<script>
    import { chart } from "svelte-apexcharts";
    import Header from "../layout/Header.svelte";
    import {link} from 'svelte-spa-router';

    
    let changeMenu=false;
    function closeOnClickOutside(node) {
        const handleClick = (event) => {
        if(!node.contains(event.target)) {
            changeMenu = false;
            event.stopImmediatePropagation();
        }
        };

        document.addEventListener('click', handleClick, { capture: true });
        return {
        destroy() {
            document.removeEventListener(
                'click',
                handleClick,
                { capture: true }
            );
        }
        }
    }
    //calculator
    let a = 10;
    $: b = a*101.4;
    let check1=true;
    let check2=true;
    let check3=true;
    

    //chart
    var options = {
        series: [
            {
                name: "Network space",
                data: [10 , 10, 15 , 30, 37 , 45, 60 , 70, 85 , 98],
            },
            {
                name: "Size of plots",
                data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
            },

            {
                name: "Owned space",
                data: [0, 0,0, 0, 0, 0, 0, 0, 0, 0],
            },

            {
                name: "Daily earnings",
                data: [90, 70, 60, 50, 40, 30, 20, 10, 5, 5],
            },

            {
                name: "Total earnings",
                data: [5, 15, 20, 30, 40, 55, 65, 75, 80, 95],
            },
        ],

        chart: {
            height: 243,
            width: "100%",
            type: "line",
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },

        legend: {
            show: false,
        },
        
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },

        colors: ["#38A169", "#E59762", "#DE4CE1", "#D53F8C" ,"#03B6D8"],
        xaxis: {
            categories: ["0","5/28/21","5/29/21","5/30/21","5/31/21", "6/01/21","5/12/21","5/12/21","5/12/21","5/12/21"],
        },

        yaxis: {
            show: false,
            min: 0,
            max: 100,
            title: {
                text: '(thousands)'
            }
        },
        markers: {
            size: 0,
            colors: ["#38A169", "#E59762", "#DE4CE1", "#D53F8C" ,"#03B6D8"],
            strokeColors: "#fff",
            strokeWidth: 0,
            hover: {
                size: 5,
            },
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    `<div 
                    style="background:white; padding: 10px 15px"; 
                    class="arrow_box">`
                        +
                    
                    `<span class="arrow_box" style="color:black; padding-bottom:15px ; display:block" >` +
                       w.globals.categoryLabels[dataPointIndex] + `<br>` +
                    `</span>` +

                    `<span class="arrow_box" style="color:#38A169; padding-bottom:15px ; display:block" >` +
                        "Network space: "+ series[0][dataPointIndex]+"EiB"+ `<br>` +
                    `</span>` +

                    `<span class="arrow_box" style="color:#E59762; padding-bottom:15px ; display:block"  >` +
                        "Network space: "+ series[1][dataPointIndex]+"GiB"+ `<br>` +
                    `</span>` +

                    `<span class="arrow_box" style="color:#DE4CE1; padding-bottom:15px ; display:block" >` +
                        "Network space: "+ series[2][dataPointIndex]+"%"+ `<br>` +
                    `</span>` +

                    `<span class="arrow_box" style="color:#D53F8C;padding-bottom:15px ; display:block"  >` +
                        "Network space: "+ `<br>`+ series[3][dataPointIndex]+"0.0003 XCH / $0.35 USD" + `<br>`+
                    `</span>` +

                    `<span class="arrow_box" style="color:#03B6D8;"  >` +
                        "Network space: "+ `<br>`+ series[4][dataPointIndex]+"0.1147 XCH / $119.90 USD" + `<br>`+
                    `</span>` +
                    `</div>`
                );
            },
            x: {
                format: "dd/MM/yy HH:mm",
            },

            y: {
                formatter: function (val) {
                return + val + " EiB"
                }
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
    };

    // option
    let check_capa = false;
    let check_capa_update = false;
    let check_capa_plot= false;
    let speed_plot= false;
    let max_plot= false;
    let selectCapa='GiB';
    let para = ['GiB', 'YiB', 'ZiB', 'EiB', 'PiB', 'TiB'];

    let check_month = false;
    let selectMonth='6 months';
    let months = ['1 months', '3 months', '6 months', '1 years', '3 years', '5 years'];

    let check_day = false;
    let selectDay='Today';
    let days = ['Today', 'Mainnet launch'];

    let check_grow = false;
    let selectGrow='Today';
    let grows = ['yearly', 'monthly', 'weekly', 'daily'];

</script>

    
<header>
    <div class="container" >
        <div class="logo">
            <img src="assets/img/logo.png" alt="">
        </div>
        <div class="menu">
            <div class="guid menu--item">
                <h3><a href="#">Guides</a> </h3>
                <img src="assets/img/Vector.png" alt="">
                <div class="nav">
                    <div class="nav__menu">
                        <a href="/guides" use:link>What is farming</a>
                        <a href="/plotte" use:link>Plotting</a>
                        <a href="/farming" use:link>Farming pools</a>
                        <a href="/sharecoin" use:link>Chia coins</a>
                    </div>
                    
                </div>
            </div>
            <div class="chart menu--item">
                <h3><a href="">Charts</a> </h3>
                <img src="assets/img/Vector.png" alt="">
            </div>
            <h2 class="menu--item"><a href="">Search</a> </h2>
            <div class="cal menu--item">
                <h3><a href="">Chia Calculator</a> </h3>
                <img src="assets/img/Vector.png" alt="">
            </div>
        </div>
        <div class="btn-login">Register / Login</div>
        <div class="navmobile" on:click={()=>{changeMenu=!changeMenu}}>
            <img src="assets/img/nav.png" alt="">
        </div>

        {#if changeMenu}
        <div class="navMenu" class:menu--active={changeMenu} use:closeOnClickOutside>
            <div class="btn__close" on:click={()=>{changeMenu=false}}>
                <img src="assets/img/close.png" alt="close" class="close">
            </div>
            <h2>NAVIGATION MENU</h2>
            <a href="#" class="search">
                Search
                <img src="assets/img/right_b.png" alt="right">
            </a>
            <div class="guides">
                <div class="guides__sub">GUIDES
                    <a href="#" class="guides__item">
                        What is farming?
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Plotting
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Farming pools
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Chia coins
                        <img src="assets/img/right.png" alt="right">
                    </a>
                </div>

            </div>

            <div class="Chart">
                <div class="chart__sub">CHARTS
                    <a href="#" class="chart__item">
                        Netspace
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Difficulty
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Weight
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Fees farmed
                        <img src="assets/img/right.png" alt="right">
                    </a>
                </div>

            </div>
        </div>
        {/if}
    </div>
</header>

<div class="calculator">
    <div class="container">
        <div class="module">
            <div class="heading">Chia Calculator</div>

            <div class="desc">
                <div class="tit">How much can I earn farming Chia (XCH)?</div>
                <p>Use this calculator to estimate 
                    how much you can earn from farming the
                    <a href="http://">Chia cryptocurrency (XCH)</a><br>
              
                    on the Chia Network. Input the number of plots (hard disk space) 
                    that you would like to dedicate, and the calculator 
                    will give you an overview of your estimated earnings and recommended hardware.
                </p>
            </div>

            <div class="calc">
                <div class="calc__tit">
                    <div class="head">
                        Number of Plots
                        <span>(of size 101.4GiB, k=32)</span>
                    </div>  
                    
                </div>
                <div class="scroll_mod">
                    <!-- <input type="range" class="control" bind:value={a}  min="0" max="10000"> -->
                    <input type="range" class="slider" bind:value={a} id="myRange" min="1" max="100">
                </div>

         
                

                <form action="">
                    <div class="input">
                        <input type="text" class="num_para" bind:value={a}  min="0" max="10000" placeholder="10"> 
                        <label for="">Plots</label>
                    </div>
                    
                    <div class="parameter">
                        <input type="number" class="num_para" placeholder={b.toFixed(2)}  min="0">

                        <div class="value" on:click={() => {check_capa = !check_capa;}}>
                            <div class="current">{selectCapa}
                            </div>
                            <img src="assets/img/down.png" alt="">

                            <div class:active={check_capa} class="list">
                                {#each para as value, i}
                                    <div class="list__para" on:click={() => { selectCapa = value;}}>
                                        {value}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="result">
                <h2>Results</h2>
                <div class="result__mode">
                    <div class="simplified active" on:click={()=>{check1=true}} class:active={check1}>Simplified</div>
                    <div class="advanced" on:click={()=>{check1=false}} class:active={!check1}>Advanced</div>
                </div>

                <div class="simp__result" class:sim={check1}>
                    <div class="network">
                        <h2>Network</h2>
                        <div class="network__detail">
                            <div class="network__total">
                                <h3>Total network space</h3>
                                <div class="para">
                                    <div class="numb">3.731</div>
                                    <div class="capacity">EiB</div>
                                </div>
                                <p class="alert">Including your space</p>
                            </div>

                            <div class="network__owned">
                                <h3>Owned network space</h3>
                                <div class="para">
                                    <div class="numb">0.0000%</div>
                                </div>
                            </div>

                            <div class="Expected__time">
                                <h3>Total network space</h3>
                                <div class="para">
                                    <div class="numb">over 2 years</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="earning">
                        <h2>Estimated Earnings</h2>
                        <p>The values below are an estimate with constant total network space. 
                            Use the <a href="">advanced tab</a>    
                            to simulate earnings over time with netspace
                             growth taken into account.</p>
                        <div class="earning__detail">
                            <div class="hourly">
                                <h3>Hourly XCH</h3>
                                <div class="para">
                                    <div class="numb">0.0001 /hour </div>
                                </div>
                            </div>

                            <div class="daily">
                                <h3>Daily XCH</h3>
                                <div class="para">
                                    <div class="numb">0.0023 /day</div>
                                </div>
                            </div>

                            <div class="monthly">
                                <h3>Monthly XCH</h3>
                                <div class="para">
                                    <div class="numb">3.0.0710 /month</div>
                                </div>
                            </div>

                            <div class="hourly">
                                <h3>Hourly USD</h3>
                                <div class="para">
                                    <div class="numb">$0.10 /hour</div>
                                </div>
                            </div>

                            <div class="daily">
                                <h3>Monthly USD</h3>
                                <div class="para">
                                    <div class="numb">$2.43 /day</div>
                                </div>
                            </div>

                            <div class="monthly">
                                <h3>Monthly USD</h3>
                                <div class="para">
                                    <div class="numb">$73.98 /month</div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="Exchange__Rate">
                        <h2>Exchange Rate</h2>
                        <div class="rate__detail">
                            <div class="num_money">
                                <div class="enter_num">
                                    <div class="dollar">
                                        <img src="assets/img/dollar.png" alt="">
                                        <input type="text" value="1042">
                                    </div>
                                </div>
                                <div class="m">USD per XCH</div>
                            </div>
                            <div class="desc_money">
                                Default exchange rate from 
                                <a href="">Coinbase</a>
                                Updated every 30 min.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="advanced__result" class:adv={!check1}>
                    <h2>Earnings over time</h2>
                    <div class="time">
                        <div class="time_earning">
                            <h3>Time frame</h3>
                            <div class="detail_earning" on:click={()=>{check_month =! check_month}}>
                                <h3>{selectMonth}</h3>
                                <img src="assets/img/down.png" alt="arrow__down">

                                <div class:active={check_month} class="list">
                                    {#each months as value, i}
                                        <div class="list__para" on:click={() => { selectMonth = value;}}>
                                            {value}
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <div class="time_earning">
                            <h3>Start date </h3>
                            <div class="detail_earning start_date" on:click={()=>{check_day=!check_day}}>
                                <h3>{selectDay}</h3>
                                <img src="assets/img/down.png" alt="arrow__down">

                                <div class:active_day={check_day} class="list__time">
                                    {#each days as value, i}
                                        <div class="list__para" on:click={() => { selectDay = value;}}>
                                            {value}
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="chart__Detail">
                        <div id="chart" use:chart={options} />
                        <div class="note__chart">
                            <div class="note--item">
                                <img src="assets/img/note1.png" alt="">
                                <span>Network space</span>
                            </div>

                            <div class="note--item">
                                <img src="assets/img/note2.png" alt="">
                                <span>Size of plots</span>
                            </div>

                            <div class="note--item">
                                <img src="assets/img/note3.png" alt="">
                                <span>Owned space</span>
                            </div>

                            <div class="note--item">
                                <img src="assets/img/note4.png" alt="">
                                <span>Daily earnings</span>
                            </div>

                            <div class="note--item">
                                <img src="assets/img/note5.png" alt="">
                                <span>Total earnings</span>
                            </div>
                        </div>
                    </div>

                    <h3>Plots</h3>
                    <p>The plot space below is added to the total network space.</p>
                    <div class="plot">
                        <div class="plot__detail">
                            <h3>
                                Intial space of plots
                            </h3>
                            <div class="plot__item">
                                <div class="plot__number">
                                    1014.0
                                </div>

                                <div class="plot__para" on:click={() => {check_capa_plot = ! check_capa_plot}}>
                                    <div class="para">{selectCapa}</div>
                                    <img src="assets/img/down.png" alt="">

                                    <div class:active--plot={check_capa_plot} class="space--plot">
                                        {#each para as value,i}
                                            <div class="list__para" on:click={()=>{selectCapa = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="plot__detail">
                            <h3>
                                Plotting speed
                            </h3>
                            <div class="plot__item">
                                <div class="plot__number">
                                    0.0
                                </div>

                                <div class="plot__para" on:click={() => {speed_plot = ! speed_plot}}>
                                    <div class="para">{selectCapa}</div>
                                    <img src="assets/img/down.png" alt="">

                                    <div class:active--speed={speed_plot} class="speed--plot">
                                        {#each para as value,i}
                                            <div class="list__para" on:click={()=>{selectCapa = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                            <p>Space plotted per day</p>
                        </div>

                        <div class="plot__detail">
                            <h3>
                                Max total space of plots
                            </h3>
                            <div class="plot__item">
                                <div class="plot__number">
                                    0.0
                                </div>

                                <div class="plot__para" on:click={() => {max_plot = ! max_plot}}>
                                    <div class="para">{selectCapa}</div>
                                    <img src="assets/img/down.png" alt="">
                                    <div class:active--max={max_plot} class="max--plot">
                                        {#each para as value,i}
                                            <div class="list__para" on:click={()=>{selectCapa = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>  
                            </div>
                            <div class="check">
                                <input type="checkbox"  name="check" value="">
                                <label for="">Unlimited</label>
                            </div>
                            
                        </div>
                    </div>

                    <h3>Network Space</h3>
                    <div class="network">
                        <div class="network__detail">
                            <h3>
                                Intial space of plots
                            </h3>
                            <div class="network__item">
                                <div class="network__number">
                                    3.371
                                </div>

                                <div class="network__para" on:click={()=>{check_capa =! check_capa}}>
                                    <div class="para">{selectCapa}</div>
                                    <img src="assets/img/down.png" alt="">

                                    <div class:active={check_capa} class="list--capacity">
                                        {#each para as value, i}
                                            <div class="list__para" on:click={() => {selectCapa = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                        <div class="network__detail">
                            <h3>
                                Network growth
                            </h3>
                            <div class="network__item">
                                <div class="network__number">
                                    % 15
                                </div>

                                <div class="network__para" on:click={() => {check_grow =! check_grow}}>
                                    <div class="para">{selectGrow}</div>
                                    <img src="assets/img/down.png" alt="">

                                    <div class:active_grow={check_grow} class="list--grow">
                                        {#each grows as value,i}
                                            <div class="list__para" on:click={()=>{selectGrow = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="check">
                            <input type="checkbox"  name="check" value="">
                            <label for="">Unbounded growth</label>
                        </div>

                        <div class="network__detail">
                            <h3>
                                Days of exponential growth
                            </h3>
                            <div class="network__item">
                                <div class="network__number">
                                    30
                                </div>
                            </div>
                        </div>

                        <div class="network__detail">
                            <h3>
                                Days of stabilization
                            </h3>
                            <div class="network__item">
                                <div class="network__number">
                                    150
                                </div>
                            </div>
                        </div>

                        <div class="network__detail">
                            <h3>
                                Stabilized daily growth
                            </h3>
                            <div class="network__item">
                                <div class="network__number">
                                    5.000
                                </div>

                                <div class="network__para" on:click={()=>{check_capa_update = ! check_capa_update}}>
                                    <div class="para">{selectCapa}</div>
                                    <img src="assets/img/down.png" alt="">

                                    <div class:active--stab={check_capa_update} class="list--stabilized">
                                        {#each para as value, i}
                                            <div class="list__para" on:click={() => {selectCapa = value;}}>
                                                {value}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Due to increases in hard drive prices and supply shortages, 
                        the network growth will need to stagnate at some point.
                         Use the inputs above to set the number of days exponential 
                         growth will continue, 
                        and the linear rate that growth will stabilize to.
                    </p>
                    <h2>
                        Estimated Total Earnings
                    </h2>

                    <div class="estimate__earning">
                        <div class="coin">
                            <p>XCH after 6 months</p>
                            <h2>0.1302</h2>
                        </div>
                        <div class="coin">
                            <p>USD* after 6 months</p>
                            <h2>$135.69</h2>
                        </div>
                    </div>

                    <div class="Exchange__Rate">
                        <h2>Exchange Rate</h2>
                        <div class="rate__detail">
                            <div class="num_money">
                                <div class="enter_num">
                                    <div class="dollar">
                                        <img src="assets/img/dollar.png" alt="">
                                        <input type="text" value="1042">
                                    </div>
                                </div>
                                <div class="m">USD per XCH</div>
                            </div>
                            <div class="desc_money">
                                Default exchange rate from 
                                <a href="">Coinbase</a>
                                Updated every 30 min.
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div class="Estimated_Cost">
                <div class="esti_tit">
                    <h2>Estimated Cost</h2> 
                    <span>(for plotting and storing 1014.0 GiB)</span>
                </div>
                
                <div class="op__mode">
                    <div class="Recommended active" on:click={()=>{check2=true}} class:active={check2}>Recommended</div>
                    <div class="Custom" on:click={()=>{check2=false}} class:active={!check2}>Custom</div>
                </div>

                <div class="op__cost"  class:recCost={check2}>
                    <div class="list__cost">
                        <div class="cost__item">
                            <p>Storage Costs</p>
                            <h2>$103.00</h2>
                            <div class="price__cost">
                                <h3>1  x  $103  HDDs</h3>
                                <span>(est. price per drive)</span>
                            </div>
                            <div class="desc_cost">
                                Estimate based on this recommended hard drive:
                            </div>
                            <div class="device1">
                                <div class="link">
                                    WD 3TB Elements Desktop Hard Drive HDD, 
                                    USB 3.0, Compatible with PC, Mac, PS4 & Xbox - 
                                    WDBWLG0030HBK-NESN
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="list__cost">
                        <div class="cost__item">
                            <p>Plotting Hardware Costs</p>
                            <h2>$1.25k</h2>
                            <div class="price__cost">
                                <h3>Estimate based on this beginner-friendly Intel NUC build:</h3>
                            </div>
                            <div class="desc_cost">
                                Estimate based on this recommended hard drive:
                            </div>
                            <div class="device">
                                <div class="device_item">
                                    <span>NUC:</span>
                                    <a href="http:/">
                                        Intel NUC 10 Performance NUC10i7FNH
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>OS SSD:</span>
                                    <a href="http:/">
                                        Kingston 480GB A400 SATA 3 2.5" Internal SSD
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>Plotting SSD:</span>
                                    <a href="http:/">
                                        Seagate Firecuda 520 2TB Performance Internal SSD PCIe Gen4 X4 NVMe 1.3
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>Memory:</span>
                                    <a href="http:/">
                                        Samsung 32GB DDR4 2666MHz RAM (260 Pin SODIMM, 1.2V)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="list__cost">
                        <div class="cost__item">
                            <p>Total Cost</p>
                            <h2>$1.36k</h2>
                            <div class="desc_cost">
                                Actual price may vary by country and time of purchase.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="custom__cost" class:cusCost={!check2}>
                    <div class="list--cost">
                        <div class="cost--item">
                            <p>Estimated Hardware Costs</p>
                            <h2>$18.33</h2>
                            <div class="custom1">
                                <input type="text" placeholder="$18.08">
                                <label for="">per TB</label>
                            </div>

                            <div class="custom1">
                                <input type="text" placeholder="$ 0">
                                <label for="">additional cost</label>
                            </div>
                        </div>
                    </div>
    
                    <div class="list--cost">
                        <div class="cost--item">
                            <p>Plotting Hardware Costs</p>
                            <h2>$1.25k</h2>
                    
                            <div class="desc_cost">
                                Estimate based on this recommended hard drive:
                            </div>
                            <div class="device">
                                <div class="device_item">
                                    <span>NUC:</span>
                                    <a href="http:/">
                                        Intel NUC 10 Performance NUC10i7FNH
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>OS SSD:</span>
                                    <a href="http:/">
                                        Kingston 480GB A400 SATA 3 2.5" Internal SSD
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>Plotting SSD:</span>
                                    <a href="http:/">
                                        Seagate Firecuda 520 2TB Performance Internal SSD PCIe Gen4 X4 NVMe 1.3
                                    </a>
                                </div>
        
                                <div class="device_item">
                                    <span>Memory:</span>
                                    <a href="http:/">
                                        Samsung 32GB DDR4 2666MHz RAM (260 Pin SODIMM, 1.2V)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="list--cost">
                        <div class="cost--item">
                            <p>Total Cost</p>
                            <h2>$1.36k</h2>
                            <div class="desc_cost">
                                Actual price may vary by country and time of purchase.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="Alternative_Options">
                <div class="heading">
                    <h2>Alternative Options</h2> 
                    <span>Sponsored</span>
                </div>
                
                <div class="option__mode">
                    <div class="buy_plot active" on:click={()=>{check3=true}} class:active={check3}>Buy Plots</div>
                    <div class="buy_chia" on:click={()=>{check3=false}} class:active={!check3}>Buy Chia</div>
                </div>

                <div class="buy__plot" class:plots={check3}>
                    <div class="content">
                        <div class="desc">
                            Want to farm Chia but don't feel like
                            getting specific hardware just for plotting? 
                            Visit <a href="http:/">chia-plots.com</a> to order plots and download 
                            them directly to your hard drives within 24 hours.
                        </div>
                        <div class="buy">Buy Plots</div>
                    </div>

                    <div class="trans">
                        <p>
                            Transactions are live! Consider donating XCH to 
                        support future development of the site:
                        </p>
                        <h3>
                            xch1r0qmfeqj7xggkkpv3rk9w5587avyvlwe
                            38lqqc4tvxkrx47pkceselphr7
                        </h3> 
                    </div>
                </div>

                <div class="buy__chia" class:chia={!check3}>
                    <div class="cont_chia">
                        Coming soon
                    </div>
                    <div class="trans">
                        <p>
                            Transactions are live! Consider donating XCH to 
                        support future development of the site:
                        </p>
                        <h3>
                            xch1r0qmfeqj7xggkkpv3rk9w5587avyvlwe
                            38lqqc4tvxkrx47pkceselphr7
                        </h3> 
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
<div class="footer">
    <div class="ft_detail">
        <div class="info">
            <div class="ref">
                <h3>References</h3>
                <div class="list__ref">
                    <a href="http:/">chia.net</a><br>
                    <a href="http:/">github.com/Chia-Network/chia-blockchain/releases/tag/1.1.0</a><br>
                    <a href="http:/">github.com/Chia-Network/chia-blockchain/wiki/SSD-Endurance</a><br>
                    <a href="http:/">chia.net/2021/02/22/plotting-basics.html</a><br>
                    <a href="http:/">chia.net/faq/#faq-18</a><br>
                </div>
            </div>
            <div class="contact">
                <h3>Contact</h3>
                <div class="list__contact">
                    <div class="twitter"><span>Twitter:</span>  <a href="http:/">@ChiaCalculator</a></div>
                    <div class="mail"> <span>Email:</span> <a href="http:/">contact@chiacalculator.com</a></div>
                </div>
            </div>
        </div>
        
        <div class="ref_desc">
            <p>
                Chia is a registered trademark of Chia Network Inc, 
                who have not endorsed and are 
                not responsible for chiacalculator.com or its content.
            </p>
            <p>
                This website is a participant in the Amazon Services 
                LLC Associates Program, an affiliate advertising program 
                designed to provide a means for sites to earn advertising 
                fees by advertising and linking to products on Amazon.com.
            </p>
        </div>
    </div>
</div>


<style lang="scss">
    @import "../styles/calculator.scss";

</style>