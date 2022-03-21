import React from 'react';
import { Routes, Route } from "react-router-dom";
import { First } from './First';

export const TodoApp = () => {

  
    return (
  
        <div className='container'>
            <Routes>
               <Route path="/:id/:token/:service" element={<First />} />
             </Routes>
        </div>
    
    );
};
