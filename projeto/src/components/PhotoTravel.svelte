<script>
    import Polaroid from "./Polaroid.svelte";
    import { moveTravel } from "../stores/travelList";

    export let travel;
</script>

<Polaroid src={travel.srcImg} alt={travel.name}>
    <input
        type="checkbox"
        bind:checked={travel.visited}
        on:change={() => moveTravel(travel)} />
    Visitado
</Polaroid>