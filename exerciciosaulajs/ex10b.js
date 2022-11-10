let nomb;
let idad;
let continuar=false;
let ingresar=true;
let array1 =[]
let msjs = document.getElementById('msj')
let lista = document.createElement('li')
let ndados = document.querySelector('#nlista')

do{
   
    nomb = document.getElementById("nome").value;
    idad = document.getElementById("idade").value;

    let resposta = {
       firstname: nomb,
       age: idad
    }
    array1.push(resposta);
    continuar = window.confirm('Deseja ingresar novos dados');
   

}while(continuar);

console.log(array1)

let res = 0;
let nm = " ";

for(let i = 0; i < array1.length; i++){
   if(array1[i].age > res){
    res = array1[i].age
    nm = array1[i].firstname
   } 
}
console.log(`a pessoa com mais idade é: ${nm} e sua idade é ${res}`)
lista.textContent=`A pessoa com mais idade é ${nm} e sua idade é ${res}`
ndados.appendChild(lista)

for(let i = 0; i< array1.length-1; i++){
    if(array1[i].age > array1[i+1].age){
        console.log(`${array1[i].firstname} é mais velho que ${array1[i+1].firstname}`)
    }else{
        console.log(`${array1[i+1].firstname} é mais velho que ${array1[i].firstname}`)
    }
}


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
