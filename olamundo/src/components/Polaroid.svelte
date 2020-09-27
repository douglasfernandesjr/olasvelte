<script>
  import { onMount, beforeUpdate, afterUpdate } from "svelte";

  onMount(() => {
    console.log("the component has mounted");
  });

  beforeUpdate(() => {
    console.log("the component is about to update");
  });

  afterUpdate(() => {
    console.log("the component just updated");
  });

  /** propriedade url */
  export let url;

  /** Propriedade alt */
  export let alt;
  let turnLeft = false;

  function photoClick() {
    turnLeft = !turnLeft;
  }
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

<!--
@component
Here's some documentation for this component.
It will show up on hover.

- You can use markdown here.
- You can also use code blocks here.
- Usage:
  ```tsx
  <Polaroid url={url} alt={alt}>
  ```
-->
<div class="polaroid {turnLeft ? 'left' : 'right'}" on:click={photoClick}>
  <img src={url} {alt} />
  <slot>
    <h3>{alt}</h3>
  </slot>
  {#if turnLeft}
    <div>left</div>
  {/if}
</div>
