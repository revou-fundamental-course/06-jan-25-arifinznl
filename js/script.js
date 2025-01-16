// JavaScript   
// Fungsi untuk meminta input nama pengguna  
function requestUserName() {  
    let userName = prompt("Siapakah Nama Anda?", ""); // Meminta nama pengguna  
    document.getElementById("greetingUser").innerHTML = userName; // Menampilkan nama pengguna  
}  
  
// Fungsi Input nama terbuka saat website dimuat  
window.onload = requestUserName; // Memanggil fungsi saat halaman dimuat  
  
// Event listener untuk tombol "Switch User"  
document.getElementById("btnSwitchUser").addEventListener("click", function () {  
    requestUserName(); // Memanggil fungsi requestUserName saat tombol diklik  
});  
  
// Mengambil elemen formulir dan output  
const contactForm = document.querySelector('form');  
const outputSection = document.querySelector('.output-section');  
  
// Event listener untuk pengiriman formulir  
contactForm.addEventListener('submit', (event) => {  
    event.preventDefault(); // Mencegah pengiriman formulir default  
  
    // Mengambil nilai input dari formulir  
    const name = document.getElementById('inputName').value;  
    const birthdate = document.getElementById('inputBirthdate').value;  
    const email = document.getElementById('inputEmail').value;  
    const message = document.getElementById('inputMessage').value;  
  
    // Menghapus output sebelumnya  
    outputSection.querySelector('.output-data').innerHTML = '';  
  
    // Membuat elemen output baru  
    const outputElements = [  
        `Current time : ${new Date().toLocaleString()}`, // Menampilkan waktu saat ini  
        `Name : ${name}`, // Menampilkan nama  
        `Birthdate : ${birthdate}`, // Menampilkan tanggal lahir  
        `Email : ${email}`, // Menampilkan email  
        `Message : ${message}`, // Menampilkan pesan  
    ];  
  
    // Menambahkan elemen output ke dalam output section  
    outputElements.forEach(element => {  
        const p = document.createElement('p'); // Membuat elemen paragraf  
        p.textContent = element; // Mengisi teks paragraf  
        outputSection.querySelector('.output-data').appendChild(p); // Menambahkan paragraf ke output data  
    });  
});  
  
// Banner Autoslide  
var currentSlideIndex = 1; // Indeks slider awal  
showSlides(currentSlideIndex); // Menampilkan slide pertama  
  
// Fungsi untuk mengubah slide  
function changeSlide(n) {  
    showSlides(currentSlideIndex += n); // Mengubah indeks slide  
}  
  
// Fungsi untuk menampilkan slide berdasarkan indeks  
function showSlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("slide"); // Mengambil semua elemen slide  
    if (n > slides.length) { currentSlideIndex = 1 } // Jika indeks lebih dari jumlah slide, kembali ke slide pertama  
    if (n < 1) { currentSlideIndex = slides.length; } // Jika indeks kurang dari 1, kembali ke slide terakhir  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none"; // Menyembunyikan semua slide  
    }  
    slides[currentSlideIndex - 1].style.display = "block"; // Menampilkan slide yang sesuai dengan indeks  
}  
  
// Mengatur interval untuk mengubah slide secara otomatis  
setInterval(() => {  
    changeSlide(1); // Mengubah slide setiap 2 detik  
}, 2000);  
