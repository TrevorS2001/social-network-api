const router = require('express').Router();

const {
  getThoughtById,
  getAllThought,
  createThought,
  updateThought,
  createReaction,
  deleteThought,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought).post(createThought);

router.route('/:id').put(updateThought).get(getThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route("/:thoughtId/reactions").delete(deleteReaction);

module.exports = router;