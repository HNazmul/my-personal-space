<script>
    import SpinnerButton from "../../shared/Button/SpinnerButton.svelte";
    let uploadedImgURI = "";
    let spinners = { submitbtn: false };

    const uploadingFile = (e) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", function (e) {
            // @ts-ignore
            uploadedImgURI = this.result;
        });

        fileReader.readAsDataURL(e.target.files[0]);
    };
</script>



<!-- HTML MURKUP -->
<div class="">
    <div class="form-container xl:w-8/12 mx-auto bg-white p-4 relative rounded-lg border-2 border-gray-200">
        <h1 class="text-2xl text-center text-gray-400 font-medium">Add Client Details</h1>
        <form on:submit|preventDefault class="py-10">
            <div class="lg:flex">
                <div class="avatar w-4/12 my-5">
                    <label
                        class="box w-[200px] text-xl overflow-hidden border-dotted cursor-pointer hover:bg-slate-100 text-slate-300 h-[200px] grid place-items-center border-emerald-200 border-[3px] rounded-md "
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
                <div class="lg:w-7/12">
                    <div class="mb-3">
                        <label for="cleient-name" class="px-2 inline-block mb-1">Client Name</label>
                        <input type="text" class="input-primary" />
                    </div>
                    <div class="mb-3">
                        <label for="cleient-name" class="px-2 inline-block mb-1">Client Email</label>
                        <input type="text" class="input-primary" />
                    </div>
                    <div class="">
                        <label for="cleient-name" class="px-2 inline-block mb-1">Client Number</label>
                        <input type="text" class="input-primary" />
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-3 py-4">
                <div class="mb-3">
                    <label for="cleient-name" class="px-2 inline-block mb-1">Client Address</label>
                    <input type="text" class="input-primary" />
                </div>
                <div class="mb-3">
                    <label for="cleient-name" class="px-2 inline-block mb-1">Client</label>
                    <input type="text" class="input-primary" />
                </div>
            </div>
            <div class="">
                <SpinnerButton type={"submit"} isSpinner={spinners.submitbtn} on:click={() => (spinners = { ...spinners, submitbtn: false })} _class="bg-violet-900">Submit</SpinnerButton>
            </div>
        </form>

        <div class="info-icon text-green-600 cursor-pointer  lg:absolute top-5 right-6 flex select-none">
            <span class="iconify text-2xl mr-2" data-icon="fa6-solid:circle-info" />
            <span>Bulk Add</span>
        </div>
    </div>
</div>
