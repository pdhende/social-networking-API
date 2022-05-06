const router = require('express').Router();
const { getUsers, getUserById, addNewUser } = require('../../controllers/userController');

router.route('/').get(getUsers).post(addNewUser);
router.route('/:id').get(getUserById);

module.exports = router;
