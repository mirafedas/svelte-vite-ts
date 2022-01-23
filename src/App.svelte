<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";
  import ContactUs from "./routes/ContactUs.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";
</script>

<Router {url}>
  <Header />
  <Route path="/" component={Home} />
  <Route path="/blog" component={Blog} />
  <Route path="/contact-us" component={ContactUs} />
  <Footer />
</Router>
