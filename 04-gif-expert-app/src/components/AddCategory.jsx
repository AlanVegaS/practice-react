import { useState } from "react"

export const AddCategory = ({categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('Shark')
    const onInputChange = () => {
        setInputValue(event.target.value)
    }
    const onSubmit = () => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        setCategories([...categories, inputValue])
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Find gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}