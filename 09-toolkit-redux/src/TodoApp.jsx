import { useState } from "react"
import { useGetTodosQuery, useGetTodoQuery } from "./store/api/todoApi";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
    //const { data: todos = [], isLoading } = useGetTodosQuery()
    const { data: todo, isLoading } = useGetTodoQuery(todoId)

    const nextTodo = () => {
        setTodoId(todoId + 1)
        
    }

    const prevTodo = () => {
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h3>Is Loading {isLoading ? 'True' : 'False'}</h3>
            <pre>{JSON.stringify(todo)}</pre>


            {/*<ul>{
                todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
                        {todo.title}
                    </li>
                ))}
                </ul>*/}
            <strong>Todo: {` ${todoId}`}</strong>
            <br />
            <button onClick={() => prevTodo()}>Prev Todo</button>
            <button onClick={() => nextTodo()}>Next Todo</button>
        </>
    )
}