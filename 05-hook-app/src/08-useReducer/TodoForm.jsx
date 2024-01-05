import { useForm } from "../hooks/useForm"
import React from "react";
export const TodoForm = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })
    const handleSubmit = event => {
        event.preventDefault()
        if (!description) return

        const newTodo = {
            id:new Date().getTime(),
            done:false,
            description
        }
        onNewTodo(newTodo)
        onResetForm()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                value={description}
                onChange={onInputChange}
                name="description"
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}