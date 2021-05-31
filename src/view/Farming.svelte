<script>
    import Header from "../layout/Header.svelte";
    import Footer from "../layout/Footer.svelte";
</script>
<Header></Header>
<div class="shareFarming">
    <div class="farmingCon">
        <div class="container">
            <h2 class="heading">Chia farming pools</h2>
            <div class="desc">The amount of Chia that a farmer can earn is proportional 
                to the percentage of the network that they own. For example 
                a farmer that owns 0.25% of the total network space can expect to win 0.25% of the blocks.
            </div>
    
            <div class="why_join">
                <div class="img">
                    <img src="assets/img/farming.png" alt="">
                </div>
                <div class="content">
                    <div class="detail">
                        <div class="headings">Why join a pool?</div>
                        <p>
                            As the total size of the Chia network™ grows it becomes
                             increasingly difficult to earn Chia as a solo farmer.
                        </p>
    
                        <p>
                            When the network space reaches 1 EB a farmer with 10 TB of space
                             would own 0.00001% of the network and can expect to wait over 20 days to win 
                             a single block. If they are unlucky they could easily be waiting several months. 
                            Somebody with less than 10 TB of space could be waiting a lot longer.
                        </p>
    
                        <p>
                            By joining a pool a farmer can start earning a small amount of Chia much quicker because 
                            the total space of the pool determines the chance of winning a block.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

<Footer></Footer>
<style lang="scss">
    @import "../styles/farming.scss";
</style>