<script>
    import { createEventDispatcher } from "svelte";
    import Spinner from "../Spinner/Spinner.svelte";
    export let type = "submit";
    export let variant = "primary";
    export let outline = false;
    export let _class = "";
    export let isSpinner = false;
    let stroke = "";
    const dispatcher = createEventDispatcher();

    const __onClick = () => {
        dispatcher("click", isSpinner);
    };

    const specifiedClass = () => {
        if (variant === "primary" && !outline) {
            stroke = "stroke-emerald-600    ";
            return "bg-emerald-600 text-white";
        } else if (variant === "secondary" && !outline) {
            stroke = "stroke-slate-600";
            return "bg-slate-600 text-white";
        } else if (variant === "primary" && outline) {
            stroke = "stroke-white hover:stroke-emerald-600";
            return "border-2 border-emerald-600 font-medium hover:font-normal text-emerald-600 bg-transparent hover:bg-emerald-600 hover:text-white";
        } else if (variant === "secondary" && outline) {
            stroke = "stroke-white hover:stroke-slate-600";
            return "border-2 border-slate-600 font-medium hover:font-normal text-slate-600 bg-transparent hover:bg-slate-600 hover:text-white";
        } else {
            return "text-white bg-emerald-600";
        }
    };
</script>

<button  on:click={__onClick} {type} class="{specifiedClass()} rounded  py-2 {_class} px-7">
    {#if isSpinner}
        <Spinner size={20} />
    {/if}
    <slot {type} />
</button>

<style>
</style>
