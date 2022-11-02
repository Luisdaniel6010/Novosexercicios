

function captura() {
    var nomb=document.getElementById("pnombre").value;
    var anos=document.getElementById("idade").value;
    var tel=document.getElementById("telef").value;
    let myArr =[nomb, anos, tel]

    if(nomb==""){
        alert("Este campo é obrigatorio");
        document.getElementById("pnombre").focus(); 
       
    }else{
        if(anos==""){
        alert("Este campo é obrigatorio");
        document.getElementById("idade").focus();
    }else{
        if (tel==""){
        alert("Este campo é obrigatorio");
        document.getElementById("telef").focus(); 
    }else{
        console.log(myArr);
        document.getElementById("pnombre").value=""; 
        document.getElementById("idade").value=""; 
        document.getElementById("telef").value=""; 
        alert("ingrese un proximo nombre");
    }
}
}
}
document.write(myArr);
