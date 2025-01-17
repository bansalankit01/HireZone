
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled'); 
    }
});


const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
});



//  alert for apply job and save job 

function showCustomAlert(message) {
    // Set the message
    document.getElementById("custom-alert-message").textContent = message;

    // Show the alert
    document.getElementById("custom-alert").style.display = "block";
  }

  function closeCustomAlert() {
    // Hide the alert
    document.getElementById("custom-alert").style.display = "none";
  }


//   alert for contact form

function showCustomAlert(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if all fields are filled
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Show the alert
      document.getElementById("custom-alert").style.display = "block";
    } else {
      alert("Please fill out all required fields.");
    }
  }

  function closeCustomAlert() {
    // Hide the alert
    document.getElementById("custom-alert").style.display = "none";

    // Optionally, you can reset the form after showing the alert
    document.querySelector("form").reset();
  }



