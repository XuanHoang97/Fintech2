<script>
    import { getAll } from "../../../server.js";
    //Pagination
    import { onMount } from "svelte";
   
    import Table, { Pagination, Row } from "../../../pagination/Table.svelte";
    import ResultBlock from "../component/ResultBlock.svelte";

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
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
        {
            hash: "0x415ad88ef11b00792c43882904c6c0169a2147c9ae3f7a0597f9c9aaf00c8859",
            height: "113.28 PiB",
        },
     
    ];
    rows = [...data];
    tableData = rows;
    //
    let click = false;
    let component = "";

   
</script>
<svelte:component this={component} />

<div class="topPoolSon" class:topPoolSon--active={click} >
    <div class="topPoolSon__render">
        <div class="topPoolSon__header">
            <div class="topPoolSon__icon">
                <img src="./assets/img/chart.svg" alt="" />
            </div>

            <div>
                <p class="title">0xa0bbd5d67f07ada1468666f139c5766cd9097492f7f347e1e157ab687c0719642398fb7cf98f01f24d4b9c4143e00064</p>
                <p class="subtitle">Blocks won by pool public key.</p>
            </div>
        </div>
        
        <div class="pool__one">
            <div class="content_tow_first">
                <h4>Pool status</h4>
            </div>
            <div class="content_tow_center">
                <div>
                    <h4>Rank</h4>
                    <p>Based on pool rewards over the last 10,000 blocks</p>
                </div>
                    <p>3</p>
            </div>
            <div class="content_tow_center">
                <h4>Summary</h4>
                <p>Won 1.97% of the last 10,000 blocks</p>
            </div>
          
        </div>

        <div class="pool__slider">
            <div class="content">
                <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                    <div class="content_row">
                        <div>BLOCK HEADER HASH</div>
                        <div>HEIGHT</div>
                       
                    </div>
                    <div>
                        {#each rows2 as row, index (row)}
                            <Row class="content_col_pool_son" {index}  on:click={() => {
                                component = ResultBlock;
                                click = true;
                            }}>
                              
                                <div class="hash">{row.hash}</div>
                                <div class="height">{row.height}</div>
                            </Row>
                        {/each}
                    </div>
                </Table>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/blockchain";
</style>
