<script lang="ts">
    import { onMount } from 'svelte';

    interface TodoItem {
        id: string;
        text: string;
        done: boolean;
    }

    interface Category {
        id: string;
        name: string;
        icon: string;
        color: string;
        items: TodoItem[];
    }

    let categories: Category[] = [];
    let activeCategory: string | null = null;
    let newTodoText = '';

    onMount(async () => {
        try {
            const response = await fetch('/data/todos.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            categories = data.categories;
            if (categories.length > 0) {
                activeCategory = categories[0].id;
            }
        } catch (error) {
            console.error('Erreur lors du chargement des todos:', error);
        }
    });

    function toggleTodo(categoryId: string, todoId: string) {
        categories = categories.map(category => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    items: category.items.map(item => {
                        if (item.id === todoId) {
                            return { ...item, done: !item.done };
                        }
                        return item;
                    })
                };
            }
            return category;
        });
    }

    function addTodo(categoryId: string) {
        if (!newTodoText.trim()) return;
        
        categories = categories.map(category => {
            if (category.id === categoryId) {
                const newTodo = {
                    id: `${categoryId}-${Date.now()}`,
                    text: newTodoText,
                    done: false
                };
                return {
                    ...category,
                    items: [...category.items, newTodo]
                };
            }
            return category;
        });
        
        newTodoText = '';
    }

    function handleKeyPress(event: KeyboardEvent, categoryId: string) {
        if (event.key === 'Enter') {
            addTodo(categoryId);
        }
    }
</script>

<div class="todos-container">
    <div class="categories-nav">
        {#each categories as category}
            <button 
                class="category-btn"
                class:active={activeCategory === category.id}
                style="--accent-color: {category.color}"
                on:click={() => activeCategory = category.id}
            >
                <span class="category-icon">{category.icon}</span>
                {category.name}
            </button>
        {/each}
    </div>

    <div class="todos-content">
        {#each categories as category}
            {#if activeCategory === category.id}
                <div class="category-content">
                    <h2>{category.name}</h2>
                    
                    <div class="add-todo">
                        <input
                            type="text"
                            placeholder="Ajouter un élément..."
                            bind:value={newTodoText}
                            on:keypress={(e) => handleKeyPress(e, category.id)}
                        />
                        <button 
                            class="add-btn"
                            style="--accent-color: {category.color}"
                            on:click={() => addTodo(category.id)}
                        >
                            Ajouter
                        </button>
                    </div>

                    <div class="todos-list">
                        {#each category.items as item}
                            <div 
                                class="todo-item"
                                class:done={item.done}
                            >
                                <label class="checkbox-container">
                                    <input 
                                        type="checkbox" 
                                        checked={item.done}
                                        on:change={() => toggleTodo(category.id, item.id)}
                                    />
                                    <span class="checkmark"></span>
                                </label>
                                <div class="todo-content">
                                    <span class="todo-text">{item.text}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .todos-container {
        display: flex;
        gap: 2rem;
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
        flex-direction: column;
    }

    .categories-nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        width: 100%;
    }

    .category-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background: #2d2438;
        border: none;
        border-left: 3px solid var(--accent-color);
        border-radius: 0.5rem;
        color: #e9d8fd;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;
        font-size: 0.9rem;
    }

    .category-btn:hover, .category-btn.active {
        background: #3b2b4f;
        transform: translateX(5px);
    }

    .category-icon {
        font-size: 1.2rem;
    }

    .todos-content {
        flex: 1;
        background: #2d2438;
        border-radius: 1rem;
        padding: 1.5rem;
        width: 100%;
    }

    .category-content h2 {
        color: #e9d8fd;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        text-align: center;
    }

    .add-todo {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .add-todo input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background: #1a1625;
        color: #e9d8fd;
        font-size: 1rem;
    }

    .add-todo input:focus {
        outline: 2px solid var(--accent-color);
    }

    .add-btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.5rem;
        background: #1a1625;
        color: var(--accent-color);
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 100px;
    }

    .add-btn:hover {
        background: var(--accent-color);
        color: #1a1625;
    }

    .todos-list {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .todo-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: #1a1625;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }

    .todo-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .todo-item.done .todo-text {
        text-decoration: line-through;
        opacity: 0.6;
    }

    .checkbox-container {
        position: relative;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: #2d2438;
        border: 2px solid #e9d8fd;
        border-radius: 4px;
    }

    .checkbox-container:hover input ~ .checkmark {
        background-color: #3b2b4f;
    }

    .checkbox-container input:checked ~ .checkmark {
        background-color: var(--accent-color);
        border-color: var(--accent-color);
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox-container .checkmark:after {
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid #1a1625;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    .todo-content {
        flex: 1;
        min-width: 0;
    }

    .todo-text {
        flex: 1;
        color: #e9d8fd;
        word-break: break-word;
        line-height: 1.4;
    }

    @media (min-width: 768px) {
        .todos-container {
            flex-direction: row;
        }

        .categories-nav {
            display: flex;
            flex-direction: column;
            width: 200px;
            flex-shrink: 0;
        }
    }

    @media (max-width: 480px) {
        .todos-container {
            padding: 0.5rem;
        }

        .todos-content {
            padding: 1rem;
        }

        .category-content h2 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }

        .add-todo {
            flex-direction: column;
            margin-bottom: 1rem;
            gap: 0.5rem;
        }

        .add-todo input {
            min-width: 0;
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
        }

        .add-btn {
            width: 100%;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }

        .todos-list {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }

        .todo-item {
            padding: 0.75rem;
            gap: 0.75rem;
        }

        .todo-text {
            font-size: 0.9rem;
        }

        .checkbox-container {
            width: 20px;
            height: 20px;
        }

        .checkmark {
            width: 20px;
            height: 20px;
        }

        .checkbox-container .checkmark:after {
            left: 6px;
            top: 3px;
            width: 4px;
            height: 8px;
        }
    }

    @media (max-width: 360px) {
        .todos-container {
            padding: 0.25rem;
        }

        .categories-nav {
            gap: 0.5rem;
        }

        .category-btn {
            padding: 0.5rem;
            font-size: 0.8rem;
            gap: 0.25rem;
        }

        .category-icon {
            font-size: 1rem;
        }

        .todos-content {
            padding: 0.75rem;
            border-radius: 0.75rem;
        }

        .todo-item {
            padding: 0.5rem;
            gap: 0.5rem;
        }
    }
</style> 