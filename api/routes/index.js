const express = require('express')
const router = express.Router();

router.get('/test', function(req, res, next) {
    res.send({
        'message': "Hi i am akshat"
    })
});

module.exports = router;