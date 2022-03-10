<script>
    import AllClient from "./../../pages/Dashboard/AllClient/AllClient.svelte";
    import { Route } from "svelte-navigator";
    import Dashboard from "./../../pages/Dashboard/Dashboard/Dashboard.svelte";
    import DashboardBar from "/src/components/DashboardBar/DashboardBar.svelte";

    console.log("log");
</script>

<DashboardBar />
<Route path="/">
    <Dashboard />
</Route>
<Route path="/clients">
    <AllClient/>
</Route>
