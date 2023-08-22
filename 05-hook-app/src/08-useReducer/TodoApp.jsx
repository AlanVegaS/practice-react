import { TodoList } from "./todoList"
import { TodoForm } from "./TodoForm"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, handleDeleteTodo, handleDoneTodo, handleNewTodo } = useTodo()

    return (
        <>
            <h1>TodoApp {todosCount}, <small> Pendientes: {todosPendingCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todoArray={todos} onDeleteTodo={handleDeleteTodo} onDoneTodo={handleDoneTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoForm onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}