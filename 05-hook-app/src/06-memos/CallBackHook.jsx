import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)
    //const incrementFather = () => setCounter(counter + 1)
    const incrementFather = useCallback((counterValue) => {
        setCounter((value) => value + counterValue)
    }, [])
    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
