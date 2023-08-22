import React from 'react'
import './index.css'
import {MainApp} from './09-useContext/MainApp'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { getRoutes } from './Routes';

//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/multipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEfect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallBackHook } from './06-memos/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'

const router = getRoutes();

  //<React.StrictMode>
    //<MainApp/>
  //</React.StrictMode>,
  ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={ router } />
  )