<<<<<<< HEAD
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
=======
const router = require ('express').Router();
const apiRoutes = require ('./api')

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('')
})
>>>>>>> 85467460afca82d05cd8b5b03514be5fb4999494
