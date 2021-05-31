<script>
import {link} from 'svelte-spa-router'
    let changeMenu=false;
    // import {link} from 'svelte-spa-router';
    function closeOnClickOutside(node) {
      const handleClick = (event) => {
        if(!node.contains(event.target)) {
          changeMenu = false;
          event.stopImmediatePropagation();
        }
      };

      document.addEventListener('click', handleClick, { capture: true });
      return {
        destroy() {
          document.removeEventListener(
              'click',
              handleClick,
              { capture: true }
            );
        }
      }
    }
</script>
<header>
    <div class="container" >
        <div class="logo">
            <img src="assets/img/logo.png" alt="">
        </div>
        <div class="menu">
            <div class="guid menu--item">
                <h3>Guides</h3>
                <img src="assets/img/Vector.png" alt="">
                <div class="nav">
                    <div class="nav__menu">
                        <a href="/guides" use:link>What is farming</a>
                        <a href="/plotte" use:link>Plotting</a>
                        <a href="/farming" use:link>Farming pools</a>
                        <a href="/sharecoin" use:link>Chia coins</a>
                    </div>
                    
                </div>
            </div>
            <div class="chart menu--item">
                <h3><a href="">Charts</a> </h3>
                <img src="assets/img/Vector.png" alt="">
            </div>
            <h2 class="menu--item"><a href="">Search</a> </h2>
            <div class="cal menu--item">
                <h3><a href="">Chia Calculator</a> </h3>
                <img src="assets/img/Vector.png" alt="">
            </div>
        </div>
        <div class="btn-login">Register / Login</div>
        <div class="navmobile" on:click={()=>{changeMenu=!changeMenu}}>
            <img src="assets/img/nav.png" alt="">
        </div>

        {#if changeMenu}
        <div class="navMenu" class:menu--active={changeMenu} use:closeOnClickOutside>
            <div class="btn__close" on:click={()=>{changeMenu=false}}>
                <img src="assets/img/close.png" alt="close" class="close">
            </div>
            <h2>NAVIGATION MENU</h2>
            <a href="#" class="search">
                Search
                <img src="assets/img/right_b.png" alt="right">
            </a>
            <div class="guides">
                <div class="guides__sub">GUIDES
                    <a href="#" class="guides__item">
                        What is farming?
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Plotting
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Farming pools
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="guides__item">
                        Chia coins
                        <img src="assets/img/right.png" alt="right">
                    </a>
                </div>

            </div>

            <div class="Chart">
                <div class="chart__sub">CHARTS
                    <a href="#" class="chart__item">
                        Netspace
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Difficulty
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Weight
                        <img src="assets/img/right.png" alt="right">
                    </a>

                    <a href="#" class="chart__item">
                        Fees farmed
                        <img src="assets/img/right.png" alt="right">
                    </a>
                </div>

            </div>
        </div>
        {/if}
    </div>
</header>
<style lang="scss">
    @import "../styles/header.scss";
</style>