
import React from 'react';

export const TodoItem = ({ todoItem, onDeleteTodo, onDoneTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
            className={`align-self-center ${(todoItem.done) ? 'text-decoration-line-through':''}`}
            onDoubleClick={() => onDoneTodo(todoItem.id)}
            aria-label='span'
            >
                {todoItem.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todoItem.id)}
            >
                Borrar
            </button>
        </li>
    )
}