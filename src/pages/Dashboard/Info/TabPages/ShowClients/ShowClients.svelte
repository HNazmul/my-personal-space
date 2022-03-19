<script>
    import Icon from "@iconify/svelte";
    import ClientCard from "/src/components/ClientCard/ClientCard.svelte";
</script>

<!-- Head Data -->
<svelte:head>
    <title>Clients All Details</title>
</svelte:head>

<!-- HTML Markup -->
<div class="title">
    <div class="fixed top-0 py-3 bg-white w-full left-0 md:static border-b-2 border-gray-300">
        <h2 class="text-xl text-center font-medium">Show All Client Details</h2>
    </div>
    <div class="pb-10" />
</div>

<div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
    <ClientCard />
    <ClientCard />
    <ClientCard />
    <ClientCard />
</div>

<div class="add-button w-[45px] h-[45px] rounded-full bg-white fixed bottom-20 right-3 border shadow grid place-items-center">
    <Icon icon="fluent:apps-add-in-20-filled" class="text-3xl text-gray-500" />
</div>

<style>
</style>
