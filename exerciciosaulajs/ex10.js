function newdados() {
let input1 = document.querySelector('#nome');
let input2 = document.querySelector('#idade');
let ldados = document.querySelector('#dados');

let nome = input1.value;
let idade = input2.value;

console.log(nome+" "+idade);

let newlist = document.createElement('li');
newlist.textContent = nome+" "+idade;

ldados.appendChild(newlist);

document.getElementById("nome").value=" "; 
document.getElementById("idade").value=" "; 
}
