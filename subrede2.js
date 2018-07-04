var resultado2;
var quantidade = -1;
function retornaClasse(oct1){
    
    if( (oct1>0) && (oct1<=127) ){
        return "Classe A";
    }else if( (oct1>=128) && (oct1<=191) ){
        return "Classe B";
    }else if( (oct1>=192) && (oct1<=223) ){
        return "Classe C";
    }else if( (oct1>=224) && (oct1<=239) ){
        return "Classe D";
    }else if( (oct1>=240) && (oct1<=255) ){
        return "Classe E";
    } 
}
function retornaMascara(aux, classe){
    if (aux == -1) {
        if( (oct1>0) && (oct1<=127) ){
            return 255 + " . " + masc(aux) + " . " + 0 + " . " + 0;
        }else if( (oct1>=128) && (oct1<=191) ){
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;
        }else if( (oct1>=192) && (oct1<=255) ){
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
        }
    } else if ( classe == "Classe A" ) {
        if( aux<=254 ){
            aux = Math.ceil(aux); //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        }else if( (aux>254) && (aux<=65534) ){
            aux = Math.ceil(aux/256); //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;

        }else if( (aux>65534) && (aux<=16777214) ){
            aux = Math.ceil(aux/65536);  //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + masc(aux) + " . " + 0 + " . " + 0;
            
        }
            
    } else if ( classe == "Classe B" ) {
        if( aux<=254 ){
            aux = Math.ceil(aux);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        }else if( (aux>254) && (aux<=65534) ){
            aux = Math.ceil(aux/256);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;

        }
    } else if ( (classe == "Classe C")  ) {
        if( aux<=254 ){
            aux = Math.ceil(aux);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        } 
    }
}
function calculaHosts(subredes){
    if(subredes==-1){
        return -1; //impossivel calcular hosts
    }else{
        return (256/subredes)-2; //Subtrai o endereço de rede e broadcast
    }
}



function exibeInformativo(){
    return  "Quantidade de IPs não suportada pelo tipo de Rede </br> </br>" +
            "Classe A :   1.x.x.x - 126.x.x.x  => Máximo de hosts 16.777.214</br>" +
            "Classe B : 128.x.x.x - 191.x.x.x => Máximo de hosts 65.534</br>" +
            "Classe C : 192.x.x.x - 223.x.x.x => Máximo de hosts 254</br>" +
            "Classe D : 224.x.x.x - 239.x.x.x ( Reservado para multicasting )</br>" +
            "Classe E : 240.x.x.x - 254.x.x.x ( Experimental, usado para pesquisa )</br> </br>" +
            "O endereço de classe A 127 não pode ser usado e é reservado às funções de loopback e de diagnóstico"
}

function exibeInformativoSubRede(){
    return  "Quantidade de SubRedes não suportada pelo tipo de Rede </br> </br>" +
            "Classe A :   1.x.x.x - 126.x.x.x  => Máximo de subredes 4194304</br>" +
            "Classe B : 128.x.x.x - 191.x.x.x => Máximo de subredes 16384</br>" +
            "Classe C : 192.x.x.x - 223.x.x.x => Máximo de subredes 64</br>" +
            "Classe D : 224.x.x.x - 239.x.x.x ( Reservado para multicasting )</br>" +
            "Classe E : 240.x.x.x - 254.x.x.x ( Experimental, usado para pesquisa )</br> </br>" +
            "O endereço de classe A 127 não pode ser usado e é reservado às funções de loopback e de diagnóstico"
}

 //Esse função exibe os intervalos das subredes
