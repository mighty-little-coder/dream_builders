// const router = require('express').Router();
// const { User } = require('../../models');

// router.get('/', async (req, res) => {
//   let users = await User.findAll({})
//   res.json(users)
// })

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });


// // Sign up new user profile
// router.post('/login', async (req, res) => {
//   console.log('Login attempt:', req.body);
  
//   try {
//     const newUserData = await User.create({
//       // name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.user_id = newUserData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: newUserData, message: 'Your account has been created!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //get user by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id)
//     if (!userData) {
//       res.status(404).json({message: 'no user found!'})
//       return;
//     }
//     res.status(200).json(userData)
//   } catch (err) {
//     res.status(500).json({message: 'server error'})
//   }
// })

// // Login page
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Please enter valid user email' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Logout
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;
// const router = require('express').Router();
// const { User } = require('../../models');
const express = require('express');
const router = express.Router();
const { User } = require('../../models');
// List all users
router.get('/', async (req, res) => {
  try {
    let users = await User.findAll({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const newUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;
      
      res.json({ user: newUserData, message: 'Your account has been created!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({message: 'No user found with this ID'});
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({message: 'Server error'});
  }
});

module.exports = router;
