import React from 'react';
import {TodoHeader} from '../components/todoHeader/TodoHeader';
import {TodoSearch} from '../components/TodoSearch/TodoSearch';
import {TodoList} from '../components/TodoList/TodoList';
import {ItemStatusFilter} from '../components/ItemStatusFilter/ItemStatusFilter';
import {AddItem} from '../components/addItemForm/AddItem';

import './App.css';

class App extends React.Component<any, todoDataStateType> {

    maxId = 100;
    createNewItem = (label: string) => {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false
        }
    };
    state = {
        todoData: [
            this.createNewItem('Learn React'),
            this.createNewItem('Create new App'),
            this.createNewItem('Drink juice'),
        ],
        searchText: '',
        filter: 'all',
    };

    onDeleted = (id: number) => {
        this.setState(({todoData}) => {
            const newData = todoData.filter(el => el.id !== id)
            return {todoData: newData}
        })
    };
    onAddItem = (newTask: string) => {
        this.setState(({todoData}) => {
            return {todoData: [...todoData, this.createNewItem(newTask)]}
        })
    };
    onToggleImportant = (id: number) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map(el => el.id === id ? {...el, important: !el.important} : el)
            }
        })
    };
    onToggleDone = (id: number) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map(el => el.id === id ? {...el, done: !el.done} : el)
            }
        })
    };
    search = (items: todoDataItem[], searchText: string) => {
        if (searchText.length === 0) {
            return items;
        } else {
            return items.filter(el => el.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
        }
    };
    onSearch = (searchText: string) => {
        this.setState({searchText})
    };
    filter = (items: todoDataItem[], filter: string) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(el => !el.done)
            case 'done':
                return items.filter(el => el.done)
            default:
                return items
        }
    };
    onFilterChange = (filter:string) => {
        this.setState( {filter})
    }

    render() {
        const {todoData, searchText, filter} = this.state;
        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleItem = this.filter(this.search(todoData, searchText), filter)

        return <div className={'todoApp'}>
            <TodoHeader done={doneCount} todo={todoCount}/>
            <div className={'top-panel d-flex'}>
                <TodoSearch onSearch={this.onSearch}/>
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
            </div>
            <TodoList onDeleted={this.onDeleted}
                      todoData={visibleItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleDone={this.onToggleDone}
            />
            <AddItem onAddItem={this.onAddItem}/>
        </div>
    }
}

export default App;

export type todoDataItem = {
    id: number
    label: string
    important: boolean
    done: boolean
}
export type todoDataStateType = {
    todoData: todoDataItem[]
    searchText: string
    filter: string
}
