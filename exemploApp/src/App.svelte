<script>
	import Polaroid from "./components/Polaroid.svelte";

	export let name;
	let imgUrl =
		"https://1.bp.blogspot.com/-JSl_9choHKI/XOKiGIg97iI/AAAAAAAA5xc/nOBSjznhpmscNKAGVtTROq9Tji5Q8mJKwCLcBGAs/s1600/unnamed%2B-%2B2019-05-20T094752.071.jpg";
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
</main>
<Polaroid  src={imgUrl} alt="Descrição da imagem" >
</Polaroid>
<Polaroid  src={imgUrl} alt="Descrição da imagem" >
	<h2>Texto adicional para o Slot</h2>
	<h4>Texto adicional h4</h4>
</Polaroid>
