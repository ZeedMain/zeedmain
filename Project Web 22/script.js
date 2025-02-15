// Fungsi untuk menampilkan pop up
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Fungsi untuk menutup pop up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// Fungsi untuk mengirim pesanan ke email
function kirimPesanan() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    var link = "mailto:ceenzeed@gmail.com?subject=Pesanan dari Website&body=Nama: " + nama + "\nEmail: " + email + "\nPesan: " + pesan;

    window.location.href = link;
}
// Menambahkan event listener pada tombol kirim
document.getElementById("kirim").addEventListener("click", function(event) {
    event.preventDefault();
    kirimPesanan();
});