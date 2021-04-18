// service תפקידו לקחת את המידע מהשרת

// const apiPort = process.env.PORT || 8080;      // import port from env  מקבלים את הפורט מהורוקו


const API = process.env.NODE_ENV === 'production' ? 'https://users-mern-application.herokuapp.com' : `http://localhost:4000`;


//פונקציה שבודקת אם השרת למעלה

async function callMyServer() {
    try {
        return await fetch(API)
            .then(res => { return res.json() })
            .then(result => { return result.message }) // מחזיר הודעה למשתמש מהשרת. נמצא בדף אינדקס ג'יי אס שורה 24 
    }
    catch (err) {
        console.log(err);
    }
}
async function getAllUsers() {
    try {
        return await fetch(`${API}/users`)
            .then(res => { return res.json() })
            .then(result => { return result.data }) // מחזיר רק את ה data
    }
    catch (err) {
        console.log(err);
    }
}
async function saveUser(newUser) { // פונקציה ששומרת משתמש חדש 
    try {
        return await fetch(API + 'users', {
            method: "Post",
            // שולחים את המידע דרך והופכים לג'ייסון  http 
            body: JSON.stringify(newUser), // פרמטר כי המידע מגיע מבחוץ, מהמשתמש 
            headers: { 'Content-Type': 'application/json' }

        })
            .then(res => { return res.json() }) // תחזיר את התשובה בצורה שאני יכול לקרוא, בג'ייסונית
            .then(result => { return result.data }) // מחזיר רק את ה data
    }
    catch (err) {
        console.log(err);
    }
}

export {  // מייצאים את הפונקציה 
    callMyServer,
    getAllUsers,
    saveUser
}