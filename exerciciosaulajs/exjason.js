b1.style.color='white';
b1.style.backgroundColor= 'blue';

    const pegarDadosCep = () => {
    let dados = 0;
    let ldados = [];
    const cep = document.getElementById('cep').value
   

    const url = "https://viacep.com.br/ws";

     fetch(`${url}/${cep}/json/`)
    .then(response => response.json())
    .then (dados => {
        console.log("dados", dados)
        
    })
}

function newdados() {
    let ldados = document.getElementById('nlista');
   let dados = "";
    const url = "https://viacep.com.br/ws";

    fetch(`${url}/${cep}/json/`)
   .then(response => response.json())
   .then(ldados => ("ldados", ldados))
    
    let nelist = document.createElement('li');
    nelist.textContent = ldados;
    
    ldados.appendChild(nelist);
    }






/*fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
.then(Response => Response.json())
.then(pokemon => setDatall(pokemon)){

    document.appendChild('nlista');

}*/





