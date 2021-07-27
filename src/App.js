import React from 'react';
import AddTodo from './components/addTodo';
import VisibeTodoList from './components/visibleTodoList';

const App = () => (
    <div>
      <AddTodo />
        <VisibeTodoList />
    </div>
);

export default App;
