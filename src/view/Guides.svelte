<script>
    import Header from "../layout/Header.svelte";
    import Footer from "../layout/Footer.svelte";
</script>
<Header></Header>

<div class="Farming">
    <div class="farmingCon">
        <div class="container">
            <h2 class="heading">What is farming?</h2>
            <div class="desc">This is intended to be a high-level non-technical 
                explanation of farming Chia. It should help you understand Chia 
                and make use of some of the information presented on Chia Explorer. 
                For more detailed technical information please refer to the Chia 
                greenpaper.
            </div>
    
            <div class="plotting">
                <div class="img">
                    <img src="assets/img/Rectangle.png" alt="">
                </div>
                <div class="content">
                    <div class="detail">
                        <div class="headings">Plotting</div>
                        <p class="plot_desc"> 
                            In order to farm Chia you first need to create one or more "plots" 
                            which are files that take up space on your hard drive.
                             The space that a plot uses is represented by the letter
                        </p>
    
                        <p class="plot_desc">
                            Creating plots takes some time and CPU power.
                             The bigger the k value the bigger the plot and the longer it takes to create. 
                             Once you have created 
                            a plot there is no difference between one k and another other than the file size.
                        </p>
    
                        <p class="plot_desc">
                            You can move plots from one machine to another without any restrictions. 
                            Some people build dedicated plotting machines that are optimised to perform 
                            the plotting process quickly, 
                            and then move the plots to a less powerful machine to perform the harvesting.
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="harvesting">
                <div class="H_heading">Harvesting</div>
                <div class="content">
                    <p>Once you have one or more plots you are ready to start harvesting them.</p>
                    <p>Harvesting can be thought of like playing bingo. 
                        The plots are the bingo cards and the process of harvesting 
                        involves waiting for the number to be called out and checking
                         the card to see if you have won. This is a trivial operation 
                         and uses a very small amount of electricity.
                          You can very comfortably harvest from a Raspberry Pi.
                    </p>
                    <p>
                        Most of the time a harvester will not find the 
                        required value in a plot, but when it does it gets 
                        something called a "proof of space" which proves that an 
                        amount of space was allocated to a plot.
                    </p>
                    <p>
                        The proof of space is used to create an "unfinished" 
                        block which is propagated on the Chia network™. 
                        The block will remain unfinished until it obtains 
                        a proof of time - this is where timelords come into play.
                    </p>
                </div>
            </div>
    
            <div class="Timelords">
                <div class="T_heading">Timelords</div>
                <div class="content">
                    <p>
                        For security reasons Chia is designed to maintain 
                        a minimum amount of time between blocks which is achieved by timelords.
                    </p>
    
                    <p>
                        Timelords are notified when unfinished blocks are submitted 
                        to the network and are able to then start working on a "proof of time".
                    </p>
    
                    <p>
                        This proof is achieved using something called a VDF (verifiable delay function) 
                        which is a way of proving that an amount of time has been spent performing some work.
                    </p>
    
                    <p>
                        Most people will not run a timelord and do not need to understand it fully. 
                        The important thing to know is that VDF are performed sequentially
                         which means it uses a small amount of electricity compared to other approaches.
                    </p>
    
                    <p>
                        When timelords are notified about unfinished blocks 
                        they get to decide which one to work on based on the 
                        number of VDF "iterations" required - the more iterations
                        required the longer it will take. It is possible that a 
                        timelord receives notification of a new unfinished block after 
                        they have already started the proof of time for a different one - 
                        when this happens it will have to look at how many iterations it
                        has already performed to decide whether to continue 
                        with the current unfinished block or to drop it and start
                        working on the new one (because it would be quicker).
                    </p>
    
                    <p>
                        Once a timelord finishes a proof of time it gets propagated to the 
                        network and the block becomes valid. 
                        It is at this point that the lucky farmer will be rewarded with Chia.
                    </p>
                </div>
            </div>
    
            <div class="Difficulty_and_weight">
                <div class="D_heading">Difficulty and weight</div>
                <div class="content">
                    <p>
                        The number of VDF iterations that timelords must perform is 
                        influenced by a number known as "difficulty". 
                        The purpose of this parameter is to maintain a consistent time between blocks.
                    </p>
    
                    <p>
                        Difficulty is adjusted based on the speed at which blocks are completed. 
                        If a lot of space comes onto the network this will increase the rate 
                        of new blocks and the difficulty will increase to compensate. 
                        Likewise, if a lot of space suddenly leaves the network 
                        it will cause the rate of blocks to slow down and the difficulty 
                        will be reduced to bring the network back to the expected speed.
                    </p>
    
                    <p class="before">
                        The weight of a block is the sum of the difficulty of all blocks below it, including itself.
                    </p>
                </div>
            </div>
    
        </div>
    </div>
    
