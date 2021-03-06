import React from 'react';
import AddTodo from './components/addTodo';
import VisibeTodoList from './components/visibleTodoList';

const App = () => (
    <div className="flex mt-16 flex-col px-64 w-full">
      <h1 className="text-2xl font-bold w-64">My Tasks</h1>
        <AddTodo />
        <VisibeTodoList />
    </div>
);

export default App;
