<script>
    export let selectedAppPage = {};
    console.log(selectedAppPage)
</script>

<svelte:component this={selectedAppPage.component}></svelte:component>