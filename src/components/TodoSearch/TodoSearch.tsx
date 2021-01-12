import React, {ChangeEvent} from 'react';
import './TodoSearch.css';

export class TodoSearch extends React.Component<SearchType, SearchStateType> {

    state = {
        searchText: '',
    }
    onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText:event.target.value})
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <input type="text"
                   placeholder='search'
                   className='todo-search'
                   value={this.state.searchText}
                   onChange={this.onSearch}
            />
        )
    }
};

type SearchType = {
    onSearch: (value:string)=> void
}

type SearchStateType = {
    searchText:string
}