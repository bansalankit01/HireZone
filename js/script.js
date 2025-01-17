
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



//  JavaScript for the Custom Alert 

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



