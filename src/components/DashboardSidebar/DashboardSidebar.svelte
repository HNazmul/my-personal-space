<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let _class = "";
    export let items = [{ text: "Notthing", id: "W893Akd" }];
    let selected = items[0]?.id;
    let isSideBarShow = false;

    const dispatcher = createEventDispatcher();

    const __onclick = (selectedTab) => {
        selected = selectedTab.id;
        dispatcher("selectTab", selectedTab);
    };

    onMount(() => {
        window.addEventListener("resize", sidebarCondition);
        sidebarCondition();
    });

    const sidebarCondition = () => {
        if (window.innerWidth >= 1024) {
            isSideBarShow = true;
        } else {
            isSideBarShow = false;
        }
    };
</script>

{#if isSideBarShow}
    <div transition:fly={{ x: -300, duration: 500 }} class="w-full {_class} fixed left-0 z-50 lg:static  lg:z-0">
        <div class="sitebar bg-white min-h-[40vh] rounded-2xl overflow-hidden shadow-2xl shadow-slate-400 px-5 py-8">
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
{/if}

<div on:click={() => (isSideBarShow = !isSideBarShow)} class="menus lg:hidden fixed bg-white active:bg-gray-500 hover:bg-gray-300 p-1 rounded-full z-[999] bottom-[5%] right-3 shadow-md border">
    {#if isSideBarShow}
        <Icon icon="line-md:close" inline={true} class="text-3xl" />
    {:else}
        <Icon icon="system-uicons:circle-menu" inline={true} class="text-3xl" />
    {/if}
</div>
