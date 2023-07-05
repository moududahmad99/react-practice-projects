import React, { useState } from 'react'
import ItemList from './index'
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'
import './style.css'

const initialItems = [
    { id: '1', name: 'Moudud', profession: 'Developer' },
    { id: '2', name: 'Jilany', profession: 'Engineer' },
    { id: '3', name: 'Hacker', profession: 'Trainer Chef' },
    { id: '4', name: 'Begula', profession: 'Cat Police' }
]

const MainItemList = () => {

    const [items, setItems] = useState(initialItems);

    const handleDelete = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    }

    return (
        <div>
            <div className="container" >
                <h1 style={{ textAlign: 'center', marginTop: '200px' }}>List of Item</h1>
                <ItemList items={items} onDelete={handleDelete} />
                {/* Home Button */}
                <Link to='/' className='goBack'> <SiGooglehome /></Link>
            </div>
        </div>
    )
}

export default MainItemList;