<script>
     import { getAll } from "../../../server.js";
    //Pagination
    import { onMount } from "svelte";
   
    import Table, { Pagination, Row } from "../../../pagination/Table.svelte";
    import sonBlocks from '../component/BlocksSon.svelte';

    let click = false;
    let component = "";
</script>
<div><svelte:component this={component}/></div>
<div class="coins_detail" class:coins_detail--active={click}>
    <div class="coins_header">
        <div class="coins_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>

        <div>
            <p class="title">
                0x783a4c6a1553626f1ee8b19ebc0a31176675af20172877d3f0825a20ad0ef7c9
            </p>
            <p class="subtitle">Coins details</p>
        </div>
    </div>
    <div class="coins_detail_content_tow">
        <div class="content_tow_first">
            <h4>Coin</h4>
        </div>
        <div class="content_tow_center">
            <h4>Date</h4>
            <p>05/22/2021, 12:01:11 AM</p>
        </div>
        <div class="content_tow_center">
            <h4>Puzzlehash</h4>
            <p>
                0x907491ca39c35bc1f9a6eda33f7c0f97a9f583975088dad7216f1edd79f522ae
            </p>
        </div>
        <div class="content_tow_center">
            <h4>Address</h4>
            <p on:click={()=>{component=sonBlocks;click=true}}>
                <a>
                    xch1jp6frj3ecddur7dxak3n7lq0j75ltquh2zyd44epdu0d6704y2hqyky5hf
                </a>
            </p>
        </div>
        <div class="content_tow_center">
            <h4>Amount</h4>
            <p>0.25 XCH</p>
        </div>
        <div class="content_tow_center">
            <h4>Current value</h4>
            <p>$ 203.97</p>
        </div>
        <div class="content_tow_center">
            <h4>Status</h4>
            <p>Unspent</p>
        </div>
        <div class="content_tow_center">
            <h4>Type</h4>
            <p>🌱 Farmer reward</p>
        </div>
        <div class="content_tow_center">
            <h4>Confirmed block index</h4>
            <p on:click={()=>{component=sonBlocks;click=true}}> <a>
                316,712
            </a>
            </p>
        </div>
        <div class="content_tow_center">
            <h4>Spent block index</h4>
            <p>0</p>
        </div>
        <div class="content_tow_center">
            <h4>Parent coin info</h4>
            <p>
                0x3ff07eb358e8255a65c30a2dce0e5fbb0000000000000000000000000004d525
            </p>
        </div>
    </div>
    <div class="coins_detail_content_three">
        <div class="content_three_first">
            <h4>Transactions</h4>
        </div>
        <div class="content_three_center">
            <h4>🍃 Miscellaneous (1.249 XCH)</h4>
            <p on:click={()=>{component=sonBlocks;click=true}}>
                <a >
                    0x98d6dc74fe16f0daea1ec3dc0c7571ab48f3daff755db3c6304526f39dd3327f
                </a>
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/blockchain";
</style>