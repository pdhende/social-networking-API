const router = require('express').Router();
const { getAllThoughts, getThoughtById, addNewThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(addNewThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;