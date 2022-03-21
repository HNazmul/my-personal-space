<script>
    import BorderLabelInput from "/src/shared/Input/BorderLabelInput.svelte";
    import TabPageTitle from "./../../../../../components/TabPageTitle/TabPageTitle.svelte";

    let name;

    // reactive
    $: console.log(name);

    //functions
    const handleSubmitForm = () => {
        console.log(name);
    };
</script>

<!-- HTML Markup -->
<TabPageTitle title="Add Initial used application" />
<form on:submit|preventDefault={handleSubmitForm}>
    <BorderLabelInput _class={{ area: "mb-8" }} value={{ input: "haaha", label: "Name" }} on:change={(e) => (name = e.target.value)} />
    <BorderLabelInput _class={{ area: "mb-8" }} value={{ input: "haaha", label: "KI kI" }} on:change={(e) => (name = e.target.value)} />
    <BorderLabelInput _class={{ area: "mb-8" }} value={{ input: "haaha", label: "Hay re allah" }} on:change={(e) => (name = e.target.value)} />
    <BorderLabelInput let:value value={{ label: "wht kind of" }}>
        <svelte:fragment slot="input">
            <input
                type="number"
                class="py-2 px-4 w-full text-gray-400 focus:bg-white font-medium selection:bg-emerald-500 selection:text-white rounded-lg focus:shadow-md focus:outline-none bg-transparent"
                name=""
                id=""
            />
        </svelte:fragment>
    </BorderLabelInput>
    <button class="bg-emerald-600 py-2 px-6 text-white mt-4 rounded-full">Submit</button>
</form>
