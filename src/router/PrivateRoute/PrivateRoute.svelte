<script>
    import { userStore } from "../../store/userStore/UserStore";
    import { user } from "./../../Util/Utility.js";
    import { onMount } from "svelte";

    import { Route } from "svelte-navigator";
    import PrivateRouteGuard from "./PrivateRouteGuard.svelte";

    export let path = "";

    onMount(() => {
        const { username, password } = JSON.parse(sessionStorage.getItem("user"));
        console.log(username,password,user)
        console.log(username === user.username, user.password === password)
        if (username === user.username && user.password === password) {
            userStore.setUser({ username, isLoggedIn: true, password: password });
        }
    });
</script>

<Route {path} {...$$props} let:location let:navigate let:params>
    <PrivateRouteGuard>
        <slot {location} {navigate} {params} />
    </PrivateRouteGuard>
</Route>
