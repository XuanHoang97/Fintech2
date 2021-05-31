<script>
    import Header from "../layout/Header.svelte";
    import Footer from "../layout/Footer.svelte";
</script>
<Header></Header>
<div class="sharecoin">
    <div class="shareCon">
        <div class="share">
            <div class="share__header">
                <h1>Chia coins</h1>
                <p>In Chia coins can be created in two ways; either as a reward to farmers, or as the output of a transaction.</p>
            </div>
            <div class="temporary">
                <img src="assets/img/coin.png" alt="">
                <div class="temporary__contents">
                    <h2>Chia rewards</h2>
                    <p>The main reward to farmers is currently a fixed amount of 2 XCH per block, with 16 blocks expected every 5 minutes. The coinbase reward amount is halved every 3 years.</p>
                    <p>The fees coin amount fluctuates as it contains a base amount plus the sum of all transaction fees for the block.</p>
                </div>
            </div>
            <div class="desc">
                <h1>Chia transactions</h1>  
                <p>Coins are locked by a puzzle, which is a program that takes an input solution, and if you provide the right solution to the puzzle you can spend the coin.</p>
                <p>When a coin is spent it is destroyed and it's value is transferred into new coins.</p>
                <p>Having ownership of a coin typically means that you control a private key that allows you to solve the puzzle that locks the coin. To transfer the coin to somebody else you solve the puzzle with your private key and create a new coin which has a puzzle that can only be solved by the private key of the receiver. If you are sending and receiving Chia using a wallet this is handled automatically for you by the wallet.</p>
                <p>It is also possible to create smart transactions which are programs that do something more sophisticated before creating a new coin. In Chia smart transactions are created using a programming language called Chialisp™.</p>
            </div>
            <div class="block">
                <h1>Coins in the Chia blockchain™</h1>
                <p>All coins have an amount, a puzzle hash, and parent coin info. Coinbase coins also have a signature.</p>
                <ul>
                    <li><span>Amount</span> - Specifies how much Chia the coin is worth. </li>
                    <li><span>Puzzle hash</span> - Hash of the puzzle contained within the coin. In order to spend the coin you need to reveal the puzzle and provide the correct solution.</li>
                    <li><span>Parent coin info</span> - For coinbase coins this is the hex value of the height. For transaction fees coins it is the height of the block hashed twice.</li>
                    <li><span>Signature</span> - Can be used to prove the authenticity of the coin.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="sharecoin_mb">
    <img src="assets/img/coin.png" alt="">

    <div class="block">
        <h1>Coins in the Chia blockchain™</h1>
        <p>All coins have an amount, a puzzle hash, and parent coin info. Coinbase coins also have a signature.</p>
        <ul>
            <li><span>Amount</span> - Specifies how much Chia the coin is worth. </li>
            <li><span>Puzzle hash</span> - Hash of the puzzle contained within the coin. In order to spend the coin you need to reveal the puzzle and provide the correct solution.</li>
            <li><span>Parent coin info</span> - For coinbase coins this is the hex value of the height. For transaction fees coins it is the height of the block hashed twice.</li>
            <li><span>Signature</span> - Can be used to prove the authenticity of the coin.</li>
        </ul>
    </div>
</div>
<Footer></Footer>
<style lang="scss">
    @import "../styles/sharecoin.scss";
</style>