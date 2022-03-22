<script>
    import AllAppsSidebar from "./../components/AllAppsSidebar/AllAppsSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";
    import { infoSidebarData } from "../Data/DashboardSitebarData";
    import ApplicationBar from "/src/components/ApplicationBar/ApplicationBar.svelte";

    let selectedTab = infoSidebarData[0];
    $: console.log(selectedTab);

    const onSelectTab = (e) => {
        selectedTab = e.detail;
    };
</script>

<Container _class={"mb-14"}>
    <div class="lg:flex">
        <div class="md:w-3/12 xl:w-2/12  p-2">
            <AllAppsSidebar _class="max-w-full md:max-w-[400px] md:left-8" items={infoSidebarData} on:selectTab={onSelectTab} />
        </div>
        <div class=" xl:w-10/12 w-full p-2">
            <svelte:component this={selectedTab.component} />
        </div>
    </div>
</Container>
<ApplicationBar />
