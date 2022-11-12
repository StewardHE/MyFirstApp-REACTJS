// Import reactJS and my Components
import React, { Fragment, useState} from 'react';
import TodoList from './components/TodoList';


// creates the component App 
export function App() { 
    //
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false },
    ]);
    return ( 
        // this makes the textbox to add new tareas and delete them
        <Fragment> 
            <TodoList todos={todos} /> 
            <input type="text" placeholder="Nueva Tarea" />
            <button>➕</button>
            <button>🗑️</button>
        </Fragment>
    );
} 