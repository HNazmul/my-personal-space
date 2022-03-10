import { writable } from "svelte/store";

const user = () => {
    const { subscribe, update, set } = writable({
        username: "",
        isLoggedIn: undefined,
    });

    return {
        subscribe,
        setUser: (/** @type {{ username: string; isLoggedIn: boolean;password:any }} */ user) => {
            sessionStorage.setItem("user", JSON.stringify(user));
            set(user);
        },
        logOutUser: () => {
            sessionStorage.removeItem("user")
            set({ username: "", isLoggedIn: false });
        },
        updateUser: (/** @type {{ username: string; isLoggedIn: boolean;password:any }} */ user) => update((prev) => ({ ...prev, ...user })),
    };
};

export const userStore = user();
