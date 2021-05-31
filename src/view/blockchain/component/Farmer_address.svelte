<script>
    import { getAll } from "../../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../../pagination/Table.svelte";
    import sonCoins from '../component/CoinsSon.svelte';
    import farmarAddNumber from '../component/Farmer_address_number.svelte';
    

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
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
        {
            date: "05/22/2021, 03:52:39 AM",
            type: "🌱 Farmer reward",
            coin: "0x624cab4143d06a0007b94ea1a5210849ea5708c00791fd8347c1695f94c02d60",
            amount:"1.75 XCH" ,
            value: "$ 1,413.35",
            confirmed: "317,578",
            spent: "Unspent",
        },
      
    ];
    rows = [...data];
    tableData = rows;

    //
    let click = false;
    let component = "";

</script>
<svelte:component this={component}/>
<div class="farmer_addresses"  class:farmer_addresses--active={click}>
    <div class="farmer_addresses_header">
        <div class="block_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>

        <div>
            <p class="title">xch1jp6frj3ecddur7dxak3n7lq0j75ltquh2zyd44epdu0d6704y2hqyky5hf</p>
            <p class="subtitle">Details for address</p>
        </div>
    </div>
    <div class="farmer_addresses_content_tow">
        <div class="content_tow_first">
            <h4>Balance</h4>
        </div>
        <div class="content_tow_center">
            <h4>
                <p>
                <img src="./assets/img/warning.png" alt="">
                Chia cash explorer may show a different net
                result to your Chia wallet and both are correct.
               </p>                                                                                                                                                When you send coins, change may go to a different address. The wallet is aware of all your
                addresses and Chia Explorer is not. You are currently
                looking at one specific adress.
             
            </h4>
            
        </div>
        <div class="content_tow_center">
            <div>
                <h4>Gross</h4>
                <p>Coins received</p>
            </div>
            <div>
                <h4>4,749.02663743908 XCH</h4>
                <p>$3,835,456.38</p>
            </div>
        </div>
        <div class="content_tow_center">
            <div>
                <h4>Gross</h4>
                <p>Coins received</p>
            </div>
            <div>
                <h4>4,749.02663743908 XCH</h4>
                <p>$3,835,456.38</p>
            </div>
        </div>
    </div>
    <div class="farmer_addresses_content_tow">
        <div class="content_tow_first">
            <h4>Farmer status</h4>
        </div>
        <div class="content_tow_center">
            <h4>Rank</h4>
            <p>2</p>
        </div>
        <div class="content_tow_center">
            <div>
                <h4>Blocks won (last 10k)</h4>
                <p>Blocks won by this address in the last 10k blocks</p>
            </div>
            <p>654</p>
        </div>
        <div class="content_tow_center">
            <div>
                <h4>Blocks won (~24h)</h4>
                <p>Blocks won by this address in the last 4608 blocks</p>
            </div>
            <p>344</p>
        </div>
      
        <div class="content_tow_center">
            <h4>Summary</h4>
            <p>Won 7.56% of the last 10,000 blocks</p>
        </div>
    </div>
    <div class="farmer_addresses_slider">
        <div class="content">
            <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                <div class="content_row">
                    <div>Date</div>
                    <div>Type</div>
                    <div>Coin</div>
                    <div>Amount</div>
                    <div>Value</div>
                    <div>HEIGHT CONFIRMED</div>
                    <div>HEIGHT SPENT</div>
                </div>
                <div>
                    {#each rows2 as row, index (row)}
                        <Row class="content_col_farmer_addresses" {index}>
                            <div class="date">{row.date}</div>
                            <div class="type">{row.type}</div>
                            <div on:click={()=>{component=sonCoins;click=true}} class="coin">{row.coin}</div>
                            <div class="amount">{row.amount}</div>
                            <div class="value">{row.value}</div>
                            <div on:click={()=>{component=farmarAddNumber;click= true}} class="confirmed">
                                {row.confirmed}
                            </div>
                            <div class="spent">
                                {row.spent}
                            </div>
                        </Row>
                    {/each}
                </div>
            </Table>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/blockchain";
</style>

