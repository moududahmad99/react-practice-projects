import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'
import './style.css'

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setUsers(data)
		}
		fetchData();
	}, [])

	return (
		<>
			<h3 className='userH3'>User Data</h3>
			<table className='table-wrapper'>
				<thead>
					<tr className='table-row'>
						<th className='table-head'>Name</th>
						<th className='table-head'>Email</th>
						<th className='table-head'>Phone</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id} className='table-row'>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Home Button */}
			<Link to='/' className='goBack'> <SiGooglehome /></Link>
		</>
	);
}

export default UserList;