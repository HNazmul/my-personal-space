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

