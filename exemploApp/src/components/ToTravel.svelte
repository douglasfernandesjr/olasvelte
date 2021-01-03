<script>
    import InputTravel from "./InputTravel.svelte";
    import { travelList } from "../stores/travelList";
    import Polaroid from "./Polaroid.svelte";
    import { crossfade, scale } from "svelte/transition";

    const [send, receive] = crossfade({
        duration: 200,
        fallback: scale, //slide , fly
    });

    function move(travel) {
        travelList.update((list) => {
            return list.filter((t) => t !== travel).concat(travel);
        });
    }
</script>

<style>
    .main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        margin: 0;
    }

    .list {
        display: flex;
    }
    .list-totravel,
    .list-visited {
        flex: 1;
    }
    .photo {
        display: inline-block;
    }
</style>

<div class="main">
    <h1>To Travel - Svelte</h1>
    <div class="box">
        <InputTravel class="cssClass" />
    </div>
    <div class="list">
        <div class="list-totravel">
            <h2>Próximas</h2>
            {#each $travelList.filter((t) => !t.visited) as travel (travel.id)}
                <div
                    class="photo"
                    in:receive={{ key: travel.id }}
                    out:send={{ key: travel.id }}>
                    <Polaroid src={travel.srcImg} alt={travel.name}>
                        <input
                            type="checkbox"
                            bind:checked={travel.visited}
                            on:change={() => move(travel)} />
                        Visitado
                    </Polaroid>
                </div>
            {/each}
        </div>
        <div class="list-visited">
            <h2>Realizadas</h2>
            {#each $travelList.filter((t) => t.visited) as travel (travel.id)}
                <div
                    class="photo"
                    in:receive={{ key: travel.id }}
                    out:send={{ key: travel.id }}>
                    <Polaroid src={travel.srcImg} alt={travel.name}>
                        <input
                            type="checkbox"
                            bind:checked={travel.visited}
                            on:change={() => move(travel)} />
                        Visitado
                    </Polaroid>
                </div>
            {/each}
        </div>
    </div>
</div>
