// Define function to start the countdown
function startCountdown() {
    var endTime = new Date();
    endTime.setDate(endTime.getDate() + 10); // Set countdown duration to 1 minute

    var timerInterval = setInterval(updateCountdown, 1000); // Update countdown every second

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var timeRemaining = endTime - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval); // Stop the countdown when time is up
            // startCountdown(); // Restart the countdown
        } else {
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;

            // Print deadline date and time
            printDeadlineDate(endTime);
        }
    }
    updateCountdown(); // Update countdown immediately on start
}
    // Function to print expiration date and time
function printDeadlineDate(deadlineTime) {
    var deadlineElement = document.getElementById("deadline");
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    var deadlineDateTimeString = deadlineTime.toLocaleDateString(undefined, options);
    deadlineElement.innerText = "Expiration Date and Time: " + deadlineDateTimeString;
}

// Start the countdown when the window loads
window.onload = function() {
    startCountdown();
}
