const router = require('express').Router();
const { getUsers, getUserById, addNewUser, updateUser } = require('../../controllers/userController');

router.route('/').get(getUsers).post(addNewUser);
router.route('/:id').get(getUserById).put(updateUser);

module.exports = router;
