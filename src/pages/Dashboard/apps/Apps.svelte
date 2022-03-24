<script context="module">
    export const store_renderView = writable({
        name: "All Client Details",
        component: ShowClients,
        id: "all_client_details",
    });
</script>

<script>
    import AllAppsSidebar from "../../../components/AllAppsSidebar/AllAppsSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";
    import { infoSidebarData } from "../../../Data/DashboardSitebarData";
    import ApplicationBar from "/src/components/ApplicationBar/ApplicationBar.svelte";
    import InitialAppView from "./InitialAppView.svelte";
    import { writable } from "svelte/store";
    import ShowClients from "/src/apps/ClientInfo/ShowClients.svelte";
    
    let selectedTab = infoSidebarData[0];
    let isSidebarShow = false;
    
    const onSelectTab = (e) => {
        store_renderView.set(e.detail?.menus[0]);
        selectedTab = e.detail;
    };
    $: console.log({s:$store_renderView});
</script>

<Container _class={"mb-14"}>
    <div class="lg:flex">
        <div class="md:w-3/12 xl:w-2/12  p-2">
            <AllAppsSidebar _class="max-w-full md:max-w-[400px] md:left-8" items={infoSidebarData} on:selectTab={onSelectTab} />
        </div>
        <div class=" xl:w-10/12 w-full p-2">
            <svelte:component this={$store_renderView.component} />
        </div>
    </div>
</Container>
<ApplicationBar menuData={selectedTab.menus} />
