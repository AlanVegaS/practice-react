import React from "react";
import { TodoItem } from "./TodoItem"

export const TodoList = ({ todoArray = [], onDeleteTodo, onDoneTodo }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todoArray.map(todoItem => (
                        <TodoItem
                            todoItem={todoItem}
                            key={todoItem.id}
                            onDeleteTodo={onDeleteTodo}
                            onDoneTodo={onDoneTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}