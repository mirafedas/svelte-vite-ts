<script lang="ts">
  import { organizations } from "../stores.js";
  import Button from "../lib/Button.svelte";

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
  <div class="flex flex-col sm:flex-row sm:justify-between w-full">
    <Button
      action={toggleDescription}
      type="text"
      text={organization.name}
      customClass="mb-4"
    />
    <div class="flex justify-center">
      <Button
        action={goToDonationPage}
        type="submit"
        text="Donate"
        customClass="mb-4 mr-2"
      />
      <Button
        action={removeOrganization}
        type="warning"
        text="Remove"
        customClass="mb-4"
      />
    </div>
  </div>

  {#if organization.description && isDescriptionShown}
    <article class="w-full mb-4">
      <p class="italic ml-4">{organization.description}</p>
    </article>
  {/if}
</li>
