const router = require('express').Router();
const { getAllThoughts, getThoughtById, addNewThought, updateThought } = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(addNewThought);
router.route('/:id').get(getThoughtById).put(updateThought);

module.exports = router;