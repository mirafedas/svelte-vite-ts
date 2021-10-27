<script lang="ts">
  import Organization from "./Organization.svelte";

  const organizations = [
    {
      name: "Oselya",
      description: "Oselya is a non-governmental organization whose mission is to help homeless people find their dignity in the Community and thus in society, and to help society accept everyone.",
      url: "http://emaus-oselya.org/ua/?page_id=4055",
    },
    {
      name: "Open Cages",
      description: "Open Cages is a non-govermental organization whose activities are aimed at protecting the rights of animals on industrial farms. This organization is a part of the Anima International.",
      url: "https://opencages.com.ua/take-action/donate/",
    },
    {
      name: "Food Not Bombs",
      description: "Food Not Bombs is a consensus-based collective that solicits food donations from grocery stores and restaurants and shares hot vegan meals, bags of groceries, and seasonal clothes with and for those in need.",
      url: "https://foodnotbombs.net/new_site/donate.php",
    },
    {
      name: "Max Support Fund",
      description: "The Max Support Fund has been created to support my husband, who is bored and disappointed because I work overtime.",
      url: "",
    },
  ];
</script>

<section
  class="flex flex-col w-full max-w-lg border rounded-lg bg-gray-200 p-2"
>
  <h2 class="font-bold mb-4 uppercase text-center">Organizations</h2>
  <ul class="w-full list-none">
    {#each organizations as organization}
      <Organization {organization} />
    {/each}
  </ul>
</section>
