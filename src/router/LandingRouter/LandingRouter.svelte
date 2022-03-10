<script>
    import { Route } from "svelte-navigator";
    import Navbar from "./../../components/Navbar/Navbar.svelte";
    import { publicRoutes } from "./LandingRouteData";
</script>

<Navbar />
{#each publicRoutes as route, i}
    <Route let:location let:params path={route.path}>
        <svelte:component this={route.component} />
    </Route>
{/each}
