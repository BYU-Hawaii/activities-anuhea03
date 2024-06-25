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
    formElement.innerHTML = '<h3>Thank you for registering!</h3><p>We look forward to seeing you at the event.</p>';
}

