import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';

function App() {
  const Title = 'To-Do-List'; 
  return (
    <>
    <div className='contents'>
        <h1 style = {{textAlign: 'center', fontSize: '50px', color: 'whitesmoke'}}>
          {Title}
        </h1>
    </div>
    <div className='todo-app'>
      <TodoList />
    </div>
    </>
  );
}
export default App;