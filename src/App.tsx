import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {
    addTodolistAC
} from './state/todolists-reducer';

import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    // const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch();

    function addTodolist(title: string) {
        dispatch( addTodolistAC(title))
    }

    return (
        <div className="App">


                <div>
                    <AddItemForm addItem={addTodolist}/>
                </div>
                <div>
                    {
                        todolists.map(tl => {
                            // let allTodolistTasks = tasks[tl.id];
                            // let tasksForTodolist = allTodolistTasks;
                            //
                            // if (tl.filter === "active") {
                            //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            // }
                            // if (tl.filter === "completed") {
                            //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            // }

                            return <div  key={tl.id}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        // tasks={tasksForTodolist}
                                        filter={tl.filter}
                                    />

                            </div>
                        })
                    }
                </div>
        </div>
    );
}

export default App;
