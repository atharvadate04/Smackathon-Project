document.getElementById('login-btn').addEventListener('click', function() {
    document.querySelector('.form-wrapper').classList.remove('flip');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.querySelector('.form-wrapper').classList.add('flip');
});