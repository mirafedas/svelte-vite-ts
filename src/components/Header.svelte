<script lang="ts">
  import NavLink from "./NavLink.svelte";
</script>

<header class="flex justify-between p-4 flex-wrap sticky">
  <a href="/" class="text-yellow-500 font-extrabold uppercase pb-3 sm:pb-0">
    Donation calculator
  </a>
  <nav class="w-full sm:w-2/5">
    <ul class="list-none flex justify-between">
      <li class="mr-2 hover:text-yellow-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li class="mr-2">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li class="mr-2">
        <NavLink to="/books">Books</NavLink>
      </li>
      <li class="mr-2">
        <NavLink to="/contact-us">Contact us</NavLink>
      </li>
    </ul>
  </nav>
</header>
