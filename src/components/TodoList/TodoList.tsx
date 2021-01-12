import React from 'react';
import {TodoListItem} from '../TodoListItem/TodoList-item';
import {todoDataItem} from '../../app/App';
import './TodoList.css';

type TodoListType = {
    todoData: todoDataItem[]
    onDeleted: (id:number)=> void
    onToggleDone: (id:number)=> void
    onToggleImportant: (id:number)=> void
}


export const TodoList = (props: TodoListType) => {
    const {todoData,onDeleted,onToggleDone,onToggleImportant} = props;

    return (
        <ul className='list-group todo-list'>
            {
                todoData.map(el=> <li key={el.id} className={'list-group-item'  }>
                        <TodoListItem
                            { ...el}
                            onDeleted={()=> onDeleted(el.id)}
                            onToggleDone={()=>onToggleDone(el.id)}
                            onToggleImportant={()=>onToggleImportant(el.id)}
                        />
                    </li>
                )
            }
        </ul>
    )
}