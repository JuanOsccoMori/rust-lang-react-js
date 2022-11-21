import { combineReducers } from "redux";
import { filterReducer } from "./reducerFilter";
import { todosReducer } from "./reducerTodo";

export const rootReducer = combineReducers(
    {
        //State name: reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        
        // ... add more states and reducers to include them in the store
    }
);