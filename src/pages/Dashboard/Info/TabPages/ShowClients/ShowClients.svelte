<script>
    import Icon from '@iconify/svelte';
</script>



<!-- HTML Markup -->
<div class="title">
    <div class="fixed top-0 py-3 bg-white w-full left-0 md:static border-b-2 border-gray-300">
        <h2 class="text-xl text-center font-medium">Show All Client Details</h2>
    </div>
    <div class="pb-10"></div>
</div>

<div class="flex">
    <div class="w-1/2 px-1 py-2" >
        <div class="border-2 border-emerald-100 rounded-lg overflow-hidden">
            <div class="h-52 border-0 bg-white flex flex-col">
                <div class="h-[70%]">
                    <div class="bg-gray-300 h-[70px] mb-3 relative">
                       
                        <div class="avatar h-[50px] w-[50px] rounded-full bg-white absolute -bottom-3 left-3 border">
                            
                        </div>

                    </div>
                    <div class="p-2">
                        <h3>Abdul Barik</h3>
                        <h6 class="text-sm">Abdulbarik@tone.com</h6>
                    </div>
                </div>
                <div class="h-[30%] border-t-2 border-emerald-100">
                    <p class="text-[11.4px] leading-[14px] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestiae?</p>
                </div>
            </div>
        </div>
    </div>

    <div class="w-1/2 px-1 py-2">
        <div class="border-2 border-emerald-200">
            <div class="h-52 border-0">
                <div class="" />
                <div class="" />
            </div>
        </div>
    </div>
</div>

<div class="add-button w-[45px] h-[45px] rounded-full bg-white fixed bottom-20 right-3 border shadow grid place-items-center">
    <Icon icon="fluent:apps-add-in-20-filled" class="text-3xl text-gray-500"></Icon>
</div>


<style>
</style>
