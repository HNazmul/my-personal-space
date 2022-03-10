<script>
    import { createEventDispatcher } from "svelte";

    export let _class = "";
    export let items = [{ text: "Notthing", id: "W893Akd" }];
    let selected = "";

    const dispatcher = createEventDispatcher();

    const __onclick = (selectedTab) => {
        selected = selectedTab.id;
        dispatcher("selectTab", selectedTab);
    };
</script>

<div class="w-full {_class}">
    <div class="sitebar bg-white min-h-[40vh] rounded-2xl shadow px-5 py-8">
        <ul class="flex flex-col">
            {#each items as item}
                <li
                    on:click={() => __onclick(item)}
                    class="px-4 py-2 text-lg  {selected === item.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-400'} mb-2 font-medium rounded-md cursor-pointer transition-colors  hover:bg-emerald-500 hover:text-white"
                >
                    {item.text}
                </li>
            {/each}
        </ul>
    </div>
</div>
