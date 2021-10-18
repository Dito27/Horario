function carregar() {
    
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos `
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#fee5c3'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fa5c00'
    } else  {
        img.src = 'noite.png'
        document.body.style.background = '#396185'
    }
    if (minutos < 10) {
        minutos = '0' + minutos
    }
}