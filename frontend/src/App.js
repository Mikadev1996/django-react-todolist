import React, { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        fetch('/api/todos')
            .then(r => r.json())
            .then(data => {
                setTodos(data);
            })
    }


    return (
        <div className='app'>
            {todos.length > 0 && todos.map(data => {
                return (
                    <div>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                        <p>{data.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
