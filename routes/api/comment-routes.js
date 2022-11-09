const router = require('express').Router();
const { addComment,
        removeComment,
        addReply,
        removeReply
     } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply) // this is PUT instead of POST because we're not creating a new reply resource, just updating comment resource
    .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;