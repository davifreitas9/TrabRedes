function exibeSubRede() {
    var tipoInput = document.getElementById("ipQuantidadeSubRede").type;
    
    var rede = document.getElementById("ipSubRede").value;
    var ips = rede.split(".");
    resultado2 = "";
    oct1 = parseInt(ips[0]);
    oct2 = parseInt(ips[1]);
    oct3 = parseInt(ips[2]);
    oct4 = parseInt(ips[3]);
    
    if( ((oct1<=0) || (oct2<0) || (oct3<0) || (oct4!=0)) || ((oct1>255) || (oct2>255) || (oct3>255) ) || ( (isNaN(oct1)) || (isNaN(oct2)) || (isNaN(oct3)) || (isNaN(oct4) ) ) ){
        resultado2 = "Rede inválida";
    }else{
        
        if(tipoInput=="number"){
            quantidade = document.getElementById("ipQuantidadeSubRede").value;
            if ( (quantidade <= 0) || (quantidade == "") ) {
                resultado2 = "Quantidade de IPs inválida";
            }else{
                retornaDadosSubRede();
            }
        }else if(tipoInput=="text"){
            var mascara = document.getElementById("ipQuantidadeSubRede").value;
            retornaDadosSubRedeComMascara(mascara);
        }
    }
    
    oct1 = "";
    oct2 = "";
    oct3 = "";
    oct4 = "";
    document.getElementById("resultado2").innerHTML = resultado2;
    quantidade = -1;
}