const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendButton = document.getElementById("send-button");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    sendButton.disabled = true;
    sendButton.textContent = "Sending...";
    formStatus.textContent = "";

    try {
        const response = await fetch(
            "https://formspree.io/f/mbgdkqqy",
            {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Message could not be sent.");
        }

        formStatus.textContent = "Message sent successfully!";
        contactForm.reset();
    } catch (error) {
        formStatus.textContent =
            "Something went wrong. Please try again.";
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = "Send Message";
    }
});
