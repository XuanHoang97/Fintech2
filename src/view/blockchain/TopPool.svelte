<script>
   import { getAll } from "../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../pagination/Table.svelte";
    import sonTopPool from './component/TopPoolSon.svelte';

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
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "2",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
        {
            rank: "3",
            won: "300",
            online: "113.28 PiB",
            pool: "hfhfdhgfhdgfhdghfdghfsfdhdfhjsdhashdjhasjdhhsdjhasjdhjsdjhsjdhjshdj",
        },
      
      
   
    ];
    rows = [...data];
    tableData = rows;
    //
    let check = false;
    let click = false;
    let selected="Last 10,000";
    let month = [1, 2, 3, 4, 5];
    //
    let component = "";
    
</script>
<style lang="scss">
    @import '../../styles/blockchain';
</style>
<div>
    <svelte:component this={component}/>
</div>
<div class="pool" class:pool--active={click}>
   
    <div class="pool__render">
        <div class="pool__header">
            <div class="pool__icon">
                <img src="./assets/img/chart.svg" alt="" />
            </div>
    
            <div>
                <p class="title">Top pools</p>
                <p class="subtitle">Number of blocks won by the top 50 pools.</p>
            </div>
        </div>
        <div class="pool__row__one">
            <div class="pool__render">
                <p>Netspace</p>
                <h2>3,367.29 PiB</h2>
            </div>
            <div class="pool__render">
                <p>Difficulty</p>
                <h2>209</h2>
            </div>
            <div class="pool__render">
                <p>Unique address count</p>
                <h2>88,496</h2>
            </div>
            <div class="pool__render">
                <p>Power usage <strong> (Chia power formula)</strong></p>
                <h2>5,068 kW</h2>
            </div>
        </div>
        <div class="pool__row__tow">
            <div class="pool__render">
                <p>Average fee (XCH)</p>
                <h2>0.000003051062 XCH</h2>
            </div>
            <div class="pool__render">
                <p>Average fee (USD)</p>
                <h2>0 $</h2>
            </div>
            <div class="pool__render">
                <p>Total XCH</p>
                <h2>21,526,746 ($22.7b)</h2>
            </div>
            <div class="pool__render">
                <p>Farmed XCH</p>
                <h2>526,746 ($555.35m)</h2>
            </div>
        </div>
       
        <div class="pool__blocks">
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
                    <div class="list__option"  on:click={() => {
                        check = !check;
                        selected = value;
                    }}>
                    {value}
                </div>
                {/each}
            </div>
          
        </div>
        <div class="pool__slider">
            <div class="content">
                <Table {page} {pageSize} rows={tableData} let:rows={rows2}>
                    <div class="content_row">
                        <div>RANK</div>
                        <div>BLOCKS WON </div>
                        <div>ESTIMATED SPACE ONLINE</div>
                        <div>POOL PUBLIC KEY</div>
                    </div>
                    <div>
                        {#each rows2 as row, index (row)}
                            <Row class="content_col_pool" {index} on:click={()=>{component=sonTopPool;click=true}}>
                                <div class="rank">
                                   
                                    {row.rank}
                                </div>
                                <div class="won">{row.won}</div>
                                <div class="online">{row.online}</div>
                                <div class="pool">{row.pool}</div>
                            </Row>
                        {/each}
                    </div>
                </Table>
            </div>
        </div>
    </div>
    
</div>