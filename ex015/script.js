function verificar() {
    var data = new Date()
    var  ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
           genero = 'Homem'

           if (idade>=0 && idade <10) {
                //criança     
                img.setAttribute('src', 'crincahomem.png')       
           } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'adolescentehomem.png')    
           } else if ( idade<50) {
                //adulto
                img.setAttribute('src', 'homem.png')    
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')    
            }

      } else if (fsex[1].checked) {
            genero= 'Mulher'

            if (idade>=0 && idade <10) {
                //criança  
                img.setAttribute('src', 'crincamulher.png')              
           } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'adolescentemulher.png')    
           } else if ( idade<50) {
                //adulto
                img.setAttribute('src', 'mulher.png')    
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa.png')    
            }
      }

      res.style.textAlign = ' center'
      res.innerHTML=`Você é um(a) ${genero} com ${idade} anos`
      res.appendChild(img)
    }
    }