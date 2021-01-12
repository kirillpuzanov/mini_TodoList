import React from 'react';
import './TodoHeader.css';


type TodoHeaderType = {
    todo: number
    done: number
}

export const TodoHeader = (props: TodoHeaderType) => {
    const {todo, done} = props;
    return (
        <div className={'appHeader d-flex'}>
            <h1> Mini TodoList</h1>
            <h2>{todo} more to do, {done} done </h2>
        </div>
    )
}