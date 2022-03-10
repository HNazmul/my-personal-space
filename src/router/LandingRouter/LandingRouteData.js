// @ts-nocheck
import Homepage from "../../pages/Homepage/Homepage.svelte";
import Login from "../../pages/Login/Login.svelte";
import Logout from "../../pages/Logout/Logout.svelte";

export const publicRoutes = [
    {
        path: "/",
        component: Homepage,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/logout",
        component: Logout,
    },
];
