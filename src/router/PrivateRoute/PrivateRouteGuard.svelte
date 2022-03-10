<script>
    import { userStore } from "../../store/userStore/UserStore";
    import { useLocation, useNavigate } from "svelte-navigator";

    const navigate = useNavigate();
    const location = useLocation();

    
    $: if ($userStore.isLoggedIn === false && $userStore.username === "") {
        console.log($userStore)
        console.log("white is this")
        navigate("/login", {
            state: { from: $location.pathname },
            replace: true,
        });
    }
</script>

{#if $userStore.isLoggedIn && $userStore.username}
    <slot />
{/if}
