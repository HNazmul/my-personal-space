import { writable } from "svelte/store";

export const menuStore = writable({isSidebarShow:false,isAppBarShow:false})