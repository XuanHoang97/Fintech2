<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  
  export let index = 0;
  
  function onClick(event) {
    dispatch("click", event);
  }
  
</script>
<tr
on:click={onClick}
class={$$props.class}
class:odd={index % 2 !== 0}
class:even={index % 2 === 0}
>
<slot />
</tr>

<style lang="scss">
  
  
  .content_col {
    display: grid;
    grid-template-columns: 10% 10% 10% 40% 10% 20%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_coins {
    display: grid;
    grid-template-columns: 20% 20% 40% 20%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_farmer{
    display: grid;
    grid-template-columns: 15% 30% 15% 40%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_pool{
    display: grid;
    grid-template-columns: 15% 15% 30% 40%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_bigSpen{
    display: grid;
    grid-template-columns: 15% 15% 40% 30%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_pool_son{
    display: flex;
    justify-content: space-between;
    
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 95px;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_address{
    display: grid;
    grid-template-columns: 10% 10% 30% 30% 20%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .content_col_farmer_addresses{
    display: grid;
    grid-template-columns: 10% 10% 32% 12% 12% 12% 12%;
    text-align: center;
    border: 1px solid rgb(155, 155, 155);
    padding: 20px 0;
    border-radius: 12px;
    margin: 20px 0;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    /* cursor: pointer; */
  }
  .even:hover,.odd:hover{
    background: #DDF9E3;
    transition: 0.3s;
  }

</style>
