import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./todoList"
import { TodoForm } from "./TodoForm"

let initialState = [
    /*{
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    }*/
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos'))||[]
}

export const TodoApp = () => {
    const [todos, dispath] = useReducer(todoReducer, initialState, init)

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type : '[TODO] Add Todo',
            payload:todo
        }
        dispath(action)
        console.log(JSON.stringify(todos));
    }

    return (
        <>
            <h1>TodoApp 10, <small> Pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todoArray={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoForm onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}