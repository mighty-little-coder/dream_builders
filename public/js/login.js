const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};


/// Verify why we want this code
// const signupFormHandler = async (event) => {
//   event.preventDefault();
  
//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
  
//   if (name && email && password) {
//     const response = await fetch('/api/users/sign-up', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
    
//     if (response.ok) {
//       document.location.replace('/home');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const homeLogin = () => {
//   console.log('testing')
//   document.location.replace('/login')
// };

// document.querySelector('#login-navbar').addEventListener('click', homeLogin);

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
