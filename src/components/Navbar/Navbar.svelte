<script>
    import { userStore } from "./../../store/userStore/UserStore.js";
    import { Link, useLocation } from "svelte-navigator";
    const location = useLocation();
    $: activePath = $location.pathname;
</script>

<nav class="text-gray-600  bg-white body-font border-b-2 border-emerald-600">
    <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a href="/" hreflang="" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
        </a>
        <ul class="ml-auto flex space-x-3">
            <li class:activePath={activePath === "/"} class="rounded-full">
                <Link class="py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full inline-block" to="/">Home</Link>
            </li>

            <li class:activePath={activePath === "/contact"} class="rounded-full">
                <Link class="py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full inline-block" to="/contact">Contact</Link>
            </li>
            {#if $userStore.isLoggedIn}
                <li class="rounded-full">
                    <Link class="py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full inline-block" to="/admin">Admin</Link>
                </li>
            {/if}

            <li class="bg-white py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full">
                <a href="https://hnazmul.me" target="_blank">About Me</a>
            </li>
            {#if !$userStore.isLoggedIn}
                <li class:activePath={activePath === "/login"} class="rounded-full">
                    <Link class="py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full inline-block" to="/login">Login</Link>
                </li>
            {:else}
             <li  class="rounded-full">
                <Link class="py-2 px-7 hover:bg-[#4f7a56] hover:text-white rounded-full inline-block" to="/logout">Logout</Link>
            </li>
            {/if}
        </ul>
    </div>
</nav>

<style>
    .activePath {
        background-color: rgb(5 150 105 /1);
        color: white;
    }
</style>
