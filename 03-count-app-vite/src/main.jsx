//import { createRoot } from 'react-dom/client';
//import { saludo } from './HelloWorld';
//import  {ComponentName}  from './FirstComponent';
import './styles.css';
import ReactDOM from 'react-dom';
import { CounterApp } from './CounterApp';

/*ReactDOM.render(
    <ComponentName tittle="Hola, soy el título" subtittle = "Soy un sub"/>,
    document.getElementById('root')
);*/
ReactDOM.render(
    <CounterApp value={20}/>,
    document.getElementById('root')
);