const express = require('express');
const router = express.Router();
const controllers=require('./itunes.controller');

router.post('/create',controllers.create);

router.get('/itunes',controllers.read.allItunes);

router.put('/update', controllers.update);

router.delete('/deleteitunesByID/:id',controllers.deleteByID);

module.exports = router;