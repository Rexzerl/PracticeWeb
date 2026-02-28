function validasiNama() {
    let inputNama = document.getElementById("nama").value;
    let pola = /^[a-zA-Z\s]+$/; // Hanya huruf dan spasi

    if(!pola.test(inputNama)) {
        alert("Nama hanya boleh mengandung huruf dan spasi.");
        return false;
    }
    alert("Nama valid!");
    return true;
}