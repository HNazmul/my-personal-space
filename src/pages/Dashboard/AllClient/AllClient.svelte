<script>
    import DashboardSidebar from "./../../../components/DashboardSidebar/DashboardSidebar.svelte";
    import Container from "/src/shared/Container/Container.svelte";

    let selectedTab = {};
    let uploadedImgURI = "";

    const onSelectTab = (e) => {
        selectedTab = e.detail;
    };

    const tabData = [
        {
            text: "Client",
            id: "all_client",
            components: "",
        },
        {
            text: "Add Client",
            id: "add_client",
            components: "",
        },
    ];

    const uploadingFile = (e) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", function (e) {
            // @ts-ignore
            uploadedImgURI = this.result;
        });

        fileReader.readAsDataURL(e.target.files[0]);
    };
</script>

<Container>
    <div class="flex">
        <div class="lg:w-2/12 p-2 ">
            <DashboardSidebar items={tabData} on:selectTab={onSelectTab} />
        </div>
        <div class="lg:w-10/12 p-2 border">
            <div class="">
                <div class="form-container lg:w-8/12 mx-auto bg-white p-4">
                    <h1 class="text-2xl text-center text-gray-400 font-medium">Add Client Details</h1>
                    <form on:submit|preventDefault class="py-10">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <label for="cleient-name" class="px-2 inline-block mb-1">Client Name</label>
                                <input type="text" class="input-primary" />
                            </div>
                            <div class="">
                                <label for="cleient-name" class="px-2 inline-block mb-1">Client Name</label>
                                <input type="text" class="input-primary" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="avatar my-5">
                                <label
                                    class="box w-[150px] text-xl overflow-hidden border-dotted cursor-pointer hover:bg-slate-100 text-slate-300 h-[150px] grid place-items-center border-emerald-200 border-[3px] rounded-md "
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</Container>
