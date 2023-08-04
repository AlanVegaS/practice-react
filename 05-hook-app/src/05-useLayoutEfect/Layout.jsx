import { useCounter, useFetch } from "../hooks"
import { Loading, BlockQuotes } from "../03-examples"

export const Layout = () => {
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError, nextQuote } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

    return (
        <>
            <h1>Breaking bad quotes, quote #{counter}</h1>
            <hr />
            {
                isLoading
                    ? <Loading />
                    : <BlockQuotes data = {data}/>
            }
            <button disabled={isLoading} className="btn btn-primary"
                onClick={() => { increment() }}>Next quote</button>
        </>
    )
}