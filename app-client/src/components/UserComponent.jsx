import React, { useState, useEffect } from 'react';
import { getAllUsers, saveUser } from '../service/user-service';
import TableComponent from './TableComponent/TableComponent';
import './userComponent.css';

export default function UserComponent() {
    const [userItems, setUsersItem] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    useEffect(getUser, [])

    function getUser() {
        getAllUsers().then((res) => { setUsersItem(res) });
    }

    // פונקציות שמושכות מהאינפוט את הערך ומגדירות את הסטייט בהתאם
    function changeFirstNameInput(e) {
        setFirstName(e.target.value)
    };
    function changeLastNameInput(e) {
        setLastName(e.target.value)
    };
    function changeAgeInput(e) {
        setAge(e.target.value)
    };
    function changeEmailInput(e) {
        setEmail(e.target.value)
    };

    // פונקציה ששומרת דברים עם השרת לדאטה בייס
    //savetUser פונקציה שמקבלת אובייקט ושולחת לשרת ששולח לדאטה בייס 

    function saveNewUserFrom(event) {
        event.preventDefault(); // מונע את הרענון של הדף שנוצר בגלל הסבמיט של הטופס
        const userToSave = { firstName, lastName, age, email } // שיטת סיריליזיישן , לוקחים משתנים ומאחדים אותם לאובייקט אחד
        saveUser(userToSave)
            .then(res => { alert(`user created successfully!`); });
    }

    return (
        <div>
            UsersComponent
            <div>
                {/* פונקציה שמדלגת על ההגדרה של מפתח כלומר key */}
                {/* {React.Children.toArray(userItems.map(user => { return <h2>{user.name}</h2>; }))} */}
            </div>
            <div className="formContainer">
                <h2>form</h2>
                <form onSubmit={saveNewUserFrom}>
                    <label htmlFor="FirstName">firstName:</label>
                    <input type="text" onChange={changeFirstNameInput} name="FirstName" required />
                    <label htmlFor="lastName">lastName:</label>
                    <input type="text" onChange={changeLastNameInput} name="lastName" required />
                    <label htmlFor="age">age:</label>
                    <input type="number" onChange={changeAgeInput} name="age" required />
                    <label htmlFor="Email">Email:</label>
                    <input type="Email" onChange={changeEmailInput} name="Email" required />
                    <button>save user</button>
                </form>
            </div>
            <div>
                {/* יצירת טבלה עם כל המידע בפנים */}
                <TableComponent userItems={userItems} />
            </div>

        </div>
    )
}
