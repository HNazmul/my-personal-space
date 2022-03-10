<script>
    import { Link, useLocation } from "svelte-navigator";

    const location = useLocation();
</script>

<!-- Dashboard Bar HTML -->
<nav class="w-full bg-white mx-auto border-b-2 border-green-600">
    <div class="bar-content w-7/5 mx-auto ">
        <ul class="w-full flex justify-center">
            <li class:activePath={$location.pathname === "/admin/clients"} class="text-slate-600 " >
                <Link to="clients" class="hover:bg-emerald-500 hover:text-white px-3 py-2 text-lg inline-block">Clients</Link>
            </li>
            <li class:activePath={$location.pathname === "/admin"} class="text-slate-600 " >
                <Link to="./" class="hover:bg-emerald-500 hover:text-white  px-3 py-2 text-lg inline-block">Home</Link>
            </li>
            <li>
                <Link to="/logout" class="hover:bg-emerald-500 hover:text-white  px-3 py-2 text-lg inline-block">Logout</Link>
            </li>
        </ul>
    </div>
</nav>

<style>
    .activePath {
        background: #10b981;
        color: white ;
    }
</style>
