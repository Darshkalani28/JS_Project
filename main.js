// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the form
    const form = document.querySelector("form");

    // Add a submit event listener
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Fetch values from form inputs
        const name = document.getElementById("myname").value;
        const email = document.getElementById("myemail").value;
        const division = document.getElementById("div1").value;
        const suggestion = document.getElementById("myarea").value;

        // Log the data to the console
        console.log("Feedback Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Division:", division);
        console.log("Suggestion:", suggestion);

        // Optional: Clear the form fields
        form.reset();
    });
});
