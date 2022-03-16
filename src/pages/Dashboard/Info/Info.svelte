<script>
    import SpinnerButton from "/src/shared/Button/SpinnerButton.svelte";
    import DashboardSidebar from "./../../../components/DashboardSidebar/DashboardSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";
    import AddClient from "./TabPages/AddClient/AddClient.svelte";
    import { dashboardSidebarData } from "../../../Data/DashboardSitebarData.svelte";

    let selectedTab = {};

    const onSelectTab = (e) => {
        selectedTab = e.detail;
    };
</script>

<Container _class={"mb-14"}>
    <div class="lg:flex">
        <div class="md:w-3/12 xl:w-2/12  p-2">
            <DashboardSidebar _class="max-w-full md:max-w-[400px] md:left-8" items={dashboardSidebarData} on:selectTab={onSelectTab} />
        </div>
        <div class=" xl:w-10/12 w-full p-2">
            <AddClient />
        </div>
    </div>
</Container>
