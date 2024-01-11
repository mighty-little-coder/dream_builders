const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  let users = await User.findAll({})
  res.json(users)
})


// Sign up new user profile
router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const newUserData = await User.create({
      // name: req.body.name,
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

//get user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)
    if (!userData) {
      res.status(404).json({message: 'no user found!'})
      return;
    }
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json({message: 'server error'})
  }
})

// Login page
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Please enter valid user email' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
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

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
