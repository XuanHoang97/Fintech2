<script>
       import sonBlocks from './component/BlocksSon.svelte';
       import sonCoins from './component/CoinsSon.svelte';
    let answer = "";
    let test = "";
    let check = false;
    function handleSubmit() {
        if (!isNaN(answer)) {
            check = true;
            test = answer;
        } else {
            check = false;
            test = answer;
        }
    }
    //
    let blockDetail = false;
    let component = "";
</script>
<svelte:component this={component}/>
<div class="block" class:block--active={blockDetail}>
    <div class="block_header">
        <div class="block_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>

        <div>
            <p class="title">Search</p>
            <p class="subtitle">
                Search the Chia blockchain™ by height, puzzle hash, plot ID, or
                public key.
            </p>
        </div>
    </div>

    <div class="block_render">
        <form on:submit={handleSubmit} class="block_search">
            <h4 class="title">
                You can search for; address, public key, puzzle hash, header
                hash, height
            </h4>
            <input bind:value={answer} placeholder="Search term..." />
        </form>
    </div>
    <div class="block_results">
        {#if test}
            <h5>Search results for:{test}</h5>
        {:else}
            <h5>Your search returned no results.</h5>
        {/if}
    </div>
    {#if check}
        <div class="block_render">
            <div class="block_search">
                <h4 class="title">Search results (Blocks)</h4>
                <div class="block_text">
                    <p  on:click={()=>{component=sonBlocks;blockDetail=true}}>
                        0x160462e7985c871768be1d2cdd583f12c519cd5a60b3679ee5ecb04f76547433
                    </p>
                </div>
            </div>
        </div>
   {:else if !check && test} 
   
        <div class="block_key">
            <div class="search_Blocks">
                <h4 class="title">Search results (Blocks)</h4>
                <div class="block_text">
                    <p  on:click={()=>{component=sonBlocks;blockDetail=true}}>
                        0x160462e7985c871768be1d2cdd583f12c519cd5a60b3679ee5ecb04f76547433
                    </p>
                </div>
            </div>
            <div class="search_coi">
                <h4 class="title">Search results (Coins)</h4>
                <div class="block_text">
                    <p  on:click={()=>{component=sonCoins;blockDetail=true}}>
                        0x160462e7985c871768be1d2cdd583f12c519cd5a60b3679ee5ecb04f76547433
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    @import "../../styles/blockchain";
</style>
