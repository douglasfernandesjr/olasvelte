<script>
	import Polaroid from "./components/Polaroid.svelte";

	export let name;

	let src =
        "https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/02/Top-10-Melhores-Praias-Brasil-Capa-2.jpg";
    let alt = "Arraial do Cabo";
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
</main>

<Polaroid src={src} alt={alt} />
