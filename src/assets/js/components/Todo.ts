class Todo {
    initialize() {
        this.initAddTodo()
    }

    initAddTodo() {
        const input = document.querySelector(
            '.add-todo input'
        ) as HTMLInputElement

        input.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Enter') {
                const localTodos = window.localStorage.getItem('todos')
                let todos: [string]

                if (localTodos) {
                    todos = JSON.parse(localTodos)
                    todos.push(input.value)
                } else {
                    todos = [input.value]
                }

                window.localStorage.setItem('todos', JSON.stringify(todos))

                input.value = ''
            }
        })
    }
}

export default Todo
