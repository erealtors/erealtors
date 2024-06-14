document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });
});
// Lightbox handling
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});


function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function submitForm() {
  const formData = new FormData(document.querySelector('form'));

  console.log('Form data:', formData.get('name'));

  // fetch("submit_form.php", {
  //     method: "POST",
  //     body: formData
  // })
  // .then(response => response.text())
  // .then(data => {
  //     alert("Thank you for your message. We will get back to you shortly.");
  //     document.querySelector("form").reset();
  // })
  // .catch(error => {
  //     console.error("Error:", error);
  //     alert("There was an error submitting your message. Please try again later.");
  // });
}






