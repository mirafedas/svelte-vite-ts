<script lang="ts">
  export let action = () =>
    console.warn("No onclick button action passed in props");
  export let text = "";
  export let type = "";
  export let customClass = "";

  function getClass() {
    switch (type) {
      case "submit":
        return `${customClass} shadow border border-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-green-500 py-1 px-2 rounded`;
      case "cancel":
        return `${customClass} shadow border border-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-red-500 py-1 px-2 rounded`;
      case "warning":
        return `${customClass} shadow border border-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-yellow-500 p1-2 px-2 rounded`;
      case "text":
        return `${customClass} hover:text-green-500`;
      default:
        return customClass;
    }
  }
</script>

<button on:click={action} class={getClass()}>
  {text}
</button>
