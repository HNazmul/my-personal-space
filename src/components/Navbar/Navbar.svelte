<script>
    // @ts-nocheck

    import { userStore } from "./../../store/userStore/UserStore.js";
    import { Link, useLocation } from "svelte-navigator";
    import { onMount } from "svelte";

    //variables
    const location = useLocation();
    let toogle = { container: false, closer: false };

    //reactive
    $: activePath = $location.pathname;
    $: console.log(toogle);

    const navbarItems = [
        {
            text: "Home",
            path: "/",
            children: [],
        },
        {
            text: "Admin",
            path: "/admin",
            children: [],
        },
        {
            text: "About Me",
            path: "https://hnazmul.me",
            children: [],
        },
        {
            text: "Dropdown",
            path: "",
            children: [
                {
                    text: "Admin",
                    path: "/admin",
                },
                {
                    text: "Login",
                    path: "/login",
                },
                {
                    text: "Home",
                    path: "/",
                },
            ],
        },
    ];

    onMount(() => {
        try {
            const navbarDropdownAtMobile = () => {
                if (window.innerWidth <= 800) {
                    document.querySelectorAll(".dropdown-wrapper").forEach((dropdown) => {
                        const dropdownItem = dropdown.querySelector(".dropdown-items");
                        const dropdownLink = dropdown.querySelector(".dropdown-link");
                        let clicked = true;
                        dropdownLink.addEventListener("click", function (e) {
                            if (dropdownItem) {
                                if (clicked) {
                                    dropdownItem.style.maxHeight = dropdownItem.scrollHeight + "px";
                                    clicked = !clicked;
                                } else {
                                    dropdownItem.style.maxHeight = 0 + "px";
                                    clicked = !clicked;
                                }
                            }
                            console.log(e.target.tagName === "A" && e.target.getAttribute("href"));
                            if (e.target.tagName === "A" && e.target.getAttribute("href")) {
                                tooglingItem();
                            }
                        });
                    });
                }
            };
            navbarDropdownAtMobile();

            window.addEventListener("resize", () => {
                navbarDropdownAtMobile();
            });
        } catch (e) {
            console.error(e);
        }
    });

    const togglingContent = (type) => {
        if (type === "hide") {
            return (toogle = { closer: false, container: false });
        } else if (type === "show") {
            return (toogle = { closer: true, container: true });
        }
    };
</script>

<nav id="Hnazmul__Navbar_DDMC">
    <div class="container navbar-container">
        <div class="navbar-brand">
            <h3>Navbar</h3>
        </div>
        <div class="navbar-items-container {toogle.container ? 'active' : ''}">
            {#each navbarItems as navItem}
                <div class="navbar-item">
                    <div class="dropdown-wrapper">
                        {#if navItem.children.length > 0}
                            <button class="dropdown-link text-left">{navItem?.text}</button>
                        {:else}
                            <Link on:click={() => togglingContent("hide")} class="dropdown-link" to="/">{navItem.text}</Link>
                        {/if}
                        <div class="dropdown-items">
                            {#if navItem.children.length > 0}
                                <ul class="item-container">
                                    {#each navItem.children as navItemChild}
                                        <li class="item"><Link on:click={() => togglingContent("hide")} to={navItemChild.path} class="link">{navItemChild.text}</Link></li>
                                    {/each}
                                </ul>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}

            {#if !$userStore.isLoggedIn}
                <div class="navbar-item">
                    <div class="dropdown-wrapper">
                        <Link on:click={()=> togglingContent("hide")} class="dropdown-link" to="/login">Login</Link>
                    </div>
                </div>
            {:else}
                <div class="navbar-item">
                    <div class="dropdown-wrapper">
                        <Link on:click={()=> togglingContent("hide")} class="dropdown-link" to="/logout">Logout</Link>
                    </div>
                </div>
            {/if}

            <div on:click={togglingContent.bind(this, "hide")} class="container-closer {toogle.closer ? 'active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9Zm0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5Z" />
                    <path fill="currentColor" d="M9 15.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22Z" />
                    <path fill="currentColor" d="M15 15.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z" />
                </svg>
            </div>
        </div>
        <div on:click={togglingContent.bind(this, "show")} class="navbar-toggler">
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
