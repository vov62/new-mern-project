const usersRouter = require('express').Router();
const usersCtrl = require('../controllers/users-ctrl');

// מקבל את הפונקציות מהקונטרול //

usersRouter.post('/', usersCtrl.createUser);
usersRouter.get('/', usersCtrl.getAllUsers);
usersRouter.post('/', usersCtrl.saveNewUser);
usersRouter.get('/id/:id', usersCtrl.getUserById);
usersRouter.get('/name/:name', usersCtrl.getUserByName);
usersRouter.delete('/delete/:id', usersCtrl.deleteUser);
usersRouter.put('/update/:id', usersCtrl.updateUser);

module.exports = usersRouter;