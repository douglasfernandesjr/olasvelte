<script>
    import InputTravel from "./InputTravel.svelte";
    import PhotoTravel from "./PhotoTravel.svelte";
    import { travelList } from "../stores/travelList";
    import { crossfade, scale } from "svelte/transition";

    //travelList.subscribe

    const [send, receive] = crossfade({
        duration: 200,
        fallback: scale, //slide , fly
    });
    
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
        <InputTravel />
    </div>
    <div class="list">
        <div class="list-totravel">
            <h2>Próximas</h2>
            {#each $travelList.filter((t) => !t.visited) as travel (travel.id)}
                <div
                    class="photo"
                    in:receive={{ key: travel.id }}
                    out:send={{ key: travel.id }}>
                    <PhotoTravel {travel} />
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
                    <PhotoTravel {travel} />
                </div>
            {/each}
        </div>
    </div>
</div>
