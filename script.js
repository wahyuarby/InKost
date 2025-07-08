// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Pilih elemen hamburger dan menu navigasi berdasarkan ID mereka
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('main-nav');

    // Pastikan kedua elemen ada sebelum menambahkan event listener
    if (hamburger && navMenu) {
        // Tambahkan event 'click' pada tombol hamburger
        hamburger.addEventListener('click', () => {
            // Toggle class 'active' pada menu navigasi
            // Class 'active' akan mengubah display dari 'none' menjadi 'flex' (diatur di CSS)
            navMenu.classList.toggle('active');
        });
    }

});