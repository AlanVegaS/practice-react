import { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => { 
    const [ counter, setCounter ] = useState(value)

    const addCounter = () => {
        setCounter( c => c + 1)
    }
    const subCounter = () => {
        setCounter( counter - 1 )
    }
    const reset = () => {
        setCounter(value)
    }

    return <><h1>Counter App</h1>
    <h2>{ counter }</h2>
    <button onClick={ addCounter }>+1</button>
    <button onClick={ subCounter }>-1</button>
    <button onClick={ reset }>Reset</button></>
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}