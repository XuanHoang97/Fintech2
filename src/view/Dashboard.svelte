<script>
    import { sidebarActive } from '../store';
    import AverageTransactionFee from './charts/AverageTransactionFee.svelte';
    import ChiaPrice from './charts/ChiaPrice.svelte';
    import CumlativeVdfIterations from './charts/CumlativeVdfIterations.svelte';
    import Difficulty from './charts/Difficulty.svelte';
    import Fees from './charts/Fees.svelte';
    import Netspace from './charts/Netspace.svelte';
    import NetworkDecentralisation from './charts/NetworkDecentralisation.svelte';
    import ProofOfSpace from './charts/ProofOfSpace.svelte';
    import TibDay from './charts/TibDay.svelte';
    import TibHour from './charts/TibHour.svelte';
    import TopFarmers from './charts/TopFarmers.svelte';
    import TopPools from './charts/TopPools.svelte';
    import UniqueAddress from './charts/UniqueAddress.svelte';
    import Weight from './charts/Weight.svelte';
    import FeesCoins from './charts/FeesCoins.svelte';
    //blockChain
    
    import Search from './blockchain/Search.svelte';
    import Blocks from './blockchain/Blocks.svelte';
    import Coins from './blockchain/Coins.svelte';
    import TopFarmer from './blockchain/TopFarmer.svelte';
    import TopPool from './blockchain/TopPool.svelte';
    import TopAddresses from './blockchain/TopAddresses.svelte';
    import BiggestSpenders from './blockchain/BiggestSpenders.svelte';
  



    let showBlockchain = true, showCharts = true, showTools = true, showChiaPro = true, showSidebar = true;
    let component = Netspace;
    let header = false;
    $: switch ($sidebarActive) {
        //blockchain
        case "search":
            component = Search;
            break;
        case "blocks":
            component = Blocks;
            break;
        case "coins":
            component = Coins;
            break;
        case "topFarmers":
            component = TopFarmer;
            break;
        case "topPools":
            component = TopPool;
            break;
        case "topAddresses":
            component = TopAddresses;
            break;
        case "biggestSpenders":
            component = BiggestSpenders;
            break;
        //charts
        case "netspace":
            component = Netspace;
            break;
        case 'chiaPrice': 
            component = ChiaPrice;
            break;
        case 'xch/tib_day':
            component = TibDay;
            break;
        case 'tibHour/XCH':
            component = TibHour;
            break;
        case 'uniqueAddressCount':
            component = UniqueAddress;
            break;
        case 'topFarmersChart':
            component = TopFarmers;
            break;
        case 'topPoolsChart':
            component = TopPools;
            break;
        case 'networkDecentralisation':
            component = NetworkDecentralisation;
            break;
        case 'proofOfSpaceSize':
            component = ProofOfSpace;
            break;
        case 'difficulty':
            component = Difficulty;
            break;
        case 'weight':
            component = Weight;
            break;
        case 'cumlativeVdfIterations':
            component = CumlativeVdfIterations;
            break;
        case 'feesFramed':
            component = Fees;
            break;
        case 'transactionVolume':
            component = AverageTransactionFee;
            break;
        case 'feesCoins':
            component = FeesCoins;
            break;
    }
</script>
<style lang="scss">
    @import '../styles/dashboard';
</style>

