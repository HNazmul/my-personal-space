<script>
    import { useNavigate } from "svelte-navigator";

    //props
    export let clientInfo = {};

    const navigate = useNavigate();
</script>

<div on:click={null} class="Client-card cursor-pointer">
    <div class="border-2 border-emerald-100 rounded-lg hover:shadow-lg transition-all overflow-hidden">
        <div class="h-52 border-0 bg-white hover:bg-green-100 flex flex-col">
            <div class="h-[70%]">
                <div class="bg-gray-300 h-[70px] mb-3 relative">
                    <div class="avatar h-[50px] w-[50px] rounded-full bg-white absolute -bottom-3 left-3 border" />
                </div>
                <div class="p-2">
                    <h3>{clientInfo?.name || ""}</h3>
                    <h6 class="text-sm">{clientInfo?.email || ""}</h6>
                </div>
            </div>
            <div class="h-[30%] border-t-2 border-emerald-100">
                <p class="text-[11.4px] leading-[14px] p-2">{clientInfo?.desc.substr(0, 80) || ""}{clientInfo?.desc.length >= 80 ? "..." : ""}</p>
            </div>
        </div>
    </div>
</div>
