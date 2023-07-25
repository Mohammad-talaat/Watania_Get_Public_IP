const express = require("express");
const router = express.Router();

const {getUserPublicIP} = require('../controllers/api')

router.get('/ip',getUserPublicIP)




module.exports = router;