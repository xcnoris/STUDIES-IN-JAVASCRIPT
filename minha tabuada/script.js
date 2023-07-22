function gerar() {
    var valor=document.getElementById('txtnunber')
    var res=document.getElementById('res')
    var resultado = document.getElementById('txttabu')
    
    if (Number(valor.value)==0) {
        alert('[ERRO] Verifique os valores!') 
    
    } else{
        var a =  document.getElementById('txtnunber')
        var res=document.getElementById('res')
        var resultado = document.getElementById('txttabu')
        console.log(a)
        resultado.value=`${Number(a.value)}X1 = ${Number(a.value)*1}\n${Number(a.value)}X2 = ${Number(a.value)*2}\n${Number(a.value)}X3 = ${Number(a.value)*3}\n${Number(a.value)}X4 = ${Number(a.value)*4}\n${Number(a.value)}X5 = ${Number(a.value)*5}\n${Number(a.value)}X6 = ${Number(a.value)*6}\n${Number(a.value)}X7 = ${Number(a.value)*7}\n${Number(a.value)}X8 = ${Number(a.value)*8}\n${Number(a.value)}X9 = ${Number(a.value)*9}\n${Number(a.value)}X10 = ${Number(a.value)*10}`
        res.innerHTML='TABUADA GERADA!'
    }

}
