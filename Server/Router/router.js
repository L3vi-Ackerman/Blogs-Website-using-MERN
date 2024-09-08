const express = require('express');
const router = express.Router();
const {getHomeContents,getdbData} = require('../Controller/router');


router.route('/home').get(getHomeContents);
router.route('/data').get(getdbData);


module.exports = router;
