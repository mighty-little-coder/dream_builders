// const loginFormHandler = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();

//   // Gather the data from the form elements on the page
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send the e-mail and password to the server
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };

// const loginBtnHandler = async (event) => {
//   console.log("this is probably working")
//   event.preventDefault();
//   document.location.replace('/login');
// };

// var loginBtn = document.querySelector('#login')
// if (loginBtn != null)
//   loginBtn.addEventListener('click', loginBtnHandler);

// var loginForm = document.querySelector('.login-form')
// if (loginForm != null)
//   loginForm.addEventListener('submit', loginFormHandler);

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Gather the data from the sign-up form elements
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // Add any other fields you have for registration like username, etc.

  if (email && password) {
    // Send the email and password to the server
    const response = await fetch('/user', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      document.location.replace('/');
      window.location.href = data.redirectTo; './homepage'
    } else {
      alert('Failed to sign up.');
    }
  }
};

// Add the event listener for the sign-up form
var signupForm = document.querySelector('.signup-form');
if (signupForm != null)
  signupForm.addEventListener('submit', signupFormHandler);

