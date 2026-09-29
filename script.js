$(document).ready(function () {

    $("#studentForm").submit(function (event) {

        event.preventDefault();

        // Clear previous errors
        $("#nameError").text("");
        $("#emailError").text("");
        $("#phoneError").text("");

        let name = $("#studentName").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();

        let valid = true;

        // Name validation
        if (name === "") {
            $("#nameError").text("Please enter your name.");
            valid = false;
        }

        // Email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#emailError").text("Please enter your email.");
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            $("#emailError").text("Please enter a valid email.");
            valid = false;
        }

        // Phone validation
        let phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            $("#phoneError").text("Please enter your phone number.");
            valid = false;
        }
        else if (!phonePattern.test(phone)) {
            $("#phoneError").text("Phone number must contain 10 digits.");
            valid = false;
        }

        // If all fields are valid
        if (valid) {

            $("#successMessage")
                .stop(true, true)
                .fadeIn();

            // Hide message after 3 seconds
            setTimeout(function () {
                $("#successMessage").fadeOut();
            }, 3000);

            // Display data in console
            console.log("Student Name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone);
        }

    });


    // Reset button
    $("#resetBtn").click(function () {

        $("#nameError").text("");
        $("#emailError").text("");
        $("#phoneError").text("");

        $("#successMessage").hide();

    });

});


$(document).ready(function () {

    // Clear the form whenever the page is refreshed/reloaded
    $("#studentForm")[0].reset();

});