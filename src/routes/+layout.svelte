<script lang="ts">
    import Menu from '$lib/components/Menu.svelte';
    
    interface Props {
      children?: import('svelte').Snippet;
    }  
    let { children }: Props = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="app">
	<Menu />
	<main>
		{@render children?.()}
	</main>
</div>

<style>
	:global(html) {
		font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: #1a1625;
		color: #e9d8fd;
		font-size: 16px;
		line-height: 1.5;
		font-weight: 400;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Nunito', sans-serif;
		font-weight: 700;
		line-height: 1.2;
		margin: 0 0 0.5em 0;
	}

	:global(button, input, select, textarea) {
		font-family: inherit;
	}
</style>
