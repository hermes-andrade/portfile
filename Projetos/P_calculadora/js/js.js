function insert(n) {
  const number = document.querySelector(".entrada").value;
  document.querySelector(".entrada").value = number + n;
}
function AC() {
  document.querySelector(".entrada").value = "";
}
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".igual");
    btn.click();
  }
});
function calcular() {
  let resultado = document.querySelector(".entrada").value;
  if (resultado) {
    resultado = eval(resultado);
    if (resultado === Infinity || resultado === -Infinity) {
      document.querySelector(".entrada").value = "Erro: Divisão por zero!";
    } else {
      document.querySelector(".entrada").value = resultado;
    }
  }
  document.querySelector('html').classList.remove('no-js');
}
