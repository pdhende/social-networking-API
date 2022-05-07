const router = require('express').Router();
const { getAllThoughts, getThoughtById, addNewThought } = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(addNewThought);
router.route('/:id').get(getThoughtById);

module.exports = router;