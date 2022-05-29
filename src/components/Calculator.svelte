<script lang="ts">
  let money = 1574;
  let percents = 53;
  $: donation = (money * percents) / 100;
</script>

<section class="mb-8 flex flex-col items-center max-w-lg">
  <label
    for="money"
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  >
    Input the amount of money
    <br />
    <span class="lowercase">
      left on your bank account after paying taxes and bills, groceries and
      other important things
    </span>:
  </label>
  <input
    bind:value={money}
    min="0"
    type="number"
    name="money"
    class="mb-8 bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  />
  <label
    for="percent"
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  >
    How many percent would you like to donate:
  </label>
  <input
    bind:value={percents}
    min="0"
    type="number"
    name="percent"
    class="mb-4 bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  />
  <p>Donation size is: <span class="text-2xl">{donation}</span></p>
</section>
