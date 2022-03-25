<script>
    import Icon from "@iconify/svelte";

    //props and Variables
    export let icon = "";
    export let _class = "";
    export let isInline = true;
</script>

<div
    on:click
    class="menus {_class} add-button lg:hidden text-3xl w-[45px] h-[45px] rounded-full select-non border-2  active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center cursor-pointer hover:shadow-lg transition-all "
>
    <Icon {icon} inline={isInline} class="" />
</div>
