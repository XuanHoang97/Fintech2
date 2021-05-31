<script>
    import { getAll } from "../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../pagination/Table.svelte";
    import sonCoins from './component/CoinsSon.svelte';
    
  
    let rows = [];
    let page = 0; //first page
    let pageSize = 10;

    onMount(async () => {
        rows = await getAll();
    });
    //
    let tableData = [];

    let data = [
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
        {
            type: "Miscellneous",
            time: "2 minutes ago",
            coins: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            amount: 10,
        },
    ];
    rows = [...data];
    tableData = rows;
    //
    let click = false;
    let component = "";
</script>

<div>
    <svelte:component this={component}/>
</div>
<div class="coins" class:coins--active={click} >
    <div class="coins_header">
        <div class="coins_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>

        <div>
            <p class="title">Top coins</p>
            <p class="subtitle">The last 100 coins.</p>
        </div>
    </div>
    <div class="coin_row_one">
        <div class="coin_render">
            <p>Netspace</p>
            <h2>3,367.29 PiB</h2>
        </div>
        <div class="coin_render">
            <p>Difficulty</p>
            <h2>209</h2>
        </div>
        <div class="coin_render">
            <p>Unique address count</p>
            <h2>88,496</h2>
        </div>
        <div class="coin_render">
            <p>Power usage <strong> (Chia power formula)</strong></p>
            <h2>5,068 kW</h2>
        </div>
    </div>
    <div class="coin_row_tow">
        <div class="coin_render">
            <p>Average fee (XCH)</p>
            <h2>0.000003051062 XCH</h2>
        </div>
        <div class="coin_render">
            <p>Average fee (USD)</p>
            <h2>0 $</h2>
        </div>
        <div class="coin_render">
            <p>Total XCH</p>
            <h2>21,526,746 ($22.7b)</h2>
        </div>
        <div class="coin_render">
            <p>Farmed XCH</p>
            <h2>526,746 ($555.35m)</h2>
        </div>
    </div>

    <div class="coin_slider">
        <div class="content">
            <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                <div class="content_row">
                    <div>TYPE</div>
                    <div>TIME</div>
                    <div>COINS</div>
                    <div>AMOUNT</div>
                </div>
                <div>
                    {#each rows2 as row, index (row)}
                        <Row class="content_col_coins" {index} on:click={()=>{component=sonCoins;click=true}} >
                            <div class="type">
                                <img
                                    src="../../assets/img/Ellipse.png"
                                    alt=""
                                />
                                {row.type}
                            </div>
                            <div class="time">{row.time}</div>
                            <div class="coins">{row.coins}</div>
                            <div class="amount">{row.amount}</div>
                        </Row>
                    {/each}
                </div>
            </Table>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/blockchain";
</style>
