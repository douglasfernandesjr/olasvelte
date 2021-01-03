<script>
    import { addNewTravel } from "../stores/travelList";

    let imgUrl = "";
    let name = "";

    function addTravel() {
        addNewTravel(name,imgUrl);
        imgUrl = "";
        name = "";
    }
</script>

<style>
    .box {
        display: flex;
        justify-content:center;
    }
    .new-travel {
        display: flex;
        flex-direction: column;
    }
    input {
        min-width: 300px;
    }
</style>

<div class="box">
    <div class="new-travel">
        <input
            type="url"
            bind:value={imgUrl}
            placeholder="digite aqui a url do local" />
        <input
            type="text"
            bind:value={name}
            placeholder="digite aqui o nome do local" />
        <button on:click={addTravel}>Adicionar</button>
    </div>
</div>
