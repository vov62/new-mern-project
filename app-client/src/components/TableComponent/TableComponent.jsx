import React from 'react'
import './tableDesign.css';

export default function TableComponent(props) {
    const { userItems } = props;

    return (
        <div>
            <h1>TableComponent</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
                {React.Children.toArray(userItems.map((user) => { return <tr><td>{user._id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.age}</td><td>{user.email}</td></tr> }))}
            </table>
        </div>
    )
}
