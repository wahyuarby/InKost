document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and its elements
    const paymentModal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.modal .close-button'); // Lebih spesifik agar tidak bentrok
    const payNowBtn = document.getElementById('payNowBtn');
    const paymentButtons = document.querySelectorAll('.status-btn.status-bayar'); // Select all "Pembayaran" buttons
    const paymentNotification = document.getElementById('paymentNotification');

    // Function to open the modal
    function openModal() {
        paymentModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
    }

    // Function to close the modal
    function closeModal() {
        paymentModal.classList.remove('show');
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
            // Di sini Anda bisa mengambil data dari baris tabel (jika ada lebih dari satu tombol bayar)
            // dan mengisi konten modal secara dinamis.
            // Untuk saat ini, konten modal statis seperti yang ada di HTML Anda.
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

        // *Opsional:* Anda bisa menambahkan logika di sini untuk:
        // 1. Mengirim data pembayaran ke backend (menggunakan fetch/ajax).
        // 2. Memperbarui status di tabel menjadi "LUNAS" (jika hanya ada satu tombol bayar, atau Anda tahu yang mana yang diklik).
        // Contoh sederhana untuk mengubah status tombol yang diklik (jika Anda ingin mencoba):
        /*
        const clickedButton = document.querySelector('.status-btn.status-bayar[data-payment-id="wifi01"]');
        if (clickedButton) {
            clickedButton.textContent = 'LUNAS';
            clickedButton.classList.remove('status-bayar');
            clickedButton.classList.add('status-lunas');
            clickedButton.disabled = true; // Nonaktifkan tombol setelah lunas
        }
        */
    });
});