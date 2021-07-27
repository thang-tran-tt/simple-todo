import React from 'react';
import AddTodo from './components/addTodo';
import VisibeTodoList from './components/visibleTodoList';

const App = () => (
    <div className="flex items-center mt-16 flex-col">
      <AddTodo />
        <VisibeTodoList />
    </div>
);

export default App;
