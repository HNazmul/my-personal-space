<script>
    // @ts-nocheck
    import Icon from "@iconify/svelte";
    import { initialDeskAppData } from "/src/Data/InitialdesktopAppData.js";
    import InitialDesktopAppCard from "/src/components/InitialDesktopAppCard/InitialDesktopAppCard.svelte";
    import TabPageTitle from "../../components/TabPageTitle/TabPageTitle.svelte";
</script>

<!-- HTML Markup  -->
<TabPageTitle title="Initail Desktop Application" />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {#each initialDeskAppData as appdata}
        <InitialDesktopAppCard {appdata} />
    {/each}
</div>

<div
    class="add-button w-[45px] h-[45px] rounded-full select-none bg-white fixed bottom-20 right-3 border-2 border-gray-400 shadow-md text-gray-400 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-50 cursor-pointer hover:shadow-lg transition-all transform hover:scale-110"
>
    <Icon icon="fluent:apps-add-in-20-filled" class="text-3xl" />
</div>
