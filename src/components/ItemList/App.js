import React, { useState } from 'react'
import ItemList from './index'

const initialItems = [
    { id: '1', name: 'Moudud', profession: 'Developer' },
    { id: '2', name: 'Jilany', profession: 'Engineer' },
    { id: '3', name: 'Hacker', profession: 'Trainer Chef' }
]

const MainItemList = () => {

    const [items, setItems] = useState(initialItems);

    const handleDelete = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    }

    return (
        <div>
            <h1>List of Item</h1>
            <ItemList items={items} onDelete={handleDelete}/>
        </div>
    )
}

export default MainItemList
