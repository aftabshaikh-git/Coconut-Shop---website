
const orderButton = document.getElementById("orderButton");

if (orderButton) {
    orderButton.addEventListener("click", function () {
        const phoneNumber = "919967780684";
        const message = "Hello! I want to order fresh coconuts.";

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
}
