import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispath] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispath(action)
        console.log(JSON.stringify(todos));
    }

    const handleDeleteTodo = (id) => {
        dispath({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleDoneTodo = (id) => {
        dispath({
            type: '[TODO] Done Todo',
            payload: id
        })
    }

    return ({
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleDoneTodo
    })
}