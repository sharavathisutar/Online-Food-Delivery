document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (name && email && password && address && phone) {
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
