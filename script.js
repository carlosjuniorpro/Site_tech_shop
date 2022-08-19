let todos = () => {
  let produtos = document.getElementsByClassName("conjunto");
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].style.display = "block";
  }


  document.getElementsById("categoria").style.height = tamanho + "px";

}

let mostrar = (categoria) => {
  let produtos = document.getElementsByClassName("conjunto");


  for (let i = 0; i < produtos.length; i++) {//o número de produtos.legth nesse caso vai ser 18, pq existem 18 produtos, mas com o primeiro produto está na posição 0 o certo é usar o sinal de menor, e não <=.
    if (categoria == produtos[i].id) {
      produtos[i].style.display = "block";
    } else {
      produtos[i].style.display = "none";
    }
  }


}

let senha = () =>{
let caractere = document.getElementById("caractere").value;

  if (caractere.length < 8){
    document.getElementById("resposta").innerHTML = "Senha inválida, digite pelo menos 4 caracteres";
    document.getElementById("botao").disabled = true;
    document.button.style.backgroundColor = "red";
  } else{
    document.getElementById("resposta").innerHTML = " ";
    document.getElementById("botao").disabled = false;
  }
}
