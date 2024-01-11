// const router = require('express').Router();
// const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     res.render('homepage', {
//       // users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;

// router.get('/', withAuth, async (req, res) => {
//   try {
//     res.render('homepage', {
//       // users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
const router = require('express').Router();
const { User, Post, Comment, Vehicle, RepairHistory } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.findAll({
    });
    const vehicles = vehicleData.map(vehicle => vehicle.get({ plain: true }));

    let selectedVehicle = vehicles[0] || {};

    if (selectedVehicle) {
      const historyData = await RepairHistory.findAll({
        where: {
          VehicleId: selectedVehicle.id
        },
      });
      selectedVehicle.history = historyData.map(entry => entry.get({ plain: true }));
    }

    // res.render('homepage', {
    //   vehicles,
    //   selectedVehicle,
    //   logged_in: req.session.logged_in,
    // });
    app.get('/homepage', (req, res) => {
      if (req.session.logged_in) {
        res.render('homepage');
      } else {
        res.redirect('/login');
      }
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;


