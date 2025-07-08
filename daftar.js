document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        // Di sini Anda bisa menambahkan logika validasi form jika diperlukan
        // Misalnya, cek apakah password dan konfirmasi password sama

        // Menampilkan notifikasi "Anda berhasil membuat akun"
        showNotification("Anda berhasil membuat akun!");

        // Anda juga bisa mereset form setelah sukses (opsional)
        registrationForm.reset();

        // Dalam aplikasi nyata, Anda akan mengirim data form ke backend di sini
        // Contoh:
        /*
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Username:', username);
        console.log('Password:', password);
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         showNotification("Anda berhasil membuat akun!");
        //         registrationForm.reset();
        //     } else {
        //         alert("Pendaftaran gagal: " + data.message);
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert("Terjadi kesalahan saat pendaftaran.");
        // });
        */
    });

    function showNotification(message) {
        // Buat elemen div untuk notifikasi jika belum ada
        let notification = document.querySelector('.notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.classList.add('notification');
            document.body.appendChild(notification);
        }

        notification.textContent = message;
        notification.classList.add('show'); // Tampilkan notifikasi

        // Sembunyikan notifikasi setelah beberapa detik
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000); // Notifikasi akan hilang setelah 3 detik
    }
});