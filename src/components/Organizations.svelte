<script lang="ts">
  import { organizations } from "../stores.js";
  import Organization from "./Organization.svelte";
  import Button from "../lib/Button.svelte";

  let organizations_value;

  organizations.subscribe((value) => {
    organizations_value = value;
  });

  function removeAll() {
    organizations.set([]);
  }
</script>

<section
  class="flex flex-col w-full max-w-lg border rounded-lg bg-gray-100 p-4"
>
  <div class="flex flex-col">
    <h2 class="font-bold mb-4 uppercase text-center">Organizations</h2>
    {#if organizations_value?.length}
      <Button
        action={removeAll}
        type="cancel"
        text="Remove All"
        customClass="self-end mb-4"
      />
    {:else}
      <p class="text-center mb-4">No organizations found</p>
    {/if}
  </div>

  {#if organizations_value?.length}
    <ul class="w-full list-none">
      {#each organizations_value as organization}
        <Organization {organization} />
      {/each}
    </ul>
  {/if}
</section>
