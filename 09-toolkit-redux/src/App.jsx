import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement } from './store/slices/counter'

function App() {

  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={() => {dispatch(increment(1))}}>
          Increment
        </button>
        <button onClick={() => {dispatch(decrement())}}>
          Decrement
        </button>
        <button onClick={() => {dispatch(increment(2))}}>
          Increment+2
        </button>
      </div>
    </>
  )
}

export default App