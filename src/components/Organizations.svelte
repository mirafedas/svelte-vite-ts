<script lang="ts">
  import { organizations } from "../stores.js";
  import Organization from "./Organization.svelte";

  let organizations_value;

  organizations.subscribe((value) => {
    organizations_value = value;
  });
</script>

<section
  class="flex flex-col w-full max-w-lg border rounded-lg bg-gray-200 p-2"
>
  <h2 class="font-bold mb-4 uppercase text-center">Organizations</h2>

  {#if organizations_value?.length}
    <ul class="w-full list-none">
      {#each organizations_value as organization}
        <Organization {organization} />
      {/each}
    </ul>
  {/if}
</section>
