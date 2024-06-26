function validateForm() {
    var name = document.forms["eventForm"]["name"].value;
    var address = document.forms["eventForm"]["address"].value;
    var guests = document.forms["eventForm"]["guests"].value;

    if (name == "" || address == "" || guests == "") {
        alert("All fields must be filled out.");
        return false;
    } else {
        // Prevent the default form submission
        event.preventDefault();
        displayThankYou();
        return false;
    }
}

function displayThankYou() {
    var formElement = document.getElementById('eventForm');
    formElement.innerHTML = '<h3>Thank you for registering!</h3><p>We look forward to seeing you at our wedding!</p>';
}

function updateCountdown() {
    const weddingDate = new Date('2024-07-05T00:00:00');
    const now = new Date();
    const difference = weddingDate - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `${days} DAYS TO GO!`;

    if (difference <= 0) {
        clearInterval(interval);
        countdownElement.innerText = "Today is the big day!";
    }
}

const interval = setInterval(updateCountdown, 1000); // Update every second

document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        document.getElementById('thankYouMessage').style.display = 'block';
    } else {
        alert('Please choose a file before uploading.');
    }
});


const gallerySlider = document.querySelector('.gallery-slider');
const galleryImages = document.querySelectorAll('.gallery-slider img');

let currentIndex = 0;
const totalImages = galleryImages.length;

// Clone the first and last images for seamless scrolling
const firstClone = galleryImages[0].cloneNode(true);
const lastClone = galleryImages[totalImages - 1].cloneNode(true);

gallerySlider.appendChild(firstClone);
gallerySlider.insertBefore(lastClone, galleryImages[0]);

// Adjust slider width based on total images
gallerySlider.style.width = `${100 * (totalImages + 2)}
