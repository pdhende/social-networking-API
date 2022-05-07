const router = require('express').Router();
const { route } = require('express/lib/application');
const { getUsers, getUserById, addNewUser, updateUser, deleteUser, addNewFriend } = require('../../controllers/userController');

router.route('/').get(getUsers).post(addNewUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addNewFriend);

module.exports = router;
