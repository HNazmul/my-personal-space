<script>
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
        document.body.style.cssText = `background:url(/images/homepage-background.png) no-repeat bottom left /cover; overflow-x:hidden`;
    });

    onDestroy(() => {
        document.body.style.cssText = null;
    });
</script>

<svelte:head>
    <title>Personal Info Port Hnazmul</title>
</svelte:head>
<main class="text-center  grid place-items-center ">
    <div>
        <div class="astronaut w-[190px] absolute bottom-20 hidden md:block right-14">
            <img draggable="false" class="w-full h-full" src="images/astronaut.svg" alt="" />
        </div>
        <div>
            <div class="rocket w-[150px] absolute hidden md:block">
                <img draggable="false" class="w-full h-full" src="images/rocket.svg" alt="" />
            </div>
            <div>
                <h1 class="lg:text-9xl text-4xl font-extrabold  bg-clip-text opacity-80 mb-10 text-transparent bg-gradient-to-t to-emerald-200 from-emerald-400 left-48 -z-50 ">Personal Space</h1>
                <h1 class="font-medium text-4xl text-slate-400 ">
                    This is <span class="underline text-emerald-400 decoration-emerald-600 underline-offset-4 font-bold">H. Nazmul's </span> Personal Site.
                </h1>

                <h2 class="mt-2 text-xl text-slate-400">You can Visit <a href="https://hnazmul.me" class="text-sky-600 font-extrabold inline-block">This Website</a> for learn more info About him</h2>
            </div>
        </div>
    </div>
</main>

<style>
    .astronaut {
        animation: astronaut 50s infinite alternate ease-out;
        user-select: none;
    }

    @keyframes astronaut {
        0% {
            transform: rotate(60deg);
        }
        50% {
            bottom: 50%;
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-60deg);
        }
    }

    .rocket {
        transform: rotate(20deg);
        z-index: -100;
        animation: rocket-going 70s 1 alternate linear;
        left: 0px;
        bottom: 0px;
        opacity: 0;
    }

    @keyframes rocket-going {
        0% {
            left: 0px;
            bottom: 0px;
            transform: rotate(20deg) scale(1);
            opacity: 1;
        }
        100% {
            left: 100%;
            bottom: 100%;
            transform: rotate(20deg) scale(0.1);
            opacity: 1;
        }
    }

    main {
        height: calc(100vh - 56px);
    }
</style>
