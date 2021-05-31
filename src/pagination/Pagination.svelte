<script context="module">
    let globalLabels;
  
    export function setLabels(labels) {
      globalLabels = labels;
    }
  </script>
  
  <script>
    import { createEventDispatcher, getContext } from "svelte";
    const dispatch = createEventDispatcher();
    const stateContext = getContext("state");
  
    export let buttons = [-2, -1, 0, 1, 2];
    export let count;
    export let page = 0;
    export let pageSize;
    export let serverSide = false;
  
    
  
    $: pageCount = Math.floor(count / pageSize);
  
    function onChange(event, page) {
      const state = stateContext.getState();
      const detail = {
        originalEvent: event,
        page,
        pageIndex: serverSide ? 0 : page * state.pageSize,
        pageSize: state.pageSize
      };
      dispatch("pageChange", detail);
  
      if (detail.preventDefault !== true) {
        stateContext.setPage(detail.page, detail.pageIndex);
      }
    }
  </script>
  
  <style>
    .active {
      background-color: rgb(24, 24, 24);
      color: white;
      box-shadow: 0px 5.008px 12.8px rgba(7, 9, 25, 0.5);
      border-radius: 3.2px;
    }
  
    ul {
      flex: 1;
   
     
      list-style: none;
      display: flex;
      justify-content: center;
      
    }
  
    button {
      background: transparent;
      border: none;
      padding: 5px 10px;
      margin-left: 3px;
      cursor: pointer;
     width: 40px;
     height: 40px;
    
     
    }
  
  </style>
  
  <ul>
    <li>
      <button disabled={page === 0} on:click={e => onChange(e, 0)}>
        <img  src="../../assets/img/Vector_left.png" alt="">
      </button>
    </li>
    <!-- <li>
      <button disabled={page === 0} on:click={e => onChange(e, page - 1)}>
        {labels.previous}
      </button>
    </li> -->
    {#each buttons as button}
      {#if page + button >= 0 && page + button <= pageCount}
        <li>
          <button class="click"
            class:active={page === page + button}
            on:click={e => onChange(e, page + button)}>
            {page + button + 1}
          </button>
        </li>
      {/if}
    {/each}
    <!-- <li>
      <button
        disabled={page > pageCount - 1}
        on:click={e => onChange(e, page + 1)}>
        {labels.next}
      </button>
    </li> -->
    <li>
      <button disabled={page >= pageCount} on:click={e => onChange(e, pageCount)}>
        <img src="../../assets/img/Vector_right.png" alt="">
      </button>
    </li>
  </ul>
  