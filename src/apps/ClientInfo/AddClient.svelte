<script>
    import CircleIconButton from "./../../shared/Button/CircleIconButton.svelte";
    import TabPageTitle from "/src/components/TabPageTitle/TabPageTitle.svelte";
    import SpinnerButton from "../../shared/Button/SpinnerButton.svelte";
    import BorderLabelInput from "/src/shared/Input/BorderLabelInput.svelte";
    import { v4 } from "uuid";
    import { onMount } from "svelte";
    // variables stuffs
    let uploadedImgURI = "";
    let spinners = { submitbtn: false };
    let isSociallLinkPopup = false;
    let socialLinkList = [];

    // $$ Reactive Values
    $: console.log(socialLinkList);

    //===== FUNCTIONS && METHODS ===========//
    const uploadingFile = (e) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", function (e) {
            // @ts-ignore
            uploadedImgURI = this.result;
        });

        fileReader.readAsDataURL(e.target.files[0]);
    };
    const on_socialFormSubmit = (e) => {
        const formApi = new FormData(e.currentTarget);
        const formData = Object.fromEntries(formApi);
        formData.id = v4();
        socialLinkList = [...socialLinkList, formData];
        e.currentTarget.reset();
    };

    const togglingSocilFormPopup = (type) => {
        isSociallLinkPopup = type === "SHOW" ? true : false;
        if (type === "SHOW") document.body.classList.add("body-mute");
        else document.body.classList.remove("body-mute");
    };

    // ========== lIFE CYCLE METHOD ============//
    onMount(() => {
        document.body.classList.remove("body-mute");
    });
</script>

<!-- HTML MURKUP -->
<TabPageTitle title="Add Client Info" />
<div class="">
    <div class="form-container xl:w-8/12 mx-auto lg:p-4 relative rounded-lg">
        <form on:submit|preventDefault class="">
            <div class="lg:flex flex-wrap gap-x-10">
                <div class="lg:w-4/12">
                    <BorderLabelInput _class={{ area: "p-2 box-border" }} value={{ label: "Upload Profile of Client" }}>
                        <svelte:fragment slot="input">
                            <div class="avatar lg:w-full my-5 mx-auto w-[200px]">
                                <label
                                    class="box w-full text-xl overflow-hidden border-dotted cursor-pointer hover:bg-slate-100 text-slate-300 h-[200px] grid place-items-center border-emerald-200 border-[3px] rounded-md "
                                    for="file-avatar"
                                >
                                    {#if uploadedImgURI}
                                        <img src={uploadedImgURI} class="w-full rounded-[inherit] p-1 h-full object-cover" alt="" />
                                    {:else}
                                        Upload A file
                                    {/if}
                                    <input on:change={uploadingFile} id="file-avatar" class="hidden" type="file" />
                                </label>
                            </div>
                        </svelte:fragment>
                    </BorderLabelInput>
                </div>

                <div class="lg:w-7/12">
                    <BorderLabelInput _class={{ area: "mb-7" }} name="name" type="text" value={{ label: "Client Name" }} />
                    <BorderLabelInput _class={{ area: "mb-7" }} name="email" type={"email"} value={{ label: "Client Email" }} />
                    <BorderLabelInput _class={{ area: "mb-7" }} name="" value={{ label: "Client Name" }} />
                    <BorderLabelInput _class={{ area: "mb-7" }} value={{ label: "Client Address" }} />
                </div>
                <div class="w-full">
                    <BorderLabelInput let:defaultInputClass value={{ label: "Add Short Description About Client" }}>
                        <svelte:fragment slot="input">
                            <textarea class="{defaultInputClass} mb-0 w-full resize-none" rows="5" />
                        </svelte:fragment>
                    </BorderLabelInput>
                </div>
                <div class="w-full">
                    <BorderLabelInput value={{ label: "Social Links " }}>
                        <svelte:fragment slot="input">
                            <div class="p-2 flex flex-wrap gap-2 justify-start bg-white rounded-[inherit]">
                                {#each socialLinkList as social}
                                    <div class="linkblock border p-1 px-4 bg-gray-100 inline-block text-gray-400 font-medium rounded shadow">{social?.name}</div>
                                {/each}
                                <button on:click={() => togglingSocilFormPopup("SHOW")} class="linkblock p-1 px-4 bg-emerald-300 inline-block text-gray-700 font-medium rounded shadow text-sm"
                                    >Add More</button
                                >
                            </div>
                        </svelte:fragment>
                    </BorderLabelInput>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- Additional Links HTMl POPUP -->
{#if isSociallLinkPopup}
    <div class="social_link_popup shadow-2xl shadow-gray-400 relative">
        <div class="p-6 flex flex-wrap gap-2 justify-center">
            {#each socialLinkList as social}
                <div class="linkblock p-1 px-4 bg-gray-100 inline-block text-gray-400 font-medium rounded shadow">{social?.name}</div>
            {/each}
        </div>
        <!-- PopUp Forms -->
        <form on:submit|preventDefault={on_socialFormSubmit}>
            <div class=" text-center border py-3 bg-slate-50">
                <h2>Add Socila Link Info</h2>
            </div>
            <div class="p-3">
                <!-- Inputs -->
                <BorderLabelInput required={true} _class={{ area: "mb-7" }} name="name" value={{ label: "Social Profile name" }} />
                <BorderLabelInput required={true} _class={{ area: "mb-7" }} name="link" value={{ label: "Social Profile Link" }} />

                <!-- Buttons  -->
                <div class="sm:flex gap-3 justify-center ">
                    <SpinnerButton _class="w-full sm:w-auto mb-2">Submit</SpinnerButton>
                    <SpinnerButton
                        on:click={() => {
                            socialLinkList = [];
                            togglingSocilFormPopup("");
                        }}
                        type="button"
                        variant="empty"
                        _class="bg-red-600 text-white w-full sm:w-auto mb-2 ">cancel</SpinnerButton
                    >
                    <SpinnerButton on:click={() => togglingSocilFormPopup("")} _class="w-full sm:w-auto mb-2" type="button" variant={"secondary"}>Add to Form</SpinnerButton>
                </div>
            </div>
        </form>

        <CircleIconButton on:click={() => (isSociallLinkPopup = false)} icon="la:times" _class="absolute top-2 right-2  border-red-400 border-[1px] text-red-400 w-[30px] h-[30px] text-lg" />
    </div>
{/if}

<style>
    .social_link_popup {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 995;
        background: white;
        width: 95%;
        height: 95%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
    }
    @media screen and (min-width: 700px) {
        .social_link_popup {
            width: 700px;
            height: 500px;
        }
    }
</style>
