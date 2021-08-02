function openModal(){
    let open = document.getElementById('modalBuy')
    open.style.display = "block"
}

function closedModal(){
    document.getElementById('modalBuy').style.display = "none"
}

function finalized(){
    document.getElementById('modalBuy').style.display = "none"
    Swal.fire({
        icon: 'success',
        title: 'Eba, pedido realizado com sucesso!',
        text: 'Está mensagem só é exibida ao estar logado e o form de compra preenchido(o que ainda não foi habilitado), obrigado por testar meu sistema, L. Chaves agradece (:',
        footer: '<a href="./produtos.html"> Deseja tentar novamente?</a>'
    })
}