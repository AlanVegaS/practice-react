import { createRoot } from 'react-dom/client';
//import { saludo } from './HelloWorld';
//import  {ComponentName}  from './FirstComponent';
import './styles.css';
import { CounterApp } from './CounterApp';

createRoot(document.getElementById('root')).render(<CounterApp value={1} />);
