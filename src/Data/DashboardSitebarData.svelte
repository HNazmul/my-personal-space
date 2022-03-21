<script context="module">
    import AddInitialDesktopApp from "./../pages/Dashboard/Info/TabPages/AddInitialDesktopApp/AddInitialDesktopApp.svelte";
    import InitialDesktopApp from "./../pages/Dashboard/Info/TabPages/InitialDesktopApp/InitialDesktopApp.svelte";
    import ShowClients from "./../pages/Dashboard/Info/TabPages/ShowClients/ShowClients.svelte";
    import AddClient from "./../pages/Dashboard/Info/TabPages/AddClient/AddClient.svelte";

    export const infoSidebarData = [
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
            text: "Initial App",
            id: "initail_desktop_app",
            component: InitialDesktopApp,
            icon: "/images/icon/all-buyer.png",
        },
        {
            text: "Add App",
            id: "add_initial_desktop_app",
            component: AddInitialDesktopApp,
            icon: "/images/icon/all-buyer.png",
        },
    ];
</script>
