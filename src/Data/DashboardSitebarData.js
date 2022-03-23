// @ts-nocheck
import AddInitialDesktopApp from "../apps/InitialDesktopApp/AddInitialDesktopApp.svelte";
import InitialDesktopApp from "../apps/InitialDesktopApp/InitialDesktopApp.svelte";
import ShowClients from "../apps/ClientInfo/ShowClients.svelte";
import AddClient from "../apps/ClientInfo/AddClient.svelte";
import { clientInfoMenuData } from "../apps/ClientInfo/applicationMenuData";

export const infoSidebarData = [
    {
        text: "Client",
        id: "all_client",
        component: ShowClients,
        icon: "/images/icon/all-buyer.png",
        menus: clientInfoMenuData,
    },
    {
        text: "Used App",
        id: "initail_desktop_app",
        component: InitialDesktopApp,
        icon: "/images/icon/all-buyer.png",
    },
];
