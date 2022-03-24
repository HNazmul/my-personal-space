<script>
    // @ts-nocheck

    import { store_renderView } from "/src/pages/Dashboard/apps/Apps.svelte";

    import { createEventDispatcher } from "svelte";

    export let data = {};

    //reactive value
    $: _$isSelected = $store_renderView === data;
    $: console.log("dd",store_renderView === data);

    //variables Stuff
    const dispatcher = createEventDispatcher();

    //methods Stuffs
    const __onClick = () => {
        store_renderView.set(data);
        dispatcher("selectMenu", data);
    };
</script>

<div on:click={__onClick} class="w-full p-2 bg-white px-5 mb-3 shadow-lg shadow-gray-200 rounded-lg group {_$isSelected ? 'bg-emerald-500 text-white' : ''} hover:bg-emerald-500">
    <h3 class=" group-hover:text-white {_$isSelected ? 'text-white' : 'text-gray-500'}">{data?.name}</h3>
</div>
