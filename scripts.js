function katika() {
  const buttonMain = document.querySelector(".btn-section");
  const inputLuas1 = document.getElementById("luas-1");
  const inputLuas2 = document.getElementById("luas-2");
  const inputKeliling1 = document.getElementById("keliling-1");
  const inputKeliling2 = document.getElementById("keliling-2");
  const inputKeliling3 = document.getElementById("keliling-3");
  let paramValidasi = "luas";
  buttonMain.addEventListener("click", (b) => {
    const sectionKeliling = document.querySelector(".section-keliling");
    const sectionLuas = document.querySelector(".section-luas");
    if (b.target.id === "btn-luas") {
      sectionLuas.classList.remove("display");
      sectionKeliling.classList.add("display");
      inputLuas1.value = "";
      inputLuas2.value = "";
      document.querySelector(".output-luas").innerHTML = "";
      return (paramValidasi = "luas");
    }
    if (b.target.id === "btn-keliling") {
      sectionLuas.classList.add("display");
      sectionKeliling.classList.remove("display");
      inputKeliling1.value = "";
      inputKeliling2.value = "";
      inputKeliling3.value = "";
      document.querySelector(".output-keliling").innerHTML = "";
      return (paramValidasi = "keliling");
    }
  });
  function validation(a) {
    let validasi = !0;
    if (a === "luas") {
      return (
        +inputLuas1.value !== 0 || ""
          ? validasi
          : (alert("Nilai Panjang harus diisi :)"), (validasi = !1)),
        +inputLuas2.value !== 0 || ""
          ? validasi
          : (alert("Nilai Tinggi harus diisi :)"), (validasi = !1)),
        validasi
      );
    }
    if (a === "keliling") {
      return (
        +inputKeliling1.value === 0 || ""
          ? (alert("Nilai A harus diisi :)"), (validasi = !1))
          : validasi,
        +inputKeliling2.value === 0 || ""
          ? (alert("Nilai B harus diisi :)"), (validasi = !1))
          : validasi,
        +inputKeliling3.value === 0 || ""
          ? (alert("Nilai C harus diisi :)"), (validasi = !1))
          : validasi,
        validasi
      );
    }
  }

  document.querySelector(".btn-hasil1").addEventListener("click", (n) => {
    if (n.target.className === "hasil") {
      if (validation(paramValidasi)) {
        document.querySelector(".output-luas").innerHTML = `
            <p>L=1/2 x a x t</p>
            <p>L=1/2 x ${inputLuas1.value} x ${inputLuas2.value}</p>
            <p>L= ${inputLuas1.value * inputLuas2.value * 0.5}</p>`;
      }
    } else if (n.target.className === "reset") {
      inputLuas1.value = "";
      inputLuas2.value = "";
      document.querySelector(".output-luas").innerHTML = "";
    }
  });
  document.querySelector(".btn-hasil2").addEventListener("click", (n) => {
    if (n.target.className === "hasil") {
      if (validation(paramValidasi)) {
        document.querySelector(".output-keliling").innerHTML = `
            <p>K = S1 x S2 x S3</p>
            <p>K = ${inputKeliling1.value} x ${inputKeliling2.value} x ${
          inputKeliling3.value
        }</p>
            <p>L=${
              inputKeliling1.value * inputKeliling2.value * inputKeliling3.value
            } </p>`;
      }
    } else if (n.target.className === "reset") {
      inputKeliling1.value = "";
      inputKeliling2.value = "";
      inputKeliling3.value = "";
      document.querySelector(".output-keliling").innerHTML = "";
    }
  });
}
katika();
