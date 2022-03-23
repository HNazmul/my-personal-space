<script context="module">
    //component store
    export const appbarStore = writable({ isAppbarShow: false });
</script>

<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, onMount, tick } from "svelte";
    import { writable } from "svelte/store";
    import { fade } from "svelte/transition";
    import { sidebarStore } from "../AllAppsSidebar/AllAppsSidebar.svelte";
    import AddInitialDesktopApp from "./../../apps/InitialDesktopApp/AddInitialDesktopApp.svelte";
    export let menuData = [{ option: "Add Initial desktop app", icon: "/images/icon/all-buyer.png", appComponent: AddInitialDesktopApp }];

    // varibale stuff
    const dispatcher = createEventDispatcher();
    console.log(menuData);

    // reactive stuff
    $: if ($appbarStore.isAppbarShow) {
        document.body.classList.add("body-mute");
    } else {
        document.body.classList.remove("body-mute");
    }

    //method stuff
    const _onshowingBar = () => {
        if ($sidebarStore.isSideBarShow) {
            sidebarStore.update((prev) => ({ ...prev, isSideBarShow: false }));
        }
        appbarStore.update((prev) => ({ ...prev, isAppbarShow: !$appbarStore.isAppbarShow }));

        if ($appbarStore.isAppbarShow) {
            dispatcher("showingBar", true);
        }
    };


</script>

<!-- HTML Markup -->

{#if $appbarStore.isAppbarShow}
    <div class="fixed w-full h-full top-0 left-0 grid place-items-center z-[995]">
        <div in:fade class="w-[280px] h-[450px] bg-white mx-auto rounded-lg shadow-xl p-3 pr-0 ">
            <div class="w-full h-full  overflow-y-auto pr-3" />
        </div>
    </div>
{/if}

<div
    on:click|stopPropagation={_onshowingBar}
    class="menus add-button lg:hidden w-[45px] h-[45px] rounded-full select-none bg-purple-100 fixed bottom-[75px] right-3 border-2 border-purple-600  text-purple-600 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-[999] cursor-pointer hover:shadow-lg transition-all "
>
    {#if $appbarStore.isAppbarShow}
        <Icon icon="line-md:close" inline={true} class="text-3xl" />
    {:else}
        <Icon icon="fluent:apps-list-detail-24-filled" inline={true} class="text-3xl" />
    {/if}
</div>
