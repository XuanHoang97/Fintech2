<script>
    import Header from '../layout/Header.svelte';
    import Footer from '../layout/Footer.svelte';
    import ApexCharts from 'apexcharts';
    
</script>
<Header></Header>
<div class="plotte">
    <div class="plotCon">
        <div class="plot">
            <div class="plot__header">
                <h1>Plotting</h1>
                <p>Plotting is the process of creating plot files that are later harvested as part of the Chia farming process.</p>
            </div>
            <div class="temporary">
                <img src="assets/img/leanring.png" alt="">
                <div class="temporary__contents">
                    <h2>Temporary space</h2>
                    <p>Plotting requires an amount of space that is greater than the final output plot file, known as temporary space. The amount of space required changes depending on the k size that you are plotting.</p>
                    <p>For example a k32 plot is around 100 GB in size but requires around 356 GB of temporary space to create.</p>
                    <p>The location of temporary space is an important decision when plotting. You ideally want the temporary space to be located on a storage medium that is as fast as possible - NVMe based storage is often recommended. It is possible to plot on slower storage such as spinning disk however it will take longer. The slow speed of spinning disk can be offset by plotting on many drives in parallel. However, if you are plotting to spinning disk it is probably not a good idea to plot to the same disk more than once at the same time, otherwise the read/write head is going to bounce around trying to service each plotting process, which will slow the whole thing down.</p>
                </div>
            </div>
            <div class="desc">
                <h1>Destination</h1>  
                <p>At the end of the plotting process the contents of the temporary files are compressed and moved to the destination plot file.</p>
                <p>Your requirements for the destination depend on whether this location is where you intend to farm from.</p>
                <p>If you will farm from this location then it can be any form of storage - most likely you will opt for a cheaper form of storage that is slower, which does not matter for farming.</p>
                <p>If you are not going to farm from this location immediately will move the file around, then it could be preferable to opt for a faster form of storage or even a NAS depending on your use-case.</p>
            </div>
        </div>
        

    </div>
</div>
<div class="plotte__mobile">
    <img src="assets/img/leanring.png" alt="">

    <div class="desc">
        <h1>Destination</h1>  
        <p>At the end of the plotting process the contents of the temporary files are compressed and moved to the destination plot file.</p>
        <p>Your requirements for the destination depend on whether this location is where you intend to farm from.</p>
        <p>If you will farm from this location then it can be any form of storage - most likely you will opt for a cheaper form of storage that is slower, which does not matter for farming.</p>
        <p>If you are not going to farm from this location immediately will move the file around, then it could be preferable to opt for a faster form of storage or even a NAS depending on your use-case.</p>
    </div>
    
</div>
<Footer></Footer>
<style lang="scss">
    @import "../styles/plotte.scss"
</style>