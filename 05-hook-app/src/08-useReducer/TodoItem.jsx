export const TodoItem = ({todoItem}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todoItem.id}</span>
            <span className="align-self-center">{todoItem.description}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}