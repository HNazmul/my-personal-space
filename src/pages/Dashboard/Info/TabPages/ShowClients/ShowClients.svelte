<script>
    import Icon from "@iconify/svelte";
    import TabPageTitle from "/src/components/TabPageTitle/TabPageTitle.svelte";
    import { clientsDetailsData } from "../../../../../Data/ClientsDetailsData.svelte";
    import ClientCard from "/src/components/ClientCard/ClientCard.svelte";
</script>

<!-- Head Data -->
<svelte:head>
    <title>Clients All Details</title>
</svelte:head>

<!-- HTML Markup -->
<TabPageTitle title="Show All Client Details"/>

<div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
    {#each clientsDetailsData as clientInfo (clientInfo.id)}
        <ClientCard {clientInfo} />
    {/each}
</div>



<style>
</style>
