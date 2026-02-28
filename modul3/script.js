let data = [];

document.getElementById("formPendaftaran").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let nohp = document.getElementById("nohp").value.trim();
    let alamat = document.getElementById("alamat").value.trim();
    let editIndex = document.getElementById("editIndex").value;


    if (!validasi(nama, email, nohp, alamat)) {
        return;
    }

    let formData = { nama, email, nohp, alamat };

    if (editIndex === "") {
        data.push(formData);
    } else {
        data[editIndex] = formData;
        document.getElementById("editIndex").value = "";
    }

    this.reset();
    tampilData();
});

function validasi(nama, email, nohp, alamat) {

    if (nama.length < 3) {
        showNotification("Nama minimal 3 karakter");
        return false;
    }

    if (!email.includes("@")) {
        showNotification("Email tidak valid");
        return false;
    }

    if (isNaN(nohp) || nohp.length < 10) {
        showNotification("No HP harus angka dan minimal 10 digit");
        return false;
    }

    if (alamat === "") {
        showNotification("Alamat tidak boleh kosong");
        return false;
    }

    return true;
}

function showNotification(message, type = "error") {
    let notification = document.getElementById("notification");

    notification.innerHTML = message;
    notification.className = "notification";

    if (type === "success") {
        notification.classList.add("success");
    }

    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

function tampilData() {
    let table = document.getElementById("dataTable");
    table.innerHTML = "";

    data.forEach((item, index) => {
        table.innerHTML += `
            <tr>
                <td>${item.nama}</td>
                <td>${item.email}</td>
                <td>${item.nohp}</td>
                <td>${item.alamat}</td>
                <td>
                    <button onclick="editData(${index})">Edit</button>
                    <button onclick="hapusData(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

function editData(index) {
    let item = data[index];

    document.getElementById("nama").value = item.nama;
    document.getElementById("email").value = item.email;
    document.getElementById("nohp").value = item.nohp;
    document.getElementById("alamat").value = item.alamat;
    document.getElementById("editIndex").value = index;
}

function hapusData(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        data.splice(index, 1);
        tampilData();
    }
}