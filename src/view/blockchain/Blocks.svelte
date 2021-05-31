<script>
    import { getAll } from "../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../pagination/Table.svelte";
    import sonBlocks from './component/BlocksSon.svelte';


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
            time: "38 minutes ago",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "38 minutes ago",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "38 minutes ago",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "38 minutes ago",
            type: "Block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
        {
            time: "N/A",
            type: "TX block",
            height: 263.374,
            header_hash: "fishfdshfhhfdhsfusfufdfudhsufhdushfudsfuhufhufu",
            deficit: 10,
            signage_point_index: 7,
        },
    ];
    rows = [...data];
    tableData = rows;
    //
    let blockDetail = false;
    let component = "";
</script>
<div>
    <svelte:component this={component}/>
</div>

<div class="block" class:block--active={blockDetail}>
    <div class="block_header">
        <div class="block_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>

        <div>
            <p class="title">Blocks</p>
            <p class="subtitle">The last 100 blocks.</p>
        </div>
    </div>

    <div class="block_row">
        <div class="block_render">
            <p>Netspace</p>
            <h2>3,367.29 PiB</h2>
        </div>
        <div class="block_render">
            <p>Difficulty</p>
            <h2>209</h2>
        </div>
        <div class="block_render">
            <p>Total XCH</p>
            <h2>21,526,746 ($22.7b)</h2>
        </div>
        <div class="block_render">
            <p>Farmed XCH</p>
            <h2>526,746 ($555.35m)</h2>
        </div>
        <div class="block_render">
            <p>Unique address count</p>
            <h2>88,496</h2>
        </div>
        <div class="block_render">
            <p class="render_final">
                Power usage <strong>(Chia power formula)</strong>
            </p>
            <h2>5,068 kW</h2>
        </div>
    </div>

    <div class="block_slider">
        <div class="content">
            <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                <div class="content_row">
                    <div>TIME</div>
                    <div>TYPE</div>
                    <div>HEIGHT</div>
                    <div>HEADER HASH</div>
                    <div>DEFICIT</div>
                    <div>SIGNAGE POINT INDEX</div>
                </div>
                <div>
                    {#each rows2 as row, index (row)}
                        <Row class="content_col" {index} on:click={()=>{component=sonBlocks;blockDetail=true}}>
                            <div class="time">{row.time}</div>
                            <div class="type">{row.type}</div>
                            <div class="height">{row.height}</div>
                            <div class="header_hash">{row.header_hash}</div>
                            <div class="deficit">{row.deficit}</div>
                            <div class="signage_point_index">
                                {row.signage_point_index}
                            </div>
                        </Row>
                    {/each}
                </div>
            </Table>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/blocks";
</style>
