import React, { useState } from 'react';
import './App.css';

const TodoItem = ({ task }) => {
  return (
    <li className="todo-item">
      {task}
    </li>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Task cannot be empty!');
      return;
    }
    
    setTodos([...todos, newTask.trim()]);

    setNewTask('');
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleClearAll = () => {
    setTodos([]);
    setError('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My To-Do List</h1>
      </header>
      
      <main className="app-main">
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new task...."
              className="task-input"
            />
            <button 
              onClick={handleAddTask}
              className="add-button"
            >
              Add Task
            </button>
          </div>
          
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="todo-section">
          <div className="todo-header">
            <h2>Tasks ({todos.length})</h2>
            {todos.length > 0 && (
              <button 
                onClick={handleClearAll}
                className="clear-button"
              >
                Clear All Tasks
              </button>
            )}
          </div>
          
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>You haven't added any tasks yet.</p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((task, index) => (
                <TodoItem 
                  key={index} 
                  task={task} 
                />
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;