import { TodoItem } from "./TodoItem"

export const TodoList = ({ todoArray }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todoArray.map(todoItem => (
                        <TodoItem todoItem={todoItem} key={todoItem.id} />
                    ))
                }
            </ul>
        </>
    )
}