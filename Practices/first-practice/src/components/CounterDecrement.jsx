import { useForm } from "../hooks/useForm";

export const CounterDecrement = () => {

    const { OnChangeInput, setNewValueCounter, count } = useForm(1);
    const newInputValue = (evnt) => {
        const { value } = evnt.target;
        setNewValueCounter(value * 1);

    }

    return (<>
        <h3>Current count is: {count}</h3>
        <button onClick={() => setNewValueCounter(count - 1)}>-</button >
        <button onClick={() => setNewValueCounter(count + 1)}>+</button>
        <div>
            <input type="text" onChange={newInputValue} value={count}/>
        </div>
    </>);
}