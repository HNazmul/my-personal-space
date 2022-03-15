<script>
    import SpinnerButton from "/src/shared/Button/SpinnerButton.svelte";
    import DashboardSidebar from "./../../../components/DashboardSidebar/DashboardSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";
    import AddClient from "./TabPages/AddClient/AddClient.svelte";

    let selectedTab = {};

    const onSelectTab = (e) => {
        selectedTab = e.detail;
    };

    const tabData = [
        {
            text: "Client",
            id: "all_client",
            components: "",
        },
        {
            text: "Add Client",
            id: "add_client",
            components: "",
        },
    ];
</script>

<Container _class={"mb-14"}>
    <div class="lg:flex">
        <div class="md:w-3/12 xl:w-2/12  p-2">
            <DashboardSidebar _class="max-w-[95%] sm:max-w-[400px] md:left-8" items={tabData} on:selectTab={onSelectTab} />
        </div>
        <div class=" xl:w-10/12 w-full p-2">
            <AddClient />
        </div>
    </div>
</Container>
