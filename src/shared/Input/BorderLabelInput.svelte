<script>
    export let value = { input: "", label: "" };
    export let _class = { label: "", input: "", area: "" };
</script>

<div class="border-2 {_class.area} rounded-lg relative border-emerald-500 mt-5">
    {#if value.label}
        <label for="wht" class="bg-emerald-50 font-medium {_class.label} px-5 py-[2px] absolute left-2 -top-4 text-sm border rounded-full">{value.label || ""}</label>
    {/if}
    <slot {value} {_class} name="input">
        <input
            on:change
            on:input
            on:blur
            value={value.input || ""}
            id="wht"
            type="text"
            class="py-2 px-4 w-full text-gray-400 focus:bg-white font-medium {_class.input} selection:bg-emerald-500 selection:text-white rounded-lg focus:shadow-md focus:outline-none bg-transparent"
            placeholder="name"
        />
    </slot>
</div>
