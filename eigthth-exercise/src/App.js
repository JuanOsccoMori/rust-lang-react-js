import React from 'react';
import { TodosContainer, FilterOptions, TodoFormContainer } from "./components";

const App = () => {
    return (
        <div>
            <TodosContainer/>
            <TodoFormContainer/>
            {/* Opciones de filtrado */}
            <FilterOptions/>
        </div>
    );
}

export default App;