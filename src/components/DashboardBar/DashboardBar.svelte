<script>
    import Icon from "@iconify/svelte";
    import { Link, useLocation } from "svelte-navigator";

    const location = useLocation();
</script>

<!-- Dashboard Bar HTML -->
<nav class="w-full bg-white mx-auto border-t-2 lg:border-t-0 lg:border-b-2 border-green-600 fixed md:static z-[999] md:z-0 bottom-0 ">
    <div class="bar-content w-7/5 mx-auto ">
        <ul class="w-full flex justify-center">
            <li class:activePath={$location.pathname === "/admin/info"} class="text-slate-600 ">
                <Link to="info" class="hover:bg-emerald-500 hover:text-white px-3 md:px-3 py-2 tracking-widest inline-block text-[11px]  md:text-lg font-normal text-center">
                    <Icon icon="bi:info-square" class="text-2xl md:hidden mx-auto" />
                    <span class="hidden md:inline-block">Info</span>
                </Link>
            </li>
            <li class:activePath={$location.pathname === "/admin"} class="text-slate-600 ">
                <Link to="/admin" class="hover:bg-emerald-500 hover:text-white px-3 md:px-3 py-2 tracking-widest inline-block text-[11px]  md:text-lg font-normal text-center">
                    <Icon icon="tabler:layout-dashboard" class="text-2xl md:hidden mx-auto" />
                    <span class="hidden md:inline-block">Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/logout" class="hover:bg-emerald-500 hover:text-white px-3 md:px-3 py-2 tracking-widest inline-block text-[11px]  md:text-lg font-normal text-center">
                    <Icon icon="tabler:logout" class="text-2xl md:hidden mx-auto" />
                    <span class="hidden md:inline-block">Admin</span>
                </Link>
            </li>
        </ul>
    </div>
</nav>

<style>
    .activePath {
        background: #10b981;
        color: white;
    }
</style>
