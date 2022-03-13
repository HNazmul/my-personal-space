<script>
// @ts-nocheck

    import { userStore } from "./../../store/userStore/UserStore.js";
    import { Link, useLocation } from "svelte-navigator";
    import { onMount } from "svelte";
    const location = useLocation();
    $: activePath = $location.pathname;

    onMount(() => {
        /* =============================================
        DDMC Navbar script
================================================= */
        try {
            const navbar = document.querySelector("nav#Hnazmul__Navbar_DDMC");

            const navbarDropdownAtMobile = () => {
                if (window.innerWidth <= 800) {
                    document.querySelectorAll(".dropdown-wrapper").forEach((dropdown) => {
                        const dropdownItem = dropdown.querySelector(".dropdown-items");
                        const dropdownLink = dropdown.querySelector(".dropdown-link");
                        let clicked = true;
                        dropdownLink.addEventListener("click", function (e) {
                            if (clicked) {
                                dropdownItem.style.maxHeight = dropdownItem.scrollHeight + "px";
                                clicked = !clicked;
                            } else {
                                dropdownItem.style.maxHeight = 0 + "px";
                                clicked = !clicked;
                            }
                        });
                    });
                }
            };
            navbarDropdownAtMobile();

            window.addEventListener("resize", () => {
                navbarDropdownAtMobile();
            });

            //toggoline navbar content
            const navbarToggler = navbar.querySelector(".navbar-toggler");
            const navbarItemsContainer = navbar.querySelector(".navbar-items-container");
            navbarToggler.addEventListener("click", () => {
                navbarItemsContainer.classList.add("active");
                navbarCloser.classList.toggle("active");
            });

            const navbarCloser = navbar.querySelector(".container-closer");
            navbarCloser.addEventListener("click", () => {
                navbarItemsContainer.classList.remove("active");
                navbarCloser.classList.toggle("active");
            });

        } catch (e) {
            console.error(e);
        }
    });
</script>

<!-- <nav class="text-gray-600  bg-white body-font border-b-2 border-emerald-600">
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
</nav> -->
<nav id="Hnazmul__Navbar_DDMC">
    <div class="container navbar-container">
        <div class="navbar-brand">
            <h3>Navbar</h3>
        </div>
        <div class="navbar-items-container">
            <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <Link class="dropdown-link" to="/">Home</Link>
                </div>
            </div>
            <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <Link class="dropdown-link" to="/admin">Admin</Link>
                </div>
            </div>
            <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <a class="dropdown-link" href="https://www.hnazmul.me">About Me</a>
                </div>
            </div>
            {#if !$userStore.isLoggedIn}
                <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <Link class="dropdown-link" to="/login">Login</Link>
                </div>
            </div>
            {:else}
             <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <Link class="dropdown-link" to="/logout">Logout</Link>
                </div>
            </div>
            {/if}
            <!-- <div class="navbar-item">
                <div class="dropdown-wrapper">
                    <a class="dropdown-link" href="#">Dropdown</a>
                    <div class="dropdown-items">
                        <ul class="item-container">
                            <li class="item"><a href="#" class="link">Dropdown-1</a></li>
                            <li class="item"><a href="#" class="link">Dropdown-2</a></li>
                            <li class="item"><a href="#" class="link">Dropdown-3</a></li>
                            <li class="item"><a href="#" class="link">Dropdown-4</a></li>
                            <li class="item"><a href="#" class="link">Dropdown-5</a></li>
                        </ul>
                    </div>
                </div>
            </div> -->

            <div class="container-closer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9Zm0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5Z" />
                    <path fill="currentColor" d="M9 15.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22Z" />
                    <path fill="currentColor" d="M15 15.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z" />
                </svg>
            </div>
        </div>
        <div class="navbar-toggler">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995ZM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995Zm-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99h12.01Z"
                />
            </svg>
        </div>
    </div>
</nav>

<style>
    nav {
        box-sizing: border-box;
        width: 100%;
    }
    .activePath {
        background-color: rgb(5 150 105 /1);
        color: white;
    }
</style>