function exibeIntervalosSubRede(subredes, hosts){
    if ( (subredes<=64) && (hosts <= 254) ){
        var i;
        resultado2 += "</br>";
        resultado2 += "<table>";
        resultado2 += "<tr> <th>Endereço de Rede</th> <th>IP Inicial</th> <th>IP Final</th> <th>Broadcast</th> <tr>"
        for (i = 0; i < subredes; i++){
            resultado2 += "<tr>";
            resultado2 += "<td>" + oct1 + "." + oct2 + "." + oct3 + "." + oct4 + "</td>"; // Rede
            resultado2 += "<td>" + oct1 + "." + oct2 + "." + oct3 + "." + (oct4+1) + "</td>"; //IP Inicial
            resultado2 += "<td>" + oct1 + "." + oct2 + "." + oct3 + "." + (oct4+hosts) + "</td>"; //IP Final
            resultado2 += "<td>" + oct1 + "." + oct2 + "." + oct3 + "." + (oct4+hosts+1) + "</td>"; //IP Broadcast
            resultado2 += "</tr>";
            oct4+=hosts+2;
        }
        resultado2 += "</table>";
    } else {
        resultado2 += "</br></br><strong>O sistema lista somente as subredes com menos de 254 hosts e até 64 subredes</strong>";
    }
}


//Esse função calcula a quantidade de subredes de acordo com a quantidade de subredes escolhida pelo usuário
function calculaSubRede(quantidade, classe){
    var i=1, j;
    for(j=1; j <= quantidade; j*=2){
        if(i < quantidade){
            i=j;   
        } else {
            break;
        }
    }
    
    if(i < quantidade){
        i*=2;   
    }
    
    if( (classe=="Classe A") ){
        if(quantidade<=4194304){
            return i;
        } else {
            return -1;
        }
    } else if( (classe=="Classe A") || (classe=="Classe B") ){
        if(quantidade<=16384){
            return i;
        } else {
            return -1;
        }
    } else if( (classe=="Classe A") || (classe=="Classe B") || (classe=="Classe C") ){
        if(quantidade<=64){
            return i;
        } else {
            return -1;
        }
    } else {
        return -1; //impossivel montar subrede
    }
}


function exibeDados() {
    resultado2 += "IP : " + retornaClasse(oct1) + "</br>";
    resultado2 += "Mascara : " + retornaMascara( quantidade, retornaClasse(oct1) ) + "</br>";
    alert(retornaMascara( quantidade, retornaClasse(oct1) ));
        if( calculaSubRede(quantidade, retornaClasse(oct1)) != -1 ){
            resultado2 += "Quantidade de Subredes : " + calculaSubRede(quantidade, retornaClasse(oct1))+ "</br>";
            resultado2 += "Quantidade de Hosts : " + calculaHosts(calculaSubRede(quantidade,retornaClasse(oct1))) + "</br>";
            exibeIntervalosSubRede( calculaSubRede(quantidade,  retornaClasse(oct1)), calculaHosts(calculaSubRede(quantidade,  retornaClasse(oct1))) );    
        } else {
            resultado2 = exibeInformativoSubRede();
        }
}


function retornaDadosSubRede() {
    if (quantidade === 0) {
       resultado2 += "Rede vazia";
    } else {
        
        if( (quantidade > 0) && ( quantidade <= 254 ) ){
            if( (retornaClasse(oct1) == "Classe A") || (retornaClasse(oct1) == "Classe B") || (retornaClasse(oct1) == "Classe C") ){
                exibeDados();
            } else if (retornaClasse(oct1) == "Classe D"){
                resultado2 = "Classe D : 224.x.x.x - 239.x.x.x ( Reservado para multicasting )</br>";
            } else {
                resultado2 = "Classe E : 240.x.x.x - 254.x.x.x ( Experimental, usado para pesquisa )</br>";
            }
        }else if( (quantidade > 254) && (quantidade <= 65534) ){
            if( (retornaClasse(oct1) == "Classe A") || (retornaClasse(oct1) == "Classe B") ){
                exibeDados();
            } else {
                resultado2 = exibeInformativo();
            }
        }else if( (quantidade > 65534) && (quantidade <= 16777214) ){
            if ( retornaClasse(oct1) == "Classe A" ){
                exibeDados();
            } else {
                resultado2 = exibeInformativo();
            }
        }
        
    }
}



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