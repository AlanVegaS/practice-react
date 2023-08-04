import { useLayoutEffect, useRef, useState } from "react"

export const BlockQuotes = ({ data }) => {

    const { name, species, gender } = !!data && data
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect()
        console.log(width);
        setBoxSize({ width, height })
    }, [species])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <h2 ref={pRef} className="mb-1">{species}</h2>
                {/*<h2 className="mb-1">{gender}</h2>*/}
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}