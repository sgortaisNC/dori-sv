<script lang="ts">
    import { page } from '$app/stores';

    const menuItems = [
        { path: '/', label: 'Accueil', icon: '🏠' },
        { path: '/taches', label: 'To-do Lists', icon: '📝' },
        { path: '/agenda', label: 'Planning', icon: '📅' },
        { path: '/recettes', label: 'Recettes & Menu', icon: '🍳' },
        { path: '/cadeaux', label: 'Cadeaux & Projets', icon: '🎁' }
    ];
</script>

<nav>
    <div class="menu">
        {#each menuItems as item}
            <a 
                href={item.path} 
                class="menu-item"
                class:active={$page.url.pathname === item.path}
            >
                <span class="icon">{item.icon}</span>
                <span class="label">{item.label}</span>
            </a>
        {/each}
    </div>
</nav>

<style>
    nav {
        background: #2d2438;
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .menu {
        display: flex;
        justify-content: center;
        gap: 1rem;
        max-width: 64rem;
        margin: 0 auto;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        color: #e9d8fd;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
    }

    .menu-item:hover {
        background: #3b2b4f;
        transform: translateY(-2px);
    }

    .menu-item.active {
        background: #3b2b4f;
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
    }

    .icon {
        font-size: 1.2rem;
    }

    .label {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .menu {
            flex-direction: column;
            align-items: stretch;
        }

        .menu-item {
            justify-content: flex-start;
        }
    }
</style> 