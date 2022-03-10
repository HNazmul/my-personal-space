<script>
    import { userStore } from "./../../store/userStore/UserStore.js";
    import { onMount } from "svelte";

    onMount(() => {
        userStore.logOutUser();
    });
</script>

<main class="w-full h-screen grid place-items-center">
    <div class="">
        <h1 class="text-4xl">SuccessFully Logged Out</h1>
    </div>
</main>
