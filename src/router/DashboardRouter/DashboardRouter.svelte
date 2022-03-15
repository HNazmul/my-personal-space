<script>
    import Info from "../../pages/Dashboard/Info/Info.svelte";
    import { Route } from "svelte-navigator";
    import Dashboard from "./../../pages/Dashboard/Dashboard/Dashboard.svelte";
    import DashboardBar from "/src/components/DashboardBar/DashboardBar.svelte";

    console.log("log");
</script>

<DashboardBar />
<Route path="/">
    <Dashboard />
</Route>
<Route path="/info">
    <Info/>
</Route>
