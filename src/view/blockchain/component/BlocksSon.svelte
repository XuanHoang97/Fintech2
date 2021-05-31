<script>
 import { getAll } from "../../../server.js";
    //Pagination
    import { onMount } from "svelte";
    import Table, { Pagination, Row } from "../../../pagination/Table.svelte";
    import sonCoins from '../component/CoinsSon.svelte';
    import farmarAdd from '../component/Farmer_address.svelte';

    let rows = [];
    let page = 0; //first page
    let pageSize = 10;
   
    onMount(async () => {
        rows = await getAll();
    });
    //
    let click = false;
    let component = "";
</script>
<svelte:component this={component}/>
<div class="block_detail" class:block_detail--active={click}>
    <div class="block_header">
        <div class="block_icon">
            <img src="./assets/img/chart.svg" alt="" />
        </div>
        <div>
            <p class="title">
                0x56bb1175ea43cccbcb4ed24f5d11f8e6fb4d3a64030ff09a994e9a81546e8a91
            </p>
            <p class="subtitle">05/22/2021, 03:23:57 AM</p>
        </div>
    </div>
    <div class="block_detail_row">
        <div class="block_render">
            <p>Netspace (at time of blocks)</p>
            <h2>8,528.29 PiB</h2>
        </div>
        <div class="block_render">
            <p>Fees (XCH)</p>
            <h2>0.000000000000</h2>
        </div>
        <div class="block_render">
            <p>Reward count</p>
            <h2>8</h2>
        </div>
        <div class="block_render">
            <p>Height</p>
            <h2>317,473</h2>
        </div>
    </div>
    <div class="block_detail_content">
        <div class="content_first">
            <p>Foliage Sub Block</p>
        </div>
        <div class="content_center">
            <h4>prev_block_hash</h4>
        </div>
        <div class="content_center">
            <h4>reward_block_hash</h4>
            <p>
                0x9a146e9ad4dd77d83f2a826206a095c9152e1f43b7fade208c68a78e349f75dd
            </p>
        </div>
        <div class="content_center">
            <h4>extension_data</h4>
            <p>
                0x0000000000000000000000000000000000000000000000000000000003a2c7c9
            </p>
        </div>
        <div class="content_center">
            <h4>farmer_reward_puzzle_hash</h4>
            <p>
                0xc8204fe2e9e3a06fb41c114cb5dfc3b9d0010aee88ec159d4252a4c8a7e107d5
            </p>
        </div>
        <div class="content_center">
            <h4>farmer_reward_address</h4>
            <p on:click={()=>{component=farmarAdd;click=true}}>
                <a >
                xch1eqsylchfuwsxldquz9xtth7rh8gqzzhw3rkpt82z22jv3flpql2s9uns6y
                </a>
            </p>
            
        </div>
        <div class="content_center">
            <h4>unfinished_reward_block_hash</h4>
            <p>
                0x75ad635ae74d7ba0efc7bfd0091a606ba47a7133e0154fb722ad23ed3161faa6
            </p>
        </div>
        <div class="content_center">
            <h4>pool_target.max_height</h4>
            <p>0</p>
        </div>
        <div class="content_center">
            <h4>pool_target.puzzle_hash</h4>
            <p>
                0xc8204fe2e9e3a06fb41c114cb5dfc3b9d0010aee88ec159d4252a4c8a7e107d5
            </p>
        </div>
        <div class="content_center">
            <h4>pool_target_address</h4>
            <p on:click={()=>{component=farmarAdd;click=true}}>
                <a >
                xch1eqsylchfuwsxldquz9xtth7rh8gqzzhw3rkpt82z22jv3flpql2s9uns6y\
                </a>
            </p>
        </div>
        <div class="zero_center">
            <div class="zero">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="zero_center">
            <div class="zero">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
    </div>
    <div class="block_detail_content_tow">
        <div class="content_tow_first">
            <h4>Transactions</h4>
        </div>
        <div class="content_tow_center">
            <h4>cost</h4>
            <p>0</p>
        </div>
        <div class="content_tow_center">
            <h4>fees</h4>
            <p>0</p>
        </div>
        <div class="content_tow_center">
            <h4>generator_root</h4>
            <p>
                0x0000000000000000000000000000000000000000000000000000000000000000
            </p>
        </div>
        <div class="content_tow_center">
            <h4>previous_generators_root</h4>
            <p />
        </div>
    </div>
    <div class="block_detail_content_three">
        <div class="content_three_first">
            <h2>Reward claims incorporated</h2>
        </div>
        <div class="content_three_center">
            <div class="content">
                <h5 />
                <h3>COIN</h3>
                <h3>ADDRESS</h3>
                <h3>AMOINT (XCH)</h3>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x32054d24772442c385746a1ef6b96ad</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1l6h7wreqvtq3hj0s9jrgy5n0097wz3w</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x074e72017c3f6006f5632b6b29d76</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1l6h7wreqvtq3hj0s9jrgy5n0097wz3w</h4>
                <h5>0.250006</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x0afb90ffe4de27bbefce1bec2f57e7</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xe1c95f358a2e1ed1f6f1e634c62d676</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>0.25</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>ádasd0x0afb90ffe4de27bbefce1bec2f57e7sa</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xe1c95f358a2e1ed1f6f1e634c62d676</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>0.25</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x0afb90ffe4de27bbefce1bec2f57e7</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>0.25</h5>
            </div>
        </div>
    </div>
    <div class="block_detail_content_four">
        <div class="content_four_first">
            <h4>Additions</h4>
        </div>
        <div class="content_four_center">
            <div class="content">
                <h5 />
                <h3>COIN</h3>
                <h3>ADDRESS</h3>
                <h3>AMOINT (XCH)</h3>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x32054d24772442c385746a1ef6b96ad</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1l6h7wreqvtq3hj0s9jrgy5n0097wz3w</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x074e72017c3f6006f5632b6b29d76</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1l6h7wreqvtq3hj0s9jrgy5n0097wz3w</h4>
                <h5>0.250006</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x0afb90ffe4de27bbefce1bec2f57e7</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xe1c95f358a2e1ed1f6f1e634c62d676</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>0.25</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>ádasd0x0afb90ffe4de27bbefce1bec2f57e7sa</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xe1c95f358a2e1ed1f6f1e634c62d676</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h5>0.25</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0x0afb90ffe4de27bbefce1bec2f57e7</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>1.75</h5>
            </div>
            <div class="content">
                <h5>🌱 Farmer reward</h5>
                <h4 on:click={()=>{component=sonCoins;click=true}}>0xbb4334e8fa44717331976804f4c2d</h4>
                <h4 on:click={()=>{component=farmarAdd;click=true}}>xch1f558mjrcex8qzhg97lhgdr6mkhn32y</h4>
                <h5>0.25</h5>
            </div>
        </div>
    </div>
    <div class="block_detail_content_five">
        <div class="content_five_first">
            <h4>Reward Chain Sub Block</h4>
        </div>
        <div class="content_five_center">
            <h4>challenge_chain_ip_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="content_five_center">
            <h4>challenge_chain_ip_vdf.number_of_iterations</h4>
            <p>97,727,673</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>reward_chain_ip_vdf.challenge</h4>
            <p>
                0x39af832b7b5c8b20feae3df8f161068b6c4fb7b21d56928cebe14392bfd4b6f8
            </p>
        </div>
        <div class="content_five_center">
            <h4>reward_chain_ip_vdf.number_of_iterations</h4>
            <p>9,980,788</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>reward_chain_sp_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>reward_chain_sp_vdf.challenge</h4>
            <p>
                0x39af832b7b5c8b20feae3df8f161068b6c4fb7b21d56928cebe14392bfd4b6f8
            </p>
        </div>
        <div class="content_five_center">
            <h4>reward_chain_sp_vdf.number_of_iterations</h4>
            <p>4,298,427</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_sp_signature</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609cf
                    e9b290f0ae060022b43690d1ce00466e350255956c13df14ab5
                    412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>challenge_chain_sp_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="content_five_center">
            <h4>challenge_chain_sp_vdf.number_of_iterations</h4>
            <p>92,045,312</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>infused_challenge_chain_ip_vdf.challenge</h4>
            <p>
                0xdd9ca7fa58894025610a1bd5179aa40104cddbe0d0f007e6eb89a98390055a01
            </p>
        </div>
        <div class="content_five_center">
            <h4>previous_generators_root</h4>
            <p>9870,07</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>is_transaction_block</h4>
            <p>32423,45645</p>
        </div>
        <div class="content_five_center">
            <h4>pos_ss_cc_challenge_hash</h4>
            <p>23423.3242</p>
        </div>
        <div class="content_five_center">
            <h4>proof_of_space.challenge</h4>
            <p>23423.3242</p>
        </div>
        <div class="content_five_center">
            <h4>proof_of_space.plot_public_key</h4>
            <p>23423.3242</p>
        </div>
        <div class="content_five_center">
            <h4>proof_of_space.pool_contract_puzzle_hash</h4>
            <p>23423.3242</p>
        </div>
        <div class="content_five_center">
            <h4>proof_of_space.pool_public_key</h4>
            <p>0x88c07c8a274d4c5bfd66019665ee3f9b3a4ad5c43f73ad7194314de4d051192954333f76a1d6da5f0f910925be2ff57b</p>
        </div>
        <div class="five_center">
            <div class="five">
                <h4>proof_of_space.proof</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_five_center">
            <h4>proof_of_space.size</h4>
            <p>23</p>
        </div>
        <div class="content_five_center">
            <h4>signage_point_index</h4>
            <p>53</p>
        </div>
        <div class="content_five_center">
            <h4>height</h4>
            <p>2342</p>
        </div>
        <div class="content_five_center">
            <h4>total_iters</h4>
            <p>1,027,584,242,873</p>
        </div>
        <div class="content_five_center">
            <h4>weight</h4>
            <p>42</p>
        </div>
    </div>
    <div class="block_detail_content_six">
        <div class="content_six_first">
            <h4>Reward Chain Sub Block</h4>
        </div>
        <div class="six_center">
            <div class="six">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_six_center">
            <h4>challenge_chain_ip_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="six_center">
            <div class="six">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_six_center">
            <h4>challenge_chain_ip_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="six_center">
            <div class="six">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_six_center">
            <h4>challenge_chain_ip_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="six_center">
            <div class="six">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
        <div class="content_six_center">
            <h4>challenge_chain_ip_vdf.challenge</h4>
            <p>
                0x2cd4736ddb72027ef44a6d8b6878cf90ed891a5128db13ed90a8ed221ed2dc45
            </p>
        </div>
        <div class="six_center">
            <div class="six">
                <h4>challenge_chain_ip_vdf.output.data</h4>
                <p>
                    0x8951ebfa711f68c6846e4b4c74a5483304308b6051108609
                    cfe9b290f0ae060022b43690d1ce00466e350255956c13df14ab
                    5412435a66b0838b804a7f25d3181c4609f8deec5060469fb76f7
                    82d0175158062d4c9f835c7141860ecb0fcecf2
                </p>
            </div>
        </div>
    </div>
</div>
<style lang="scss">
    @import "../../../styles/blocks";
</style>