import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = () => {
        setInputValue(event.target.value)
    }
    const onSubmit = () => {
        event.preventDefault()
        const value = inputValue.trim()
        if(!value) return
        //setCategories([...categories, inputValue])
        onNewCategory(value)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Find gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}