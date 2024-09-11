// Luas Segitiga
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
// Luas Jajar Genjang
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

// keliling segitiga
function hitungKelilingSegitiga() {
  const sisi1 = parseFloat(document.getElementById("sisi1_segitiga").value);
  const sisi2 = parseFloat(document.getElementById("sisi2_segitiga").value);
  const sisi3 = parseFloat(document.getElementById("sisi3_segitiga").value);
  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    alert("Masukkan Angka Yang Valid");
    return;
  }
  const keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("keliling_segitiga").value = keliling;
}

// keliling Jajar Genjang
function hitungKelilingJajarGenjang() {
  const alasp = parseFloat(
    document.getElementById("alasp_jajar_genjang").value
  );
  const sisimiring = parseFloat(
    document.getElementById("sisimiring_jajar_genjang").value
  );
  if (isNaN(alasp) || isNaN(sisimiring)) {
    alert("Masukkan Angka Yang Valid");
    return;
  }
  const keliling = 2 * (alasp + sisimiring);
  document.getElementById("keliling_jajar_genjang").value = keliling;
}

// Fungsi untuk berpindah halaman
function pindahHalaman(id) {
  // Sembunyikan semua section
  var sections = document.querySelectorAll(".main-content2");
  sections.forEach(function (section) {
    section.style.display = "none";
  });

  // Tampilkan hanya section yang dipilih
  var targetSection = document.getElementById("luas-segitiga");
  if (targetSection) {
    targetSection.style.display = "block";
  }
}
function pindahHalaman2(keliling) {
  // Sembunyikan semua section
  var sections = document.querySelectorAll(".main-content");
  sections.forEach(function (section) {
    section.style.display = "none";
  });
  // Tampilkan hanya section yang dipilih
  var targetSection = document.getElementById("keliling-segitiga");
  if (targetSection) {
    targetSection.style.display = "block";
  }
}
