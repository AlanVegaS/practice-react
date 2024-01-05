import React from "react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { render, screen, fireEvent } from '@testing-library/react'

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onDoneTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('Debe mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem
            todoItem={todo}
            onDoneTodo={onDoneTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />
        )

        const liElement = screen.getByRole('listitem') 
        //console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        //screen.debug()
        //const spanElement = screen.getByRole('span')//Por alguna razon getByRole no jala un span, esto lo menciona Fernando Herrera
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    });

    test('Debe mostrar el Todo completado', () => {

        todo.done = true

        render(<TodoItem
            todoItem={todo}
            onDoneTodo={onDoneTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />
        )

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('Debe de llamarse el todo cuando se hace click', () => {

        render(<TodoItem
            todoItem={todo}
            onDoneTodo={onDoneTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.doubleClick(spanElement)

        expect(onDoneTodoMock).toHaveBeenCalledWith(todo.id)
    });

    test('Debe de eliminarse el todo cuando se hace click en borrar', () => {

        render(<TodoItem
            todoItem={todo}
            onDoneTodo={onDoneTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />
        )

        const deleteButton = screen.getByRole('button')
        fireEvent.click(deleteButton)
        
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    });
})