<script>
import Icon from "@iconify/svelte";

    import TabPageTitle from "../../../../../components/TabPageTitle/TabPageTitle.svelte";
</script>

<!-- HTML Markup  -->
<TabPageTitle title="Initail Desktop Application" />

<div class="w-full">
    <div class="bg-white rounded-lg overflow-hidden border border-emerald-300">
        <div class="flex">
            <div class="border-r-2 w-2/12 p-2 text-center">
                <img class="h-8 inline-block" src="https://code.visualstudio.com/favicon.ico" alt="" />
            </div>
            <div class=" w-7/12 p-2">
                <h5>Visual Studio Code</h5>
            </div>
            <div class="border-l-2 w-3/12 flex items-center justify-center">
                <div
                    class="add-button w-[30px] h-[30px] rounded-full select-none   bottom-20 right-3 bg-emerald-100 text-gray-500 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-50 cursor-pointer hover:shadow-lg transition-all transform hover:scale-110"
                >
                    <Icon icon="ci:external-link" class="text-xl" />
                </div>
            </div>
        </div>
    </div>
</div>
