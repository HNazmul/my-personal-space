<script>
    import Info from "../../apps/Apps.svelte";
    import { Route } from "svelte-navigator";
    import DashboardBar from "/src/components/DashboardBar/DashboardBar.svelte";

    console.log("log");
</script>

<DashboardBar />
<Route path="/">
</Route>
<Route path="/info">
    <Info/>
</Route>
