<script>
    import { routes, Router } from "svelte-hash-router";
    import Home from "./view/Home.svelte";
    
    import Calculator from "./view/Calculator.svelte";
    import Plotte from "./view/Plotte.svelte";
    import Guides from "./view/Guides.svelte";
    import Farming from "./view/Farming.svelte";
    import Sharecoin from "./view/Sharecoin.svelte";
    import Dashboard from "./view/Dashboard.svelte";
    import Chart  from "./view/Chart.svelte";
    routes.set({
        "/": Home,
        "/plotte": Plotte,
        "/guides":Guides,
        "/sharecoin": Sharecoin,
        "/farming": Farming,
        "/chart": Chart,
        "/calculator": Calculator,
        "/dashboard": Dashboard
    });
</script>

<Router/>
