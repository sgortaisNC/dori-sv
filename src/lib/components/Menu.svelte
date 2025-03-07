<script lang="ts">
    import { page } from '$app/stores';

    const menuItems = [
        { path: '/', label: 'Accueil', icon: '🏠' },
        { path: '/taches', label: 'To-do Lists', icon: '📝' },
        { path: '/agenda', label: 'Planning', icon: '📅' },
        { path: '/recettes', label: 'Recettes & Menu', icon: '🍳' },
        { path: '/cadeaux', label: 'Cadeaux & Projets', icon: '🎁' }
    ];

    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<nav class="menu-container">
    <button 
        class="menu-toggle"
        on:click={toggleMenu}
        aria-label="Menu"
    >
        {#if isMenuOpen}
            ✕
        {:else}
            ☰
        {/if}
    </button>

    {#if isMenuOpen}
        <div class="menu-overlay" on:click={closeMenu}></div>
        <div class="menu">
            {#each menuItems as item}
                <a 
                    href={item.path} 
                    class="menu-item"
                    class:active={$page.url.pathname === item.path}
                    on:click={closeMenu}
                >
                    <span class="icon">{item.icon}</span>
                    <span class="label">{item.label}</span>
                </a>
            {/each}
        </div>
    {/if}
</nav>

<style>
    .menu-container {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
    }

    .menu-toggle {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: #2d2438;
        border: none;
        color: #e9d8fd;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.3);
        transition: all 0.2s ease;
        z-index: 1002;
        position: relative;
    }

    .menu-toggle:hover {
        transform: scale(1.1);
        background: #3b2b4f;
    }

    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    .menu {
        position: absolute;
        bottom: 4.5rem;
        right: 0;
        background: #2d2438;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        min-width: 200px;
    }

    .menu-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        color: #e9d8fd;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }

    .menu-item:hover, .menu-item.active {
        background: #3b2b4f;
    }

    .icon {
        font-size: 1.2rem;
    }

    .label {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .menu {
            position: fixed;
            bottom: 5.5rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
        }
    }
</style> 