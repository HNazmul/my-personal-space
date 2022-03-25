<script context="module">
    // component module
    export const sidebarStore = writable({ isSideBarShow: false });
</script>

<script>
    // @ts-nocheck
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import { writable } from "svelte/store";
    import { fly } from "svelte/transition";
    import { appbarStore } from "../ApplicationBar/ApplicationBar.svelte";

    export let _class = "";
    export let items = [{ text: "Notthing", id: "W893Akd", icon: "" }];
    let selected = items[0]?.id;
    let windowInnerWidth = window.innerWidth;
    const dispatcher = createEventDispatcher();

    // reactive
    $: if (windowInnerWidth <= 1024) {
        if ($sidebarStore.isSideBarShow) {
            document.body.classList.add("body-mute");
        } else {
            document.body.classList.remove("body-mute");
        }
    } else {
        sidebarStore.update((prev) => ({ ...prev, isSideBarShow: true }));
    }

    // Functions Of components
    const __onclick = (selectedTab) => {
        selected = selectedTab.id;
        sidebarStore.update((prev) => ({ ...prev, isSideBarShow: false }));
        dispatcher("selectTab", selectedTab);
    };

    const __onShowingSidebar = () => {
        if ($appbarStore.isAppbarShow) {
            console.log($appbarStore.isAppbarShow);
            appbarStore.update((prev) => ({ ...prev, isAppbarShow: false }));
            return setTimeout(() => {
                sidebarStore.update((prev) => ({ ...prev, isSideBarShow: !$sidebarStore.isSideBarShow }));
            }, 1);
        }
        sidebarStore.update((prev) => ({ ...prev, isSideBarShow: !$sidebarStore.isSideBarShow }));
    };

    /// LIFE CYCLE METHODS
    onMount(() => {
        window.addEventListener("resize", () => (windowInnerWidth = window.innerWidth));
    });
</script>

{#if $sidebarStore.isSideBarShow}
    <div on:click|stopPropagation transition:fly={{ y: 300, duration: 500 }} class="w-full {_class} fixed bottom-0 left-0 z-[998] lg:static  lg:z-0">
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
<div
    on:click|stopPropagation={__onShowingSidebar}
    class="menus add-button lg:hidden w-[45px] h-[45px] rounded-full select-none bg-emerald-100 fixed bottom-6 right-3 border-2 border-green-600  text-green-600 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-[999] cursor-pointer hover:shadow-lg transition-all "
>
    {#if $sidebarStore.isSideBarShow}
        <Icon icon="line-md:close" inline={true} class="text-3xl" />
    {:else}
        <Icon icon="bi:chevron-double-up" inline={true} class="text-3xl" />
    {/if}
</div>
