document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'; 
        window.location.href = '/login'; // Redirect to /login after loader
    }, 11000); 
});
