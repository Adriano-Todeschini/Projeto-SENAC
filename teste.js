do{

    var gas = Number(prompt('Digite o preço da Gasolina'));
    var alc = Number(prompt('Digite o preço do Álcool'));
    var bompreço = (alc/gas)

    if(bompreço > 0.7){
        alert('Vale a pena abastecer com Gasolina!')
    }
    else if(bompreço == 0.7){
        alert('Tanto faz abastecer com Gasolina ou com Álcool.')
    }
    else if(bompreço < 0.7){
        alert('Vale a pena abastecer com Álcool!')
    }
    
    continuar = prompt('Deseja efetuar um novo cálculo? Digite "s" para sim, e "n" para não.')

}while (continuar == "s")