<div class="dashboard" class:hide-sidebar={!showSidebar}>
    <div class="dashboard_sidebar" class:header-block={header}>
        <div class="sidebar_brand">
            <div class="logo">
                <img src="./assets/img/logo.svg" alt="">
                <div class="text">
                    <p class="dashboard_text">Dashboard</p>
                    <p>Chia cash explorer</p>
                </div>
            </div>
            <img class="hide_sidebar" src="./assets/img/circle.svg" alt="" on:click={()=>{showSidebar = false}}>
            <img class="show_sidebar" src="./assets/img/arrow.svg" alt="" on:click={()=>{showSidebar = true}}>
        </div>

        <div class="nav">
            <p class="title">Navigation</p>
            <div class="nav_list">
                <div class="nav_item">
                    <div class="nav_dropdown" on:click={()=>{ showBlockchain = !showBlockchain;}}>
                        <div class="nav_title">
                            <img src="./assets/img/nav.svg" alt="">
                            <p>Blockchain explorer</p>  
                        </div>
                        <img class="show_dropdown_icon" class:rotate={!showBlockchain} src="./assets/img/up.svg" alt="">
                    </div>
                    <div class="dropdown" class:hide_dropdown={!showBlockchain}>
                        <div class="dropdown_item" class:active={$sidebarActive === 'search'} on:click={() => { $sidebarActive = 'search'; header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Search</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'blocks'} on:click={() => { $sidebarActive = 'blocks';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Blocks</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'coins'} on:click={() => { $sidebarActive = 'coins';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Coins</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'topFarmers'} on:click={() => { $sidebarActive = 'topFarmers';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Top farmers</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'topPools'} on:click={() => { $sidebarActive = 'topPools';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Top pools</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'topAddresses'} on:click={() => { $sidebarActive = 'topAddresses';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Top addresses</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'biggestSpenders'} on:click={() => { $sidebarActive = 'biggestSpenders';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Biggest spenders</p>
                        </div>
                    </div>
                </div>

                <div class="nav_item">
                    <div class="nav_dropdown" on:click={()=>{ showCharts = !showCharts;}}>
                        <div class="nav_title">
                            <img src="./assets/img/nav.svg" alt="">
                            <p>Charts</p>
                        </div>
                        <img class="show_dropdown_icon" class:rotate={!showCharts} src="./assets/img/up.svg" alt="">
                    </div>
                    <div class="dropdown" class:hide_dropdown={!showCharts}>
                        <div class="dropdown_item" class:active={$sidebarActive === 'netspace'} on:click={() => { $sidebarActive = 'netspace';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Netspace</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'chiaPrice'} on:click={() => { $sidebarActive = 'chiaPrice';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Chia (XCH) Price</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'xch/tib_day'} on:click={() => { $sidebarActive = 'xch/tib_day';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>XCH/TiB Day</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'tibHour/XCH'} on:click={() => { $sidebarActive = 'tibHour/XCH';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>TiB Hour/XCH</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'uniqueAddressCount'} on:click={() => { $sidebarActive = 'uniqueAddressCount';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Unique address count</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'topFarmersChart'} on:click={() => { $sidebarActive = 'topFarmersChart';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Top farmers</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'topPoolsChart'} on:click={() => { $sidebarActive = 'topPoolsChart';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Top pools</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'networkDecentralisation'} on:click={() => { $sidebarActive = 'networkDecentralisation';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Network decentralisation</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'proofOfSpaceSize'} on:click={() => { $sidebarActive = 'proofOfSpaceSize';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Proof of space size</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'difficulty'} on:click={() => { $sidebarActive = 'difficulty';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Difficulty</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'weight'} on:click={() => { $sidebarActive = 'weight';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Weight</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'cumlativeVdfIterations'} on:click={() => { $sidebarActive = 'cumlativeVdfIterations';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Cumlative VDF iterations</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'feesFramed'} on:click={() => { $sidebarActive = 'feesFramed';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Fees framed</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'transactionVolume'} on:click={() => { $sidebarActive = 'transactionVolume';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Transaction volume</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'feesCoins'} on:click={() => { $sidebarActive = 'feesCoins';header=false }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Fees / Coins</p>
                        </div>
                    </div>
                </div>

                <div class="nav_item">
                    <div class="nav_dropdown" on:click={()=>{ showTools = !showTools;}}>
                        <div class="nav_title">
                            <img src="./assets/img/nav.svg" alt="">
                            <p>Tools</p>
                        </div>
                        <img class="show_dropdown_icon" class:rotate={!showTools} src="./assets/img/up.svg" alt="">
                    </div>
                    <div class="dropdown" class:hide_dropdown={!showTools}>
                        <div class="dropdown_item" class:active={$sidebarActive === 'addressPuzzleHash'} on:click={() => { $sidebarActive = 'addressPuzzleHash' }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Address / puzzle hash</p>
                        </div>
                    </div>
                </div>

                <div class="nav_item">
                    <div class="nav_dropdown" on:click={()=>{ showChiaPro = !showChiaPro; console.log(showChiaPro)}}>
                        <div class="nav_title">
                            <img src="./assets/img/nav.svg" alt="">
                            <p>Chia Explorer Pro</p>
                        </div>
                        <img class="show_dropdown_icon" class:rotate={!showChiaPro} src="./assets/img/up.svg" alt="">
                    </div>
                    <div class="dropdown" class:hide_dropdown={!showChiaPro}>
                        <div class="dropdown_item" class:active={$sidebarActive === 'proHome'} on:click={() => { $sidebarActive = 'proHome' }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Pro Home</p>
                        </div>
                        <div class="dropdown_item" class:active={$sidebarActive === 'chiaRestApi'} on:click={() => { $sidebarActive = 'chiaRestApi' }}>
                            <i class="fas fa-circle list-icon"></i>
                            <p>Chia Explorer REST API v0.1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dashboard_container">
        <div class="header">
            <img src="./assets/img/note.svg" alt="">
            <p class="text">Interested in joining a pool?</p>
            <p class="green">Fill out the Chia community pooling survey</p>
        </div>
        <div class="header-mobile">
            <img class="img-logo" src="assets/img/logo.png" alt="">
            <img src="assets/img/btn_header.png" alt="" on:click={()=> {header=!header}}>
        </div>
        <div>
            <svelte:component this={component}/>
        </div>

        <div class="footer">
            <div class="footer_link">
                <p>Homepage</p>
                <p>Blockchain explorer</p>
                <p>Charts</p>
                <p>Search</p>
                <p>Top farmers</p>
                <p>Top pools</p>
                <p>Top addresses</p>
                <p>Biggest spenders</p>
                <p>Advertise</p>
            </div>
            <div class="footer_copyright">
                <p class="copyright">chiaexplorer.com © 2021</p>
                <p class="text">CHIA NETWORK INC, CHIA™, the CHIA BLOCKCHAIN™, the CHIA PROTOCOL™, CHIALISP™ and the “leaf Logo” (including the leaf logo alone when it refers to or indicates Chia), are trademarks or registered trademarks of Chia Network, Inc., a Delaware corporation, used under license.</p>
            </div>
        </div>
    </div>
</div>