<script>
    import Icon from "@iconify/svelte";

    // props
    export let appdata = {};
</script>

<div class="w-full">
    <div class="bg-white rounded-lg overflow-hidden border border-emerald-300">
        <div class="flex flex-col xs:flex-row">
            <div class="border-r-2 xs:w-2/12 p-2 text-center">
                <img class="h-8 inline-block" src={appdata?.favicon || ""} alt="" />
            </div>
            <div class="xs:w-7/12 p-2">
                <h5 class="text-center xs:text-left">{appdata?.name || ""}</h5>
            </div>
            <div class="border-l-2 xs:w-3/12 flex items-center justify-center">
                <a
                    href={appdata?.link}
                    target="_blank"
                    class="add-button w-[30px] h-[30px] rounded-full select-none   bottom-20 right-3 bg-emerald-100 text-gray-500 active:bg-gray-600 active:text-white shadow-gray-400 grid place-items-center z-50 cursor-pointer hover:shadow-lg transition-all transform hover:scale-110"
                >
                    <Icon icon="ci:external-link" class="text-xl" />
                </a>
            </div>
        </div>
    </div>
</div>
