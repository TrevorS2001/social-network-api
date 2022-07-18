const router = require('express').Router();

const {
    getUserById,
    getAllUser,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    deleteFriend,
  } = require('../../controllers/user-controller');

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').put(updateUser).get(getUserById).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;