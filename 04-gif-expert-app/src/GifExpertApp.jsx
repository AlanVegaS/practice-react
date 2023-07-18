import { useState } from "react"
import { AddCategory } from "./components/addCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shark', 'Octopus'])

    return (
        <>
            {/**Titulo**/}
            <h1>GifExpertApp</h1>
            {/**Input**/}
            <AddCategory setCategories={setCategories} categories={categories} />
            {/**Gifs**/}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}