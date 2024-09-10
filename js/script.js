// JavaScript
function hitungLuasSegitiga() {
  let alas = parseFloat(document.getElementById("alas_segitiga").value);
  let tinggi = parseFloat(document.getElementById("tinggi_segitiga").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Masukkan Angka Yang Valid");
    return;
  }
  let luas = 0.5 * alas * tinggi;

  document.getElementById("luas_segitiga").value = luas;
}

function hitungLuasJajarGenjang() {
  let alas = parseFloat(document.getElementById("alas_jajar_genjang").value);
  let tinggi = parseFloat(
    document.getElementById("tinggi_jajar_genjang").value
  );
  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Masukkan Angka Yang Valid");
    return;
  }
  let luas = alas * tinggi;

  document.getElementById("luas_jajar_genjang").value = luas;
}
