import AddClient from "./AddClient.svelte";
import ShowClients from "./ShowClients.svelte";

export const clientInfoMenuData = [
    {
        name: "Show all Client",
        component: ShowClients,
        id: "show_client_info",
    },
    {
        name: "Add Client Info",
        component: AddClient,
        id: "add_client_info",
    },
    
];
