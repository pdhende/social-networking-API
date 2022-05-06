const router = require('express').Router();
const { getUsers, getUserById } = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/:id').get(getUserById);

module.exports = router;
