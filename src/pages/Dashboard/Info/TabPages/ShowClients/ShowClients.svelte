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

<div
    class="add-button w-[45px] h-[45px] rounded-full select-none bg-white fixed bottom-20 right-3 border-2 border-gray-400 shadow-md text-gray-400 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-50 cursor-pointer hover:shadow-lg transition-all transform hover:scale-110"
>
    <Icon icon="fluent:apps-add-in-20-filled" class="text-3xl" />
</div>

<style>
</style>
