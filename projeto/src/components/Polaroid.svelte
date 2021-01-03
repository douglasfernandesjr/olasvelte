<script>
    import { onMount } from "svelte";

    /** propriedade src */
    export let src;

    /** Propriedade alt */
    export let alt;

    let turnLeft = false;

    // variavel reativa, atualiza sempre que os valores mudam.
    // funciona tipo um useEffect do react
    $: classClass = turnLeft ? "left" : "right";

    function photoClick() {
        turnLeft = !turnLeft;
    }

    onMount(() => {
      console.log("O comp foi criado - beforeUpdate, afterUpdate, onDestroy também existem");
    });
</script>

<style>
    .polaroid {
        max-width: 300px;
        background: #fff;
        display: inline-block;
        margin: 0 0 27px 30px;
        width: auto;
        padding: 10px 10px 15px;
        text-align: center;
        font-family: "Marker Felt", sans-serif;
        text-decoration: none;
        color: #333;
        font-size: 18px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
        transform: rotate(-3deg);
        transition: 0.5s;
    }

    .polaroid.right {
        transform: rotate(3deg);
    }

    .polaroid:hover {
        transition: 0.5s;
        transform: rotate(0deg);
        max-width: 325px;
        margin: 0 0 0 10px;
    }

    .polaroid img {
        max-width: 100%;
    }
</style>

<div class="polaroid {classClass}">
    <img {src} {alt} on:click={photoClick} />
    <h3>{alt}</h3>
</div>
