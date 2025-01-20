
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

// alert button

function showCustomAlert(message) {
    document.getElementById("custom-alert-message").textContent = message;
    document.getElementById("custom-alert").style.display = "block";
  }

  // Function to close the custom alert
  function closeCustomAlert() {
    document.getElementById("custom-alert").style.display = "none";
  }

  // Handle the Contact Form submission
  function handleContactForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if all fields are filled
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (name && email && message) {
      showCustomAlert("Your message has been sent successfully!");
      // Optionally reset the form
      event.target.reset();
    } else {
      alert("Please fill out all required fields.");
    }
  }



  



