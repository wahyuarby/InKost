document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and buttons
    const paymentModal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.close-button');
    const payNowBtn = document.getElementById('payNowBtn');
    const paymentButtons = document.querySelectorAll('.status-btn.status-bayar'); // Select all "Pembayaran" buttons
    const paymentNotification = document.getElementById('paymentNotification');

    // Function to open the modal
    function openModal() {
        paymentModal.style.display = 'flex'; // Use flex to center the modal content
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
    }

    // Function to close the modal
    function closeModal() {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Function to show notification
    function showNotification(message) {
        paymentNotification.textContent = message;
        paymentNotification.classList.add('show');
        setTimeout(() => {
            paymentNotification.classList.remove('show');
        }, 3000); // Notification disappears after 3 seconds
    }

    // Event listeners for payment buttons (to open modal)
    paymentButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default button action
            // Here you can dynamically populate modal content based on button data-attributes if needed
            // For now, it's static as per your HTML
            openModal();
        });
    });

    // Event listener for close button
    closeButton.addEventListener('click', closeModal);

    // Event listener for clicking outside the modal content to close it
    window.addEventListener('click', function (event) {
        if (event.target == paymentModal) {
            closeModal();
        }
    });

    // Event listener for "Bayar Sekarang" button inside the modal
    payNowBtn.addEventListener('click', function () {
        closeModal(); // Close the modal first
        showNotification("Pembayaran berhasil!"); // Show success notification

        // Optionally, you can update the table status here (e.g., change "Pembayaran" to "LUNAS")
        // Example: If you have a way to identify which row was clicked, you can change its status.
        // For simplicity, this example doesn't dynamically change the table row,
        // but in a real application, you'd send this to a backend and refresh the data.

        // If you want to simulate updating the table, you would do something like:
        // const clickedButton = document.querySelector('.status-btn.status-bayar[data-payment-id="kas01"]'); // Target the specific button
        // if (clickedButton) {
        //     clickedButton.textContent = 'LUNAS';
        //     clickedButton.classList.remove('status-bayar');
        //     clickedButton.classList.add('status-lunas');
        //     clickedButton.disabled = true; // Disable the button after payment
        // }
    });
});