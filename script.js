//let entrada = prompt("Digite o ano que voce nasceu")
//alert(2023 - entrada)
//alert(typeof entrada)
let section = document.querySelector("main");

function toDarkSide() {
  section.classList.add("dark");
  section.classList.remove("ligth")
}
function toJedSide() {
    section.classList.add("light");
    section.classList.remove("dark")
  }
  
  const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
