document.getElementById('login-btn').addEventListener('click', function() {
    document.querySelector('.form-wrapper').classList.remove('flip');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.querySelector('.form-wrapper').classList.add('flip');
});

document.getElementById('sign-up-btn').addEventListener('click', function() {
  document.querySelector('.form-wrapper').classList.add('flip');
});

document.getElementById('log-in-btn').addEventListener('click', function() {
  document.querySelector('.form-wrapper').classList.remove('flip');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        return response.text();
      }
    })
    .then(text => {
      if (text === "Invalid credentials") {
        alert("Invalid credentials. Please try again.");
      }
    })
    .catch(error => console.error('Error:', error));
  });