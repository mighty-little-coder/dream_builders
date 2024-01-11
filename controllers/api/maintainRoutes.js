const router = require('express').Router();
const { User, Vehicles, Repairs } = require('../../models');

// router.get('/', async (req, res) => {
//     let users = await User.findAll({})
//     res.json(users)
// })

// GET all drivers
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: User }, { model: Vehicles }, { model: Repairs }],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET a singler user from User model
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: User }, { model: Vehicles }, { model: Repairs }],
        });

        if (!userData) {
            res.status(404).json({ message: 'User does not exist!' });
            return;
        }

        res.status(200).json(driverData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
