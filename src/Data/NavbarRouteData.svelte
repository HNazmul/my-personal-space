<script context="module">
    export const navbarRouteData = [
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
</script>
