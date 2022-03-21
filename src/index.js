import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/TodoApp';
import { BrowserRouter } from "react-router-dom";
  
ReactDOM.render(
    <BrowserRouter>
       <TodoApp />
    </BrowserRouter>,
  document.getElementById('root')
);
