<script>
    import Apps from "/src/pages/Dashboard/apps/Apps.svelte";
    import { Route } from "svelte-navigator";
    import DashboardBar from "/src/components/DashboardBar/DashboardBar.svelte";

    console.log("log");
</script>

<DashboardBar />
<Route path="/" />
<Route path="/apps">
    <Apps />
</Route>
