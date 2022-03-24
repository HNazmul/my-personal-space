// @ts-nocheck
import AddInitialDesktopApp from "../apps/InitialDesktopApp/AddInitialDesktopApp.svelte";
import InitialDesktopApp from "../apps/InitialDesktopApp/InitialDesktopApp.svelte";
import ShowClients from "../apps/ClientInfo/ShowClients.svelte";
import AddClient from "../apps/ClientInfo/AddClient.svelte";
import { clientInfoMenuData } from "../apps/ClientInfo/applicationMenuData";
import InitialClientInfoPage from "/src/apps/ClientInfo/InitialClientInfoPage.svelte";
import { Data__initialDesktopAppMenu } from "/src/apps/InitialDesktopApp/initialDesktopappMenuData";
import InitialAppViewDeskAppSvelte from "/src/apps/InitialDesktopApp/InitialAppViewDeskApp.svelte";

export const infoSidebarData = [
    {
        text: "Client",
        id: "all_client",
        component: InitialClientInfoPage,
        icon: "/images/icon/all-buyer.png",
        menus: clientInfoMenuData,
    },
    {
        text: "Used App",
        id: "initail_desktop_app",
        component: InitialAppViewDeskAppSvelte,
        icon: "/images/icon/all-buyer.png",
        menus: Data__initialDesktopAppMenu,
    },
];
