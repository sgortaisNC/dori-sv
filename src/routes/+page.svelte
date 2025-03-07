<script>
	import { fade } from 'svelte/transition';
</script>

<h1>D.O.R.I.</h1>

<div class="bento-grid">
	<div class="card lists" transition:fade>
		<h2>Listes</h2>
	</div>
	
	<div class="card planning" transition:fade>
		<h2>Planning</h2>
		<div class="card-content">
			<span class="icon">📅</span>
		</div>
	</div>
	
	<div class="card recipes" transition:fade>
		<h2>Recettes & Menu</h2>
		<div class="card-content">
			<span class="icon">🍳</span>
		</div>
	</div>
	
	<div class="card gifts" transition:fade>
		<h2>Liste de Cadeaux & Projets</h2>
		<div class="card-content">
			<span class="icon">🎁</span>
		</div>
	</div>
</div>

<style>	
	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		text-align: center;
		color: #e9d8fd;
		text-shadow: 0 0 15px rgba(233, 216, 253, 0.3);
	}
	
	.bento-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		padding: 1rem;
	}
	
	.card {
		background: #2d2438;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 0 4px 15px -1px rgba(139, 92, 246, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;
		border: 1px solid rgba(139, 92, 246, 0.1);
	}
	
	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 0 25px -5px rgba(139, 92, 246, 0.4);
		border-color: rgba(139, 92, 246, 0.3);
	}
	
	h2 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #e9d8fd;
	}
	
	.card-content {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100px;
	}
	
	.icon {
		font-size: 2.5rem;
		filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.4));
	}
	
	.sub-items {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	
	.sub-items span {
		background: #3b2b4f;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		color: #00ff9d;
		font-weight: 500;
		letter-spacing: 0.5px;
		border: 1px solid rgba(0, 255, 157, 0.3);
	}
	
	/* Couleurs spécifiques pour chaque carte */
	.lists { 
		background: linear-gradient(135deg, #2d2438 0%, #3b2b4f 100%);
		border-left: 3px solid #00ff9d;
	}
	.planning { 
		background: linear-gradient(135deg, #2d2438 0%, #3b2b4f 100%);
		border-left: 3px solid #ff00ff;
	}
	.recipes { 
		background: linear-gradient(135deg, #2d2438 0%, #3b2b4f 100%);
		border-left: 3px solid #00ffff;
	}
	.gifts { 
		background: linear-gradient(135deg, #2d2438 0%, #3b2b4f 100%);
		border-left: 3px solid #ffff00;
	}
	
	:global(body) {
		background: #1a1625;
		color: #e9d8fd;
		margin: 0;
		padding: 0;
	}
</style>