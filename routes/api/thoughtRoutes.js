const router = require('express').Router();
const { getAllThoughts, getThoughtById, addNewThought, updateThought, deleteThought, addNewReaction } = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(addNewThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addNewReaction);

module.exports = router;