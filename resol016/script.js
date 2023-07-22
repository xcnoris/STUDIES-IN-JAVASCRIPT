function contar() {
    var finicio = document.getElementById('txtinicio')
    var ffim = document.getElementById('txtfim')
    var fpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')



    if(finicio.value.length == 0 ||ffim.value.length == 0){
        alert('[ERRO] Verifique os dados!')
    } else {
        res.innerHTML='Contando: <br>' 
        var ini=Number(finicio.value)
        var fim=Number(ffim.value)
        var  passo=Number(fpasso.value)

        if(passo<=0){
            alert('[ERRO] Passo invalido! Considerando passo igual a 1')
            passo=1
        }

        if(ini<fim) {
            //contagem crescente
        for (var c = ini ; c <= fim ; c += passo ){
            res.innerHTML+=`${c} \u{1F449}`
        }
          //contagem decrecente
         }  else {
             for(var c= ini; c>=fim;c-=passo){
                res.innerHTML+=`${c} \u{1F449}`
            }

         }  res.innerHTML+=`\u{1F3C1}`
    }
}
