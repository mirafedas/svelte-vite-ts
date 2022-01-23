<script lang="ts">
  export let organization;
  let isDescriptionShown = false;

  function toggleDescription() {
    isDescriptionShown = !isDescriptionShown;
  }

  function goToDonationPage() {
    if (!organization.url) return;
    // window.open(organization.url, "_blank").focus();
  }
</script>

<li class="flex flex-col">
  <div class="flex justify-between w-full">
    <button on:click={toggleDescription} class="hover:text-green-500">
      {organization.name}
    </button>
    <button
      on:click={goToDonationPage}
      class="mb-4 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    >
      Donate
    </button>
  </div>

  {#if organization.description && isDescriptionShown}
    <article class="w-full">
      <p class="italic ml-4">{organization.description}</p>
    </article>
  {/if}
</li>
