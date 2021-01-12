import React, {ChangeEvent, FormEvent} from 'react';
import './AddItem.css';

export class AddItem extends React.Component<AddItemType, AddItemState> {

    state = {
        taskText: ''
    }

    newTaskText = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState(() => {
            return {
                taskText: event.target.value
            }
        })
    };
    addItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.onAddItem(this.state.taskText);
        this.setState({taskText: ''});
    };

    render() {

        return (
            <div>
                <form className='item-add-form d-flex'
                      onSubmit={this.addItem}>
                    <input className='add-item-input'
                           type='text'
                           placeholder='add task...'
                           onChange={this.newTaskText}
                           value={this.state.taskText}
                    />
                    <button className='btn btn-outline-secondary'>
                        Add new task
                    </button>
                </form>
            </div>
        )
    }
}

type AddItemType = {
    onAddItem: (newTask: string) => void
}
type AddItemState = {
    taskText: string
}