<script>
</script>

<h1>D.O.R.I.</h1>

<div class="bento-grid">
	<a href="/taches" class="card lists">
		<h2>To do list</h2>
		<div class="card-content">
			<span class="icon">📝</span>
		</div>
	</a>
	
	<a href="/agenda" class="card planning">
		<h2>Planning</h2>
		<div class="card-content">
			<span class="icon">📅</span>
		</div>
	</a>
	
	<a href="/recettes" class="card recipes">
		<h2>Recettes & Menu</h2>
		<div class="card-content">
			<span class="icon">🍳</span>
		</div>
	</a>
	
	<a href="/cadeaux" class="card gifts">
		<h2>Liste de Cadeaux & Projets</h2>
		<div class="card-content">
			<span class="icon">🎁</span>
		</div>
	</a>
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
		text-align: center;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 0 4px 15px -1px rgba(139, 92, 246, 0.1);
		transition: all 0.2s ease;
		cursor: pointer;
		border: 1px solid rgba(139, 92, 246, 0.1);
		text-decoration: none;
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
</style>