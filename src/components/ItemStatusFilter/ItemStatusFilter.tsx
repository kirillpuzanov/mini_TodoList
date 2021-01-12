import React from 'react';

export class ItemStatusFilter extends React.Component<StatusFilterTYpe> {

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'done'},
    ]

    render() {
        const {filter, onFilterChange} = this.props;

        return (
            <div className="btn-group">
                {
                    this.buttons.map(el => {
                        const isActive = filter === el.name;
                        return <button key={el.name}
                                       className={isActive ? 'btn btn-info' : 'btn btn-outline-secondary'}
                                       onClick={() => onFilterChange(el.name)
                                       }>
                            {el.label}
                        </button>
                    })
                }
            </div>
        )
    }
};

type StatusFilterTYpe = {
    filter: string
    onFilterChange: (filter: string) => void
}