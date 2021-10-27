<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Calculator from "./lib/Calculator.svelte";
  import Organizations from "./lib/Organizations.svelte";
</script>

<Header />
<main class="flex flex-col items-center p-8">
  <Calculator />
  <Organizations />
</main>
<Footer />
