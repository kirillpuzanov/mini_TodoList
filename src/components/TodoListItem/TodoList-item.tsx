import React from 'react';
import './TodoListItem.css';


export class TodoListItem extends React.Component <ListItemType> {

    render() {
        const {label,onDeleted,onToggleDone,onToggleImportant,done, important} = this.props;
        let className_ = 'todo-list-item';
        if (done) className_ += ' done';
        if (important) className_ += ' important';

        return (
            <span className={className_}>
                <span className='todo-list-item-label'
                      onClick={onToggleDone}
                >
                    {label}
                </span>
                <button className='btn btn-outline-success btn-sm float-right'
                        onClick={onToggleImportant}
                >
                    <i className='fa fa-exclamation'/>
                </button>

                <button className='btn btn-outline-danger btn-sm float-right'
                onClick={onDeleted}>
                    <i className='fa fa-trash-o'/>
                </button>
            </span>
        )
    }
}

type ListItemType = {
    id: number
    done:boolean
    label: string
    important: boolean
    onDeleted: ()=> void
    onToggleDone: ()=> void
    onToggleImportant: ()=> void
}
