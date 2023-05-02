import React from 'react'
import './style.css'

function ItemList({ items, onDelete }) {
    
    const handleDeleteItemList = item => {
        onDelete(item)
    }

    return (
        <ul className='item-list'>
            {items.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.profession}</p>
                    <button onClick={() => handleDeleteItemList(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ItemList;