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
            rank: "1",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "2",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "4",
            wonLast: "3,690 (36.9%) (1,390.21 PiB)",
            won: "1,513",
            add: "sfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
    ];
    rows = [...data];
    tableData = rows;
    //
    let check = false;
  
    let selected = "Last 10,000";
    let month = [1, 2, 3, 4, 5];
    //
    let farmer = false;
    let component = "";
</script>
<div>
    <svelte:component this={component}/>
</div>
<div class="topFarmer"  class:topFarmer--active={farmer}>
    <div class="topFarmer__render">
        <div class="topFarmer__header">
            <div class="topFarmer__icon">
                <img src="./assets/img/chart.svg" alt="" />
            </div>

            <div>
                <p class="title">Farmers</p>
                <p class="subtitle">The last 100 farmers.</p>
            </div>
        </div>
        <div class="farmer__row__one">
            <div class="farmer__render">
                <p>Netspace</p>
                <h2>3,367.29 PiB</h2>
            </div>
            <div class="farmer__render">
                <p>Difficulty</p>
                <h2>209</h2>
            </div>
            <div class="farmer__render">
                <p>Unique address count</p>
                <h2>88,496</h2>
            </div>
            <div class="farmer__render">
                <p>Power usage <strong> (Chia power formula)</strong></p>
                <h2>5,068 kW</h2>
            </div>
        </div>
        <div class="farmer__row__tow">
            <div class="farmer__render">
                <p>Average fee (XCH)</p>
                <h2>0.000003051062 XCH</h2>
            </div>
            <div class="farmer__render">
                <p>Average fee (USD)</p>
                <h2>0 $</h2>
            </div>
            <div class="farmer__render">
                <p>Total XCH</p>
                <h2>21,526,746 ($22.7b)</h2>
            </div>
            <div class="farmer__render">
                <p>Farmed XCH</p>
                <h2>526,746 ($555.35m)</h2>
            </div>
        </div>
        <div class="farmer__blocks">
            <p>blocks</p>
            <div
                class="block__select"
                on:click={() => {
                    check = !check;
                }}
            >
                <div class="block__text">{selected}</div>
                <img src="../../assets/img/Vector_dow.png" alt="" />
            </div>
            <div class="list" class:list--active={check}>
                {#each month as value, i}
                    <div
                        class="list__option"
                        on:click={() => {
                            check = !check;
                            selected = value;
                        }}
                    >
                        {value}
                    </div>
                {/each}
            </div>
        </div>
        <div class="farmer__slider">
            <div class="content">
                <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                    <div class="content_row">
                        <div>RANK</div>
                        <div>BLOCKS WON (WITHIN LAST 10K)</div>
                        <div>BLOCKS WON (~24H)</div>
                        <div>ADDRESS</div>
                    </div>
                    <div>
                        {#each rows2 as row, index (row)}
                            <Row class="content_col_farmer" {index}  on:click={()=>{component=FarmerAddress;farmer=true}}>
                                <div class="rank">
                                    {row.rank}
                                </div>
                                <div class="wonLast">{row.wonLast}</div>
                                <div class="won">{row.won}</div>
                                <div class="add">{row.add}</div>
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
