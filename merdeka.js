function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const nomerhp = document.getElementById("nomerhp").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (nama === "") {
    errorMsg.textContent = "Nama tidak boleh kosong.";
    return false;
  }

  if (nomerhp === "") {
    errorMsg.textContent = "Nomer HP tidak boleh kosong.";
    return false;
  }

  if (alamat === "") {
    errorMsg.textContent = "Alamat tidak boleh kosong.";
    return false;
  }

  const namaValid = /^[A-Za-z\s]+$/.test(nama);

  if (!namaValid){
    alert("nama hanya boleh menggunakan huruf!");
    return false;
  }

  errorMsg.textContent = "";
  window.location.href = "berhasil.html";
  return false; 
}
