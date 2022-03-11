<script>
    // @ts-nocheck
    import { userStore } from "../../store/userStore/UserStore";
    import SpinnerButton from "../../shared/Button/SpinnerButton.svelte";
    import { useLocation, useNavigate } from "svelte-navigator";
    import { user } from "../../Util/Utility";
    import Swal from "sweetAlert2";
    import Icon from "@iconify/svelte";
    import { onMount, onDestroy } from "svelte";

    let disabled = false;
    let isSpinner = false;
    let showPass = false;
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        isSpinner = !isSpinner;
        disabled = true;
        const formApi = new FormData(e.currentTarget);
        const formData = Object.fromEntries(formApi.entries());
        if (user.username === formData.username && user.password === formData.password) {
            userStore.setUser({ username: formData.username, isLoggedIn: true, password: formData.password });
            navigate($location.state.from || "/", { replace: true });
        } else {
            isSpinner = false;
            disabled = false;
            Swal.fire("Invalid Credential", "", "error");
        }
    };

    onMount(() => {
        document.body.style.cssText = `background: url(/images/login-bg.png) left bottom / cover no-repeat #0000004f;
                                       overflow-x: hidden;
                                       background-blend-mode: soft-light;`;
    });

    onDestroy(() => {
        document.body.style.cssText = null;
    });
</script>

<svelte:head>
    <title>Secret Doors</title>
</svelte:head>
<div>
    <div class="login-form w-full">
        <div class="md:w-5/12 bg-white p-10 mx-auto mt-10 shadow-lg rounded-md">
            <div class="text-center">
                <h3 class="text-4xl text-center mb-5 bg-emerald-500 text-white py-2  rounded-md inline-block px-5">Room's Door.</h3>
            </div>
            <form class="" on:submit|preventDefault={handleLoginSubmit}>
                <div class="mb-5">
                    <label for="input-name" class="inline-block mb-1">Username</label>
                    <input required id="input-name" name="username" type="text" class="border-2 border-emerald-200 block w-full p-2 focus:outline-none focus:shadow-md rounded-lg" />
                </div>
                <div class="mb-5 relative">
                    <label for="input-name" class="inline-block mb-1">Password</label>
                    <input required type={showPass ? "text" : "password"} name="password" class="border-2 border-emerald-200 block w-full p-2 focus:outline-none focus:shadow-md rounded-lg" />
                    <button on:click={() => (showPass = !showPass)} type="button" class="absolute right-[10px] top-[45%] cursor-pointer hover:bg-slate-200 rounded-full p-1">
                        <Icon class="text-3xl" icon={!showPass ? "codicon:eye" : "codicon:eye-closed"} />
                    </button>
                </div>
                <div class="text-center">
                    <SpinnerButton {disabled} type={"submit"} on:click={() => null} {isSpinner} outline={true}>Submit</SpinnerButton>
                </div>
            </form>
        </div>
    </div>
</div>