</div>
<div class="farming__mb">
    <img src="assets/img/Rectangle.png" alt="">
    
    <div class="harvesting">
        <div class="H_heading">Harvesting</div>
        <div class="content">
            <p>Once you have one or more plots you are ready to start harvesting them.</p>
            <p>Harvesting can be thought of like playing bingo. 
                The plots are the bingo cards and the process of harvesting 
                involves waiting for the number to be called out and checking
                 the card to see if you have won. This is a trivial operation 
                 and uses a very small amount of electricity.
                  You can very comfortably harvest from a Raspberry Pi.
            </p>
            <p>
                Most of the time a harvester will not find the 
                required value in a plot, but when it does it gets 
                something called a "proof of space" which proves that an 
                amount of space was allocated to a plot.
            </p>
            <p>
                The proof of space is used to create an "unfinished" 
                block which is propagated on the Chia network™. 
                The block will remain unfinished until it obtains 
                a proof of time - this is where timelords come into play.
            </p>
        </div>
    </div>

    <div class="Timelords">
        <div class="T_heading">Timelords</div>
        <div class="content">
            <p>
                For security reasons Chia is designed to maintain 
                a minimum amount of time between blocks which is achieved by timelords.
            </p>

            <p>
                Timelords are notified when unfinished blocks are submitted 
                to the network and are able to then start working on a "proof of time".
            </p>

            <p>
                This proof is achieved using something called a VDF (verifiable delay function) 
                which is a way of proving that an amount of time has been spent performing some work.
            </p>

            <p>
                Most people will not run a timelord and do not need to understand it fully. 
                The important thing to know is that VDF are performed sequentially
                 which means it uses a small amount of electricity compared to other approaches.
            </p>

            <p>
                When timelords are notified about unfinished blocks 
                they get to decide which one to work on based on the 
                number of VDF "iterations" required - the more iterations
                required the longer it will take. It is possible that a 
                timelord receives notification of a new unfinished block after 
                they have already started the proof of time for a different one - 
                when this happens it will have to look at how many iterations it
                has already performed to decide whether to continue 
                with the current unfinished block or to drop it and start
                working on the new one (because it would be quicker).
            </p>

            <p>
                Once a timelord finishes a proof of time it gets propagated to the 
                network and the block becomes valid. 
                It is at this point that the lucky farmer will be rewarded with Chia.
            </p>
        </div>
    </div>

    <div class="Difficulty_and_weight">
        <div class="D_heading">Difficulty and weight</div>
        <div class="content">
            <p>
                The number of VDF iterations that timelords must perform is 
                influenced by a number known as "difficulty". 
                The purpose of this parameter is to maintain a consistent time between blocks.
            </p>

            <p>
                Difficulty is adjusted based on the speed at which blocks are completed. 
                If a lot of space comes onto the network this will increase the rate 
                of new blocks and the difficulty will increase to compensate. 
                Likewise, if a lot of space suddenly leaves the network 
                it will cause the rate of blocks to slow down and the difficulty 
                will be reduced to bring the network back to the expected speed.
            </p>

            <p class="before">
                The weight of a block is the sum of the difficulty of all blocks below it, including itself.
            </p>
        </div>
    </div>
</div>

<Footer></Footer>
<style lang="scss">
    @import "../styles/guides.scss";
</style>