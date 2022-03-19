<script context="module">
    import ShowClients from "./../pages/Dashboard/Info/TabPages/ShowClients/ShowClients.svelte";
    import AddClient from "./../pages/Dashboard/Info/TabPages/AddClient/AddClient.svelte";

    export const dashboardSidebarData = [
        {
            text: "Client",
            id: "all_client",
            component: ShowClients,
            icon: "/images/icon/all-buyer.png",
        },
        {
            text: "Add Client",
            id: "add_client",
            component: AddClient,
            icon: "/images/icon/add-buyer (2).png",
        },
        {
            text: "Client",
            id: "all_clie3nt",
            component: ShowClients,
            icon: "/images/icon/all-buyer.png",
        },
    ];
</script>
