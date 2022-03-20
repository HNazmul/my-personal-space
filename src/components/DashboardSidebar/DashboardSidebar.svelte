<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let _class = "";
    export let items = [{ text: "Notthing", id: "W893Akd", icon: "" }];
    let selected = items[0]?.id;
    let isSideBarShow = true;

    // reactive
    $: if (isSideBarShow && window.innerWidth <= 1024) {
        document.body.classList.add("mute");
    } else {
        document.body.classList.remove("mute");
    }

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
    <div transition:fly={{ y: 300, duration: 500 }} class="w-full {_class} fixed bottom-0 left-0 z-[998] lg:static  lg:z-0">
        <div class="sitebar bg-white min-h-[40vh] rounded-t-xl rounded-r-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-slate-400 px-5 py-8">
            <ul class="flex gap-2 gap-y-4 lg:gap-y-2 lg:flex-col flex-wrap justify-center pb-8 lg:pb-0">
                {#each items as item}
                    <li
                        on:click={() => __onclick(item)}
                        class="border {selected === item.id
                            ? 'lg:bg-emerald-400 shadow-lg shadow-gray-300 overflow-hidden lg:shadow-none transform -translate-y-2 lg:-translate-y-0 relative after:absolute after:w-full after:h-5/6 after:rounded-t-full  after:bg-emerald-500 lg:after:w-0 lg:after:h-0 after:bottom-0 after:left-0 after:-z-30 '
                            : 'lg:bg-slate-100 bg-white'} after:transition-all lg:w-full lg:text-left lg:px-3 lg:rounded-md duration-300 transition-all   w-24 p-2 text-center rounded-lg  lg:hover:bg-emerald-500 group"
                    >
                        <div class="p-3 {selected === item.id ? 'bg-white ' : 'bg-emerald-100 '} rounded-lg group-hover:bg-white lg:hidden">
                            <img src={item.icon} alt="" class="h-10 inline-block" />
                        </div>
                        <h6 class="{selected === item.id ? 'text-white' : 'text-emerald-700'}  group-hover:text-white cursor-pointer">{item.text}</h6>
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
