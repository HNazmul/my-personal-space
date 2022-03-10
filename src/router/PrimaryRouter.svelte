<script>
    import { Route } from "svelte-navigator";
    import PrivateRoute from "./PrivateRoute/PrivateRoute.svelte";
    import DashboardRouter from "./DashboardRouter/DashboardRouter.svelte";
    import LandingRouter from "./LandingRouter/LandingRouter.svelte";

</script>

<Route primary={false} path="/*">
    <LandingRouter />
</Route>
<PrivateRoute primary={false} path="/admin/*">
    <DashboardRouter />
</PrivateRoute>
