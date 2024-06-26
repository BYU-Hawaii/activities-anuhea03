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

const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > div');
const imageLength = imageItems.length;
const perView = 3;
let totalScroll = 0;
const delay = 2000;

imageWrapper.style.setProperty('--per-view', perView);

// Adjust insertion logic to match perView
for (let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
    totalScroll++;
    if (totalScroll === imageLength + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        imageWrapper.style.transition = '0s';
        imageWrapper.style.left = '0';
        autoScroll = setInterval(scrolling, delay);
    }
    const widthEl = document.querySelector('.image-wrapper > div').offsetWidth + 24;
    imageWrapper.style.left = `-${totalScroll * widthEl}px`;
    imageWrapper.style.transition = '.3s';
}
