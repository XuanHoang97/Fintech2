<script>
    import { getAll } from "../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../pagination/Table.svelte";
    import FarmerAddress from './component/Farmer_address.svelte';

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
            stt: "1",
            rank: "1",
            add: "Chia Network",
            balence: "10,500,000 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "2",
            rank: "1",
            add: "Chia Network",
            balence: "10,500,000 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
        },
        {
            stt: "3",
            rank: "2",
            add: "dasjdhhsjdhjshdhsjdhjshdjhsjdhdhjdhshsjsh",
            balence: "22,886.21566566566556 XCH",
            value: "$10,769,640,000",
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
<div class="address" class:address--active={click}>
    <div class="address__render">
        <div class="address__header">
            <div class="address__icon">
                <img src="./assets/img/chart.svg" alt="" />
            </div>

            <div>
                <p class="title">Top addresses</p>
                <p class="subtitle">The 100 addresses with the most XCH.</p>
            </div>
        </div>
        <div class="address__row__one">
            <div class="address__render">
                <p>Netspace</p>
                <h2>3,367.29 PiB</h2>
            </div>
            <div class="address__render">
                <p>Difficulty</p>
                <h2>209</h2>
            </div>
            <div class="address__render">
                <p>Unique address count</p>
                <h2>88,496</h2>
            </div>
            <div class="address__render">
                <p>Power usage <strong> (Chia power formula)</strong></p>
                <h2>5,068 kW</h2>
            </div>
        </div>
        <div class="address__row__tow">
            <div class="address__render">
                <p>Average fee (XCH)</p>
                <h2>0.000003051062 XCH</h2>
            </div>
            <div class="address__render">
                <p>Average fee (USD)</p>
                <h2>0 $</h2>
            </div>
            <div class="address__render">
                <p>Total XCH</p>
                <h2>21,526,746 ($22.7b)</h2>
            </div>
            <div class="address__render">
                <p>Farmed XCH</p>
                <h2>526,746 ($555.35m)</h2>
            </div>
        </div>
       
        <div class="address__slider">
            <div class="content">
                <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                    <div class="content_row">
                        <div>#</div>
                        <div>RANK</div>
                        <div>ADDRESS</div>
                        <div>BALANCE</div>
                        <div>VALUE</div>
                    </div>
                    <div>
                        {#each rows2 as row, index (row)}
                            <Row class="content_col_address" {index} on:click={()=>{component=FarmerAddress;click=true}}>
                                <div class="type">
                                    {row.stt}
                                </div>
                                <div class="time">{row.rank}</div>
                                <div class="coins">{row.add}</div>
                                <div class="amount">{row.balence}</div>
                                <div class="amount">{row.value}</div>
                            </Row>
                        {/each}
                    </div>
                </Table>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/blockchain";
</style>
