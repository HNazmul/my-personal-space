<script>
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";
    import AddInitialDesktopApp from "./../../apps/InitialDesktopApp/AddInitialDesktopApp.svelte";
    export let data = [{ option: "Add Initial desktop app", icon: "/images/icon/all-buyer.png", appComponent: AddInitialDesktopApp }];

    let isAppbarShow = false;
</script>

{data}
<!-- HTML Markup -->

{#if isAppbarShow}
    <div class="fixed w-full h-full top-0 left-0 bg-slate-400 z-20 bg-opacity-60 backdrop-blur-sm grid place-items-center">
        <div in:fade class="w-[280px] h-[420px] bg-white mx-auto rounded-lg shadow-xl p-3 ">
            <div class="w-full h-full  overflow-y-auto pr-3">
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Molestias quia totam consequatur laudantium?</li>
                    <li>Quaerat doloremque debitis possimus ratione!</li>
                    <li>Dicta quod dolores expedita inventore.</li>
                    <li>Ea odit iste accusamus. Eligendi.</li>
                    <li>Optio quas aperiam explicabo quos.</li>
                    <li>Ipsam, obcaecati harum. Modi, dolore.</li>
                    <li>Quam architecto aut ullam pariatur.</li>
                    <li>Facere iure eligendi ab praesentium?</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Molestias quia totam consequatur laudantium?</li>
                    <li>Quaerat doloremque debitis possimus ratione!</li>
                    <li>Dicta quod dolores expedita inventore.</li>
                    <li>Ea odit iste accusamus. Eligendi.</li>
                    <li>Optio quas aperiam explicabo quos.</li>
                    <li>Ipsam, obcaecati harum. Modi, dolore.</li>
                    <li>Quam architecto aut ullam pariatur.</li>
                    <li>Facere iure eligendi ab praesentium?</li>
                    <li>Inventore magnam accusamus quis unde.</li>
                </ul>
            </div>
        </div>
    </div>
{/if}

<div
    on:click|stopPropagation={() => (isAppbarShow = !isAppbarShow)}
    class="menus add-button lg:hidden w-[45px] h-[45px] rounded-full select-none bg-purple-100 fixed bottom-[75px] right-3 border-2 border-purple-600  text-purple-600 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-[999] cursor-pointer hover:shadow-lg transition-all "
>
    {#if isAppbarShow}
        <Icon icon="line-md:close" inline={true} class="text-3xl" />
    {:else}
        <Icon icon="bi:chevron-double-up" inline={true} class="text-3xl" />
    {/if}
</div>
