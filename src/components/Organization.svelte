<script lang="ts">
  import { organizations } from "../stores.js";
  export let organization;
  let isDescriptionShown = false;

  function toggleDescription() {
    isDescriptionShown = !isDescriptionShown;
  }

  function goToDonationPage() {
    if (!organization.url) return;
    window.open(organization.url, "_blank").focus();
  }

  function removeOrganization() {
    organizations.update((organizations) => {
      return organizations.filter((el) => el !== organization);
    });
  }
</script>

<li class="flex flex-col">
  <div class="flex justify-between w-full">
    <button on:click={toggleDescription} class="hover:text-green-500">
      {organization.name}
    </button>
    <div>
      <button
        on:click={goToDonationPage}
        class="mb-4 mr-2 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Donate
      </button>
      <button
        on:click={removeOrganization}
        class="mb-4 shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Remove
      </button>
    </div>
  </div>

  {#if organization.description && isDescriptionShown}
    <article class="w-full mb-4">
      <p class="italic ml-4">{organization.description}</p>
    </article>
  {/if}
</li>
