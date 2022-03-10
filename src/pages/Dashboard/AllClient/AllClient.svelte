<script>
    import DashboardSidebar from "./../../../components/DashboardSidebar/DashboardSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";

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

<Container>
    <div class="flex">
        <div class="lg:w-2/12 p-2 ">
            <DashboardSidebar items={tabData}  on:selectTab={onSelectTab} />
        </div>
        <div class="lg:w-10/12 p-2 border">
            <p>Lorem ipsum dolor sit, ametamet consectetur adipisicing elit. Exercitationem corporis nisi voluptatem ipsa ad alias quisquam illo voluptatibus rerum at.</p>
        </div>
    </div>
</Container>
