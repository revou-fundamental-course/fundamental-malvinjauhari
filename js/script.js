document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItem = document.querySelector('.nav-item');

    hamburger.addEventListener('click', function() {
        
        if (navItem.style.display === 'block') {
            navItem.style.display = 'none';
        } else {
            navItem.style.display = 'block';
        }
    });
});

//Prompt

function getName() {
    let name = prompt("What is your name?");
    while (!name) {
        alert("Name is required");
        name = prompt("What is your name?");
    }
    document.getElementById("welcome-title").textContent = name;
}

window.onload = getName;

// Form Validation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    const currentTime = new Date().toLocaleString();

    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Current Time: ${currentTime}</p>
        <p>Name: ${name}</p>
        <p>Date Of Birth: ${dob}</p>
        <p>Gender: ${gender}</p>
        <p>Message: ${message}</p>
    `;
});