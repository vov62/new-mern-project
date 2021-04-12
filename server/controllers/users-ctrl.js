const usersModel = require('../models/users-model')

function createUser(req, res) {

    const body = req.body

    if (!body) { // אם אין בודי תחזיר שגיאה
        return res.status(400)
            .json({ success: false, message: "no body found" })
    }
    const user = new usersModel(body)
    if (!body) {
        return res.status(400)
            .json({ success: false, message: "no user found" })
    }
    user.save().then(() => {
        return res.status(200)
            .json({ success: true, message: "user saved" })
    })
        .catch(err => {
            return res.status(401)
                .json({ success: false, message: "user was not found", error: err })
        })
}

// get all users from users"//

async function getAllUsers(req, res) {
    await usersModel.find({}, (err, userItems) => {
        if (err) {
            res.status(400).json({ success: false, error: err })
        }
        if (userItems.length <= 0) {
            res.status(404).json({ success: false, message: "no users found" })
        }
        res.status(200).json({ success: true, data: userItems });
    })
}
async function getUserById(req, res) {
    await usersModel.findById(re.params.id, (err, userItem) => {
        if (err) {
            res.status(400).json({ success: false, error: err });
        }
        if (!userItem) {
            res.status(404).json({ success: false, message: "no user available" })
        }
        res.status(200).json({ success: true, data: userItem })
    })
}
async function saveNewUser(req, res) {
    await usersModel.insertMany(req.body.user, (err) => {
        if (err) {
            res.status(400).json({ success: false, error: err })
        }
        res.status(201).json({ success: true, message: req.body.user })
    })
}
async function getUserByName(req, res) {
    let userName = req.params.name;
    await usersModel.find({ name: { $regex: userName, $options: "i" } }, (err, userItem) => { // אופציה לחיפוש ע"י צירופי אותיות וללא הבדלה בין אותיות גדולות לקטנות
        if (err) {
            res.status(400).json({ success: false, error: err })
        };
        if (!userItem || userItem.length <= 0) {
            res.status(404).json({ success: false, message: "no user available" })
        }
        re.status(200).json({ success: true, data: userItem });
    })
}
async function deleteUser(req, res) {
    usersModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            res.status(400).json({ success: false, error: err })
        }
        res.status(201).json({ success: true, data: doc, message: "user deleted successfully" })
    })

}
async function updateUser(req, res) {
    usersModel.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
        if (err) {
            res.status(400), json({ success: false, error: err })
        }
        res.status(300).json({ success: true, data: doc, message: "user updated successfully" })
    })
}
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    saveNewUser,
    getUserByName,
    deleteUser,
    updateUser,
}