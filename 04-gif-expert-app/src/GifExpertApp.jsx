import { useState } from "react"
import { AddCategory } from "./components/addCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shark', 'Octopus'])
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory //setCategories={setCategories} categories={categories} 
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